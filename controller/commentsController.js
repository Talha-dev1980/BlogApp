const Comment = require("../models/comments")
const CommentsView = require('../models/commentsView')

const getComments = async (req, res) => {
    const comments = await Comment.findAll();
    res.status(200).json({ error: false, comments: comments })
}
const getDetailComments = async (req, res) => {
    const comments = await CommentsView.findAll();
    res.status(200).json({ error: false, comments: comments })
}
const newComment = async (req, res) => {
    try {
        const comment = req.body
        if (comment) {
            comment.timePosted = Date.now()
            const newComment = await Comment.create(comment)
            res.status(200).json({ error: false, message: newComment })
        } else {
            res.status(400).json({ error: true, message: 'Input have issues' })
        }
    }
    catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
const getComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id)

        if (comment) {
            res.status(200).json({ error: false, comment: comment })
        } else {
            res.status(404).json({ error: false, message: "comment not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: error })
    }
}
const getCommentDetail = async (req, res) => {
    try {
        const comment = await CommentsView.findByPk(req.params.id)

        if (comment) {
            res.status(200).json({ error: false, comment: comment })
        } else {
            res.status(404).json({ error: false, message: "comment not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: error })
    }
}
const deleteComment = async (req, res) => {
    try {
        const id = req.params.id
        const row = await Comment.destroy({ where: { id } })
        if (row > 0) {
            res.status(200).json({ error: false, message: `${row} comment on id ${id} is deleted` })
        } else {
            res.status(400).json({ error: false, message: `comment on id ${id} does not exist` })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: "we got some error" + error })
    }
}
const updateComment = async (req, res) => {
    try {
        const id = req.params.id
        const comment = await Comment.findByPk(id)
        if (comment) {
            const updated = req.body
            comment.update(updated)
            const updatedComment = await Comment.findByPk(id)
            res.status(200).json({ error: true, message: updatedComment })
        } else {
            res.status(200).json({ error: false, message: "comment not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: "We have an error" + error })
    }
}
module.exports = {
    getComment,
    getDetailComments,
    getCommentDetail,
    newComment,
    getComments,
    deleteComment,
    updateComment
}