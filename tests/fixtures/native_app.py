import streamlit_gds as gds

gds.title("Native compatibility smoke test")
name = gds.text_input("Name")
contact = gds.selectbox("Contact method", ["Email", "Phone", "Post"])
agreed = gds.checkbox("I agree", key="native-agreed")

with gds.form("native-smoke-form", clear_on_submit=True):
    reference = gds.text_input("Reference", key="native-reference")
    submitted = gds.form_submit_button("Submit", type="primary")

gds.write({"name": name, "contact": contact, "agreed": agreed, "submitted": submitted})
