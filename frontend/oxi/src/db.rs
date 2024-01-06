use serde::{Deserialize, Serialize};

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct Todo {
    pub id: String,
    pub name: String,
    pub is_done: bool,
}
