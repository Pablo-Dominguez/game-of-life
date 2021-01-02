from flask import render_template, request, Markup
from app import app

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

    return render_template('index.html', rows=rows, cols=cols,svg=svg)
