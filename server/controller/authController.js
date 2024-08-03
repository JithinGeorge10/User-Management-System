import user from "../model/userModel.js"
export const signUp = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password,phone,username } = req.body

        if (!email || !password) {
            return res.status(400).send('email and password required')
        }
        const userDetails = await user.create({ email, password,phone,username })
       
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