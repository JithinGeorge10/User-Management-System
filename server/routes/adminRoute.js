import { Router } from 'express'
import { adduser, adminlogin, deleteuser, userdetails } from '../controller/adminController.js'



const adminRoutes = Router()

adminRoutes.post('/adduser', adduser)
adminRoutes.post('/adminlogin',adminlogin)
adminRoutes.get('/userdetails',userdetails)
adminRoutes.post('/deleteuser',deleteuser)

export default adminRoutes