# using flask, render a simple html page
# save the file as app.py   
# run the file using python app.py

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/yashu')

def index():
    return render_template('hello.html')

if __name__ == "__main__":
    app.run(debug=True) # set to false in production

# Path: templates/index.html
# create a folder called templates
# create a file called index.html
# add the following code to the file


# run the file using python app.py
# open a browser and go to http://localhost:5000
# you should see the text "Hello World!"
