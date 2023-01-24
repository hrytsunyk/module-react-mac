import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-Я-іІїЇ]{1,20}$/).required().messages({
       'string.pattern.base' : 'Тільки букви від 1 до 20 символів!'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min' : 'Тільки цифри від 1 до 1000000!',
        'number.max' : 'Тільки цифри від 1 до 1000000!',
        'string.max' : 'Тільки цифри від 1 до 1000000!',
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min' : 'Тільки рік від 1990 до сьогодні!',
        'number.max' : 'Тільки рік від 1990 до сьогодні!'
    })
});

export {
    carValidator
};