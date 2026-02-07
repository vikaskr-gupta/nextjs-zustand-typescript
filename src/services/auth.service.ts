// src/services/auth.service.ts
import axios from "axios";
import { API_BASE_URL } from "@/src/config/env";

const api = axios.create({
    baseURL: API_BASE_URL,
});

// ---- SIGN IN ----
export const logInAPI = async (payload: {
    email: string;
    password: string;
}) => {
    const res = await api.post("/auth/login", payload);
    return res.data;
};

// ---- SIGN UP ----
export const signUpAPI = async (payload: {
    email: string;
    password: string;
    username: string;
}) => {
    const res = await api.post("/auth/signup", payload);
    return res.data;
};
