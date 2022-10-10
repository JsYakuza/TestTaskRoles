const PostsService = require('../services/PostService');

class PostsController {
    async getAll(req, res) {
        const posts = await PostsService.getAllPosts();
        res.json({ ...posts });
    }

    async addNewPost(req, res) {
        await PostsService.createNewPost(JSON.parse(req.params.postInfo));
        res.send();
    }

    async changePost(req, res) {
        await PostsService.changePost(JSON.parse(req.params.postInfo));
        res.send();
    }

}

module.exports = new PostsController();