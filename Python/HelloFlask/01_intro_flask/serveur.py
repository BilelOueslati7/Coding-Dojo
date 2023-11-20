from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
# http://127.0.0.1/
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
@app.route('/hello')
def hello():
    return "hello from server "
@app.route('/hello/user')
def say_hello() :
    return "<h1>Hello James 😁<h1>"
@app.route('/hello/user/<username>')
def say_hello_username(username):
    return f"<h1>Hello{username}<h1>"
@app.route('/hello/user/<username>/<int:times>')
def say_hello_username_n_times(username, times):
    return f"<h1>Hello {username}<h1>"*times
@app.route('/user/<username>/<int:age>')
def user_info(username,age):
    return f"<h1>USERNAME:{username} <br/>AGE: {age}<h1>"
@app.route('/index/<username>/<int:age>')
def index(username,age):
    users=[
    {'name': "jhon",'age':35},
    {'name': "steve",'age':15},
    {'name': "Jackson",'age':35},
    {'name': "Ghafi",'age':32}
    ]
    return render_template("index.html",username =username,age=age,users=users)



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=1500)    # Run the app in debug mode.