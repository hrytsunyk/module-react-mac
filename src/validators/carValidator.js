import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
    price: Joi.number().min(1).max(1000000).required()
});

export {
    carValidator
}
