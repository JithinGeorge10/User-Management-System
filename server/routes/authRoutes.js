import {Router} from 'express'
import {login, signUp, verifyjwt } from '../controller/authController.js'

const authRoutes=Router()
authRoutes.post('/signup',signUp)
authRoutes.get('/verifyjwt',verifyjwt)
authRoutes.post('/login',login)

export default authRoutes