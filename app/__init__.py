from flask import Flask, request
import dash
import dash_core_components as dcc
import dash_html_components as html

app = Flask(__name__)
app.static_folder = 'static'
app.template_folder = "templates"


from app import routes
