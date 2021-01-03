from flask import Flask, request
import dash
import dash_core_components as dcc
import dash_html_components as html
from flask_session import Session

SESSION_TYPE = 'memcache'

app = Flask(__name__)
sess = Session()

app.static_folder = 'static'
app.template_folder = "templates"


app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

sess.init_app(app)

from app import routes
