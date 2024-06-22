
# Blog Application

This is a simple blog application built using Node.js, Express, MongoDB, and HTML/CSS for the front end. It allows users to create posts, view all posts, and manage user authentication with signup and login functionality.

## Project Structure

```
project_root/
├── node_modules/
├── public/
│   ├── signup.html
│   ├── login.html
│   ├── posts.html
│   └── other_assets...
├── server.js
└── package.json
```

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

### Installation

1. Clone the repository to your local machine:

```sh
git clone https://github.com/yourusername/blog-application.git
cd blog-application
```

2. Install the required npm packages:

```sh
npm install
```

3. Make sure MongoDB is running on your machine. You can start MongoDB with the following command (the method may vary depending on your OS and MongoDB setup):

```sh
mongod
```

4. Start the server:

```sh
node server.js
```

The server will start on `http://localhost:8000`.

### Usage

1. Open your browser and navigate to `http://localhost:8000/signup` to create a new user account.
2. Navigate to `http://localhost:8000/login` to log in with your credentials.
3. After logging in, you can create a new post at `http://localhost:8000/submit-post` and view all posts at `http://localhost:8000/all-posts`.

## API Endpoints

### POST `/submit-post`

Create a new blog post.

#### Request Body

```json
{
  "title": "Post Title",
  "content": "Post content goes here."
}
```

#### Response

```json
{
  "message": "Post submitted successfully",
  "post": {
    "_id": "post_id",
    "title": "Post Title",
    "content": "Post content goes here.",
    "__v": 0
  }
}
```

### GET `/posts`

Retrieve all blog posts.

#### Response

```json
[
  {
    "_id": "post_id",
    "title": "Post Title",
    "content": "Post content goes here.",
    "__v": 0
  },
  
]
```

### POST `/signup`

Register a new user.

#### Request Body

```json
{
  "username": "yourusername",
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

#### Response

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "username": "yourusername",
    "email": "youremail@example.com",
    "password": "hashed_password",
    "__v": 0
  }
}
```

### POST `/login`

Log in a user and return a JWT token.

#### Request Body

```json
{
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

#### Response

```json
{
  "message": "Login successful",
  "token": "jwt_token"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Token](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

---


