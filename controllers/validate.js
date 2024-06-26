const Joi = require('@hapi/joi')

const registerValidate = (data) => {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(10).max(50),
        password: Joi.string().required().min(6).max(20),
    })

    return schema.validate(data)
}

const loginValidate = (data) => {

    const schema = Joi.object({
        email: Joi.string().required().min(10).max(50),
        password: Joi.string().required().min(6).max(20),
    })

    return schema.validate(data)
}

module.exports.registerValidate = registerValidate
module.exports.loginValidate = loginValidate