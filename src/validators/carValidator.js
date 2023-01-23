import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-Я-іІїЇ]{1,20}$/).required().message({
       'string.pattern.base' : 'Тільки букви від 1 до 20 символів!'
    }),
    price: Joi.number().min(0).max(1000000).required().message({
        'number.min' : 'Тільки цифри від 1 до 1000000!',
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().message({
        'number.min' : 'Тільки рік від 1990 до сьогодні!'
    })
})