import express from 'express'
import cors from "cors";
import 'dotenv/config'
import mongoose, { Schema } from 'mongoose';
const app = express()
app.use(cors())
app.use(express.json())

const blogSchema = new Schema({
  img: String,
  title: String,
  category: String,
  description: String,
},{ timestamps: true });
const BlogModel = mongoose.model('blogs', blogSchema);

app.get('/blogs', async (req, res) => {
  const blogs = await BlogModel.find({})
  res.send(blogs)
})

app.get('/blogs/:id', async (req, res) => {
  const { id } = req.params
  const blog = await BlogModel.findById(id)
  res.send(blog)
})

app.post('/blogs', async (req, res) => {
  const { img, title, category, description } = req.body
  const newBlog = new BlogModel({ img, title, category, description })
  await newBlog.save()
  res.send('Got a POST request')
})

app.put('/blogs/:id', async (req, res) => {
  const { id } = req.params
  const { img, title, category, description } = req.body
  const blog = await BlogModel.findByIdAndUpdate(id, { img, title, category, description })
  res.send('Got a PUT request at /blog')
})

app.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params
  const blog = await BlogModel.findByIdAndDelete(id)
  res.send('Got a DELETE request at /user')
})

mongoose.connect(process.env.KEY)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})