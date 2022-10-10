const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
const PORT = process.env.PORT || 3000;
const UserController = require('./controllers/UserController');
const PostsController = require('./controllers/PostsController');

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/login/:creds", UserController.submitUser);
app.get("/api/users/all/", UserController.getAll);
app.post("/api/users/role/:userInfo", UserController.changeUserRole);
app.get("/api/posts/all", PostsController.getAll);
app.post("/api/posts/add/:postInfo", PostsController.addNewPost);
app.post("/api/posts/change/:postInfo", PostsController.changePost);

app.listen(PORT);
