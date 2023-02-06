import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().required(),
    password: Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
        .required()
        .messages({
            'string.pattern.base':
                'Min: 1 uppercase letter; ' +
                'Min: 1 lowercase letter; ' +
                'Min: 1 special character; ' +
                'Min: 1 number; ' +
                'Min: 8 characters; ' +
                'Max: 30 characters.'

        })
});

export {
    userValidator
}