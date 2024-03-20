import Joi from "joi";

const ProjectObject = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required": "Tên ko để trống",
        "string.empty": "Tên ko đúng định dạnh"
    }),
    image: Joi.string().required().empty().messages({
        "any.required": "Ảnh ko để trống",
        "string.empty": "Ảnh ko đúng định dạnh"
    }),
    description: Joi.string().required().empty().messages({
        "any.required": "Mô tả ko để trống",
        "string.empty": "Mổ tả đúng định dạnh"
    }),
    author: Joi.string().required().empty().messages({
        "any.required": "Tác giả ko để trống",
        "string.empty": "Tên tác giả đúng định dạnh"
    }),

})
export const CheckProductValidate = (req, res, next) => {
    const { name, image, description, author } = req.body
    const { error } = ProjectObject.validate({ name, image, description, author });
    if (error) {
        res.send({ status: false, message: error.message })
    } else {
        next()
    }
}