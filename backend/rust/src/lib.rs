wai_bindgen_rust::export!("universal-lib.wai");

pub struct UniversalLib;

impl universal_lib::UniversalLib for UniversalLib {
    fn hello(user: String) -> String {
        format!("Hello {user}")
    }
}
