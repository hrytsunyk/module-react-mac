import Joi from "joi";


Joi.object({
username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required(),
    password: Joi.string().regex()
})