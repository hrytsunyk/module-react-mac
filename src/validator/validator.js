import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Zа-яА-Я-іІїЇ]{3,20}$/).required()
});

export {
    userValidator
}