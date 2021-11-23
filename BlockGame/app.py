from flask import Flask, request, send_from_directory, send_file
from flask_restful import Resource, Api
from flask import render_template
from pprint import pprint

app = Flask(__name__, static_url_path='/static')

# Render our game route
@app.route("/game")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)

