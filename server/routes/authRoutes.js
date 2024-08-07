import {Router} from 'express'
import {adminlogin, login, signUp, uploadUrl, verifyadminjwt, verifyjwt } from '../controller/authController.js'

const authRoutes=Router()
authRoutes.post('/signup',signUp)
authRoutes.get('/verifyjwt',verifyjwt)
authRoutes.get('/verifyadminjwt',verifyadminjwt)
authRoutes.post('/login',login)
authRoutes.post('/uploadurl',uploadUrl)
authRoutes.post('/adminlogin',adminlogin)

export default authRoutes