import express from 'express';
import * as postController from '../controllers/post'

const router =express.Router();
router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/new-post', postController.getNewPosts)
router.post('/create-post', postController.createPost)
router.put('/update-post', postController.updatePost)
router.delete('/delete-post', postController.deletePost)

export default router;