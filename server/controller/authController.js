import user from "../model/userModel.js"
import jwt from 'jsonwebtoken'


const maxAge = 3 * 24 * 60 * 60 * 1000
const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge })
}
export const signUp = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password, phone, username } = req.body

        if (!email || !password) {
            return res.status(400).send('email and password required')
        }
        const existingUser = await user.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or phone number already exists.' });
        }
        const userDetails = await user.create({ email, password, phone, username })
        res.cookie('jwt', createToken(email, userDetails.id), {
            maxAge,
            sameSite: 'None',
            secure: true
        })
        return res.status(201).json({
            user: {
                id: userDetails.id,
                email: userDetails.email,
                phone: userDetails.phone,
                username: userDetails.username
            }
        })
    } catch (error) {
        console.log(error);
    }
}



export const verifyjwt = async (req, res) => {
    try {
        console.log(req.cookies.jwt);
        if (req.cookies.jwt) {
            console.log('retrurned')
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (error) {
        console.log(error);
    }
}
