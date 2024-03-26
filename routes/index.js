import express from 'express'
import { calculateTotalPrice } from '../services/index.js'

const routes = express.Router()

routes.post('/calculate-price', calculateTotalPrice)

export default routes