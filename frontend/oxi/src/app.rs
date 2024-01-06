use std::sync::Mutex;

use crate::db::Todo;
use lazy_static::lazy_static;
use leptos::*;
use leptos_meta::*;
use leptos_router::*;

lazy_static! {
    static ref DB: Mutex<Vec<Todo>> = Mutex::new(Vec::new());
}

#[component]
pub fn App() -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context();

    view! {
        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Stylesheet id="leptos" href="/pkg/leptos_start.css"/>

        // sets the document title
        <Title text="Welcome to Leptos"/>

        // content for this welcome page
        <Router>
            <main>
                <Routes>
                    <Route path="/*any" view=HomePage/>
                </Routes>
            </main>
        </Router>
    }
}

/// Renders the home page of your application.
#[component]
fn HomePage() -> impl IntoView {
    // Creates a reactive value to update the button
    let (count, set_count) = create_signal(0);
    let on_click = move |_| set_count.update(|count| *count += 1);

    let (todos, set_todos) = create_signal(Vec::<Todo>::new());

    view! {
        <h1>"Welcome to Leptos!"</h1>
        <button on:click=on_click>"Click Me: " {count}</button>
        <button on:click=move |_| {
            spawn_local(async move {
                let _ = add_todo("So much to do!".to_string()).await;
                let res = get_todos().await;
                set_todos.set(res.unwrap());
            });
        }>
            "Add Todo"
        </button>

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
}

#[server(GetTodos)]
pub async fn get_todos() -> Result<Vec<Todo>, ServerFnError> {
    let db = DB.lock()?;

    Ok(db.to_vec())
}

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

    println!("{:?}", db);

    Ok(())
}
