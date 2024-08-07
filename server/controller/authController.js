import user from "../model/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';


const maxAge = 3 * 24 * 60 * 60 * 1000
const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge })
}
const createAdminToken = (email) => {
    console.log("am called...")
    return jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: maxAge })
}
export const signUp = async (req, res) => {
    try {
        const { email, password, phone, name } = req.body
        if (!email || !password) {
            return res.status(400).send('email and password required')
        }
        const existingUser = await user.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or phone number already exists.' });
        }
        const userDetails = await user.create({ email, password, phone, username: name })
        res.cookie('jwt', createToken(email, userDetails.id), {
            maxAge,
            sameSite: 'None',
            secure: true
        })
        return res.status(200).json(userDetails);
    } catch (error) {
        console.log(error);
    }
}



export const verifyjwt = async (req, res) => {
    try {
        if (req.cookies.jwt) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (error) {
        console.log(error);
    }
}
export const verifyadminjwt = async (req, res) => {
    try {
        if (req.cookies.jwtToken) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        console.log('login');
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send('email and password required')
        }
        const userDetails = await user.findOne({ email })
        console.log(userDetails);
        if (!userDetails) {
            return res.status(404).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, userDetails.password);
        if (!isMatch) {
            return res.status(401).send('Invalid password');
        }
        res.cookie('jwt', createToken(email, userDetails.id), {
            maxAge,
            sameSite: 'None',
            secure: true
        })

        return res.status(200).json(userDetails);
    } catch (error) {
        console.log(error);
    }
}



export const uploadUrl = async (req, res) => {
    try {
        const { userid, url } = req.body
        const imageUrl = await user.findByIdAndUpdate(
            userid,
            { url },
            { new: true }
        );
        return res.status(200).json(imageUrl);
    } catch (error) {
        console.log(error);
    }
}

export const adminlogin = async (req, res) => {
    try {
        console.log(req.body)
        console.log('admincontroller');
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send('email and password required')
        }
        if (email != process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD) {
            return res.status(400).send('Enter valid credentials')
        }
        let adminToken=createAdminToken(email)
        console.log(adminToken);
        res.cookie('jwtToken', adminToken, {
            maxAge,
            sameSite: 'None',
            secure: true
        })
        return res.status(200).send('Login successfull');

    } catch (error) {
        console.log(error);
    }
}

export const userdetails = async (req, res) => {
    try {
        const users = await user.find(); 
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
