# How to build a fullstack SSR leptos todo app

Make sure Rust is installed. (Get Rust!)[https://www.rust-lang.org/tools/install]

**NOTE**

It is reccomended for Windows users to install the linux rust toolchain in a WSL2 instance as it requires
less fanfare.

```shell
rustup override set nightly
```

```shell
cargo install cargo-leptos
```

```shell
cd modules/

# Actix template
cargo leptos new --git leptos-rs/start # name the project fullstack
```

```shell
cargo leptos watch
```

**NOTE**

If you get the following error message:

```log
it looks like the Rust project used to create this wasm file was linked against
version of wasm-bindgen that uses a different bindgen format than this binary:
       
    rust wasm file schema version: 0.2.91
    this binary schema version: 0.2.87
```

In `Cargo.toml` change the `wasm-bindgen = "=0.2.87"` dependency to the version on the bottom.  

**NOTE**

If after running the project on `localhost:3000` you see nothing in the webpage,
You should change the port on which the app runs on.  

In `Cargo.toml` find `site-addr`, set it to `site-addr = "127.0.0.1:3002"`
You also might want to change the `reload-port` to `3003`


Add dependencies

```toml
lazy_static = "1.4.0"
serde = { version = "1.0.195", features = ["derive"] }
uuid = { version = "1.6.1", features = ["v4"] }
```

Define Todo struct

```rust
use serde::{Deserialize, Serialize};

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct Todo {
    pub id: String,
    pub name: String,
    pub is_done: bool,
}
```

Write logic to add and then fetch todos

```rust
fn HomePage() -> impl IntoView {
    // ...

    let (todos, set_todos) = create_signal(Vec::<Todo>::new());

    view! {
        // ...

        <button on:click=move |_| {
            spawn_local(async move {
                let _ = add_todo("So much to do!".to_string()).await;
                let res = get_todos().await;
                set_todos.set(res.unwrap());
            });
        }>
            "Add Todo"
        </button>
    }

}
```

Store all todos in a single in-memory array on the server side

```rust
lazy_static! {
    static ref DB: Mutex<Vec<Todo>> = Mutex::new(Vec::new());
}
```

Write a server function to get the todos

```rust
#[server(GetTodos)]
pub async fn get_todos() -> Result<Vec<Todo>, ServerFnError> {
    let db = DB.lock()?;

    Ok(db.to_vec())
}
```

Write a server function to add new todos

```rust
#[server(AddTodo)]
pub async fn add_todo(title: String) -> Result<(), ServerFnError> {
    let mut db = DB.lock()?;

    use uuid::Uuid;
    let id = Uuid::new_v4().to_string();

    db.push(Todo {
        id: id,
        is_done: false,
        name: title,
    });

    Ok(())
}
```

Render all the todos in the UI

```rust
view! {
        // ...
        <ul>
            <For
                // `each` takes any function that returns an iterator
                // this should usually be a signal or derived signal
                // if it's not reactive, just render a Vec<_> instead of <For/>
                each=todos
                // the key should be unique and stable for each row
                // using an index is usually a bad idea, unless your list
                // can only grow, because moving items around inside the list
                // means their indices will change and they will all rerender
                key=|todo| todo.id.clone()
                // `children` receives each item from your `each` iterator
                // and returns a view
                children=move |todo| {
                    view! {
                        <li>{format!("{}", todo.name)}</li>
                    }
                }
            />
        </ul>
    }
```