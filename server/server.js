import express from 'express'
import './config.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import genresbyuserRoutes from './routes/genresbyuser.js'
import profileRoutes from './routes/profile.js'
const app = express()
const PORT = 3001
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', userRoutes)
app.use('/api', authRoutes)
app.use('/api',genresbyuserRoutes)
app.use('/api',profileRoutes)

// body, params, query
// app.get('/users', (request, response) => {
//   response.json([{ id: 1, name: 'john' }])
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
