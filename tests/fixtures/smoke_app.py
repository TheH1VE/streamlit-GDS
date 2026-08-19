import streamlit_gds as gds

gds.configure(page_title="Smoke", service_name="Smoke", chrome="streamlit")
gds.catalogue.header(organisation="Example")
gds.heading("Smoke test")
value = gds.catalogue.text_input("Name", key="smoke-name")
gds.button("Continue", key="smoke-button")
gds.details("Help", "Some help")
gds.footer(organisation="Example")
