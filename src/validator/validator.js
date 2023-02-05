import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Zа-яА-Я-іІїЇ]{3,20}$/).required().messages({
        'string.pattern.base' : 'Тільки букви від 1 до 20 символів!'
    }),
});