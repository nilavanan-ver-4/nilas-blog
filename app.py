from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-post', methods=['POST'])
def submit_post():
    title = request.form.get('title')
    content = request.form.get('content')

    # Save the post to a database or file
    # Here, we're just printing the title and content
    print(f'Title: {title}')
    print(f'Content: {content}')

    return 'Post submitted successfully'

if __name__ == '__main__':
    app.run(debug=True)
