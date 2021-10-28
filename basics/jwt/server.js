const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()

const posts = [
  {
    username: 'Alex',
    title: 'Post 1'
  },
  {
    username: 'John',
    title: 'Post 2'
  },
]

app.use(express.json())

app.get('/posts', authenticateToken, (req, res) => {
  // due to middleware - we have here access to req.user
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // removing 'Bearer '

  if(!token) return res.sendStatus(401) // no token provided

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403) // token exists but it is not valid
    req.user = user 
    next()
  })
}

app.listen(3000)