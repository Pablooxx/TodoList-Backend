const { httpError } = require('../helpers/handleError')
const { encrypt } = require('../helpers/handleBcrypt')

const userModel = require('../models/users')


const registerCtrl = async (req, res) => {
    try {
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) 
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.status(201);
        res.send({ data: registerUser });

    } catch (e) {
        httpError(res, e)
    }
}


module.exports = { registerCtrl }