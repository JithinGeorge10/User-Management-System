import {Router} from 'express'
import {adminlogin, deleteuser, login, signUp, uploadUrl, userdetails, verifyadminjwt, verifyjwt } from '../controller/authController.js'

const authRoutes=Router()
authRoutes.post('/signup',signUp)
authRoutes.get('/verifyjwt',verifyjwt)
authRoutes.get('/verifyadminjwt',verifyadminjwt)
authRoutes.post('/login',login)
authRoutes.post('/uploadurl',uploadUrl)
authRoutes.post('/adminlogin',adminlogin)
authRoutes.get('/userdetails',userdetails)
authRoutes.post('/deleteuser',deleteuser)

export default authRoutes