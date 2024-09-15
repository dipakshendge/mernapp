let {z} = require('zod')

const loginSchema = z.object({
    email: z
    .string({required_error:"email is Require"})
    .trim()
    .email({message: "Invalid Email Address"})
    .min(3,{message: "email must be at least 3 character"})
    .max(255,{message: "email must not be more than 255 character"}),
    password: z
    .string({required_error:"Password is Require"})
    .min(8,{message: "password must be at least 8 character"})
    .max(255,{message: "password must not be more than 255 character"})
})
//creating object Schema
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"UserName is Require"})
    .trim()
    .min(3,{message: "Username must be at least 3 character"})
    .max(255,{message: "Username must not be more than 255 character"}),
    email: z
    .string({required_error:"email is Require"})
    .trim()
    .email({message: "Invalid Email Address"})
    .min(3,{message: "email must be at least 3 character"})
    .max(255,{message: "email must not be more than 255 character"}),
    phone: z
    .string({required_error:"Phone is Require"})
    .trim()
    .min(10,{message: "Phone must be at least 10 character"})
    .max(20,{message: "Phone must not be more than 20 character"}),
    password: z
    .string({required_error:"Password is Require"})
    .min(8,{message: "password must be at least 8 character"})
    .max(255,{message: "password must not be more than 255 character"})
});



module.exports = {signupSchema, loginSchema};