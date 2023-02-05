import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().required(),
    password: Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
        .required()
        .messages('string.pattern.base': 'Password must contain min 1')
});

export {
    userValidator
}