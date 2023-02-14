import Joi from "joi";


const loginValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/).required()
});

export {
    loginValidator
}