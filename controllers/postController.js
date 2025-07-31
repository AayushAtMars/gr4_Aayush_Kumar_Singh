import Post from '../models/post.js';
import User from '../models/user.js';

export const createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if (!content || content.trim().length < 20) {
            return res.status(400).json({ error: 'content must be at least 20 characters.' });
        }

        const post = await Post.create({ title, content, author });
        res.status(201).json(post);
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllPosts = async (req, res) => {
    const posts = await Post.find().populate('author', 'name email');
    res.json(posts);
};

export const getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author', 'name email');
    if (!post) return res.status(404).json({ error: 'post not found' });
    res.json(post);
};



export const updatePost = async (req, res) => {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'post not found' });
    res.json(updated);
};


export const deletePost = async (req, res) => {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'post not found' });
    res.json({ message: 'Post deleted' });
};