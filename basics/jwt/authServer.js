const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()


function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' }) // 10 - 30 mins in real life
}

// Usually stored in DBs or Redis
let refreshTokens = []


app.use(express.json())

app.post('/login', (req, res) => {
  // Authenticate User first - not a goal for now. Here is just JWT.

  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET) // no expiration here
  refreshTokens.push(refreshToken)

  res.json({
    accessToken,
    refreshToken
  })
})

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (!refreshToken) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => { // "user" may be not a perfect name, i prefer "payload"
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name }) // here will be also expiration date (iat), added by jwt, we need only "name"
    res.json({ accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.listen(4000)