const Blog = require("../models/blog")
const BlogDetailView = require('../models/blogDetailView')

const getBlogs = async (req, res) => {
    const blog = await Blog.findAll();
    res.status(200).json({ error: false, blogs: blog })
}
const getDetailBlogs = async (req, res) => {
    const blog = await BlogDetailView.findAll();
    res.status(200).json({ error: false, blogs: blog })
}
const newBlog = async (req, res) => {
    try {
        const blog = req.body
        if (blog) {
            blog.timePosted = Date.now()
            const newBlog = await Blog.create(blog)
            res.status(200).json({ error: false, message: newBlog })
        } else {
            res.status(400).json({ error: true, message: 'Input have issues' })
        }
    }
    catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id)

        if (blog) {
            res.status(200).json({ error: false, blog: blog })
        } else {
            res.status(404).json({ error: false, message: "blog not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: error })
    }
}
const getBlogDetail = async (req, res) => {
    try {
        const blog = await BlogDetailView.findByPk(req.params.id)

        if (blog) {
            res.status(200).json({ error: false, blog: blog })
        } else {
            res.status(404).json({ error: false, message: "blog not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: error })
    }
}
const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        const row = await Blog.destroy({ where: { id } })
        if (row > 0) {
            res.status(200).json({ error: false, message: `${row} blog on id ${id} is deleted` })
        } else {
            res.status(400).json({ error: false, message: `blog on id ${id} does not exist` })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: "we got some error" + error })
    }
}
const updateBlog = async (req, res) => {
    try {
        const id = req.params.id
        const blog = await Blog.findByPk(id)
        if (blog) {
            const updated = req.body
            blog.update(updated)
            const updatedBlog = await Blog.findByPk(id)
            res.status(200).json({ error: true, message: updatedBlog })
        } else {
            res.status(200).json({ error: false, message: "blog not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: "We have an error" + error })
    }
}
module.exports = {
    getBlog,
    getDetailBlogs,
    getBlogDetail,
    newBlog,
    getBlogs,
    deleteBlog,
    updateBlog
}