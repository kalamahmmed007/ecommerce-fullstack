// src/schemas/authSchema.js
import * as Yup from "yup";

// Login validation
export const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

// Register validation
export const registerSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

// Forgot Password validation
export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
});

// Reset Password validation
export const resetPasswordSchema = Yup.object({
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});
