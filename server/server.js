import express from 'express'
import './config.js'
import attachUser from './middleware/auth.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import bookRoutes from './routes/books.js'
import bookCollectionRoutes from './routes/book-collections.js'
import discussionsRoutes from './routes/discussions.js'
import genresRoutes from './routes/genres.js'
import signupformRoutes from './routes/signupform.js'

const app = express()
const PORT = 3001
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(attachUser)

app.use('/api', userRoutes)
app.use('/api', bookRoutes)
app.use('/api', bookCollectionRoutes)
app.use('/api', discussionsRoutes)
app.use('/api', authRoutes)
app.use('/api', genresRoutes)
app.use('/api', signupformRoutes)

// example of grabbing logged in user
app.get('/api/test-user', (req, res) => {
  console.log(req.user)
  res.json(req.user)
})

// body, params, query
// app.get('/users', (request, response) => {
//   response.json([{ id: 1, name: 'john' }])
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
