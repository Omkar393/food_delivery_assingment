import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
import { dbConnection } from './db/index.js'
import PricingRoutes from './routes/index.js'

dotenv.config()
dbConnection()

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

app.use('/pricing', PricingRoutes)