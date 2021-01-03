from flask import render_template, request, Markup, flash, get_flashed_messages
from app import app
import re

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home')

@app.route('/buildGrid', methods=['GET','POST'])
def build_grid():
    rows = request.form.get('getRows')
    cols = request.form.get('getCols')
    svg = './static/img/calculating.svg'
    #print("rows: {}".format(rows))
    #print("cols: {}".format(cols))
    t = len(re.findall("[^0-9]",rows))+len(re.findall("[^0-9]",cols))
    if t > 0:
        flash(('Please enter only numbers',"block"))
        return render_template('index.html', rows=rows, cols=cols,svg=svg)
    else:
        return render_template('index.html', rows=rows, cols=cols,svg=svg)
