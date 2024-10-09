import { loginService, logOutService, profileReadService, profileUpdateService, registerService } from './../service/UserServices.js';

//! Register service
export const register = async (req, res) => {
    let result = await registerService(req)
    return res.json(result);
}

//! Login Service 
export const login = async (req, res) => {
    let result = await loginService(req, res)
    return res.json(result);
}

//! profileRead Service
export const profileRead = async (req, res) => {
    let result = await profileReadService(req)
    return res.json(result);
}

//! profileUpdate Service
export const profileUpdate = async (req, res) => {
    let result = await profileUpdateService(req)
    return res.json(result);
}

//! Logout Service
export const logOut = async (req, res) => {
    let result = await logOutService(res)
    return res.json(result);
}


