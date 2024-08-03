import {Router} from 'express'
import { signUp } from '../controller/authController.js'

const authRoutes=Router()
authRoutes.post('/signup',signUp)

export default authRoutes