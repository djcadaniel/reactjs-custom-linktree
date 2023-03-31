import axios from "axios";
import { LoginInterface, RegisterInterface } from "../interfaces/auth.interface";

const BASE_URL = 'http://127.0.0.1:3000'
export const loginUser = async(user: LoginInterface)=>{
  console.log(`${BASE_URL}/api/users/login/`);
  return await axios.post(`${BASE_URL}/api/users/login`, user);
}
export const registerUser = async(user: RegisterInterface)=>{
  // const {passwordConfirm, ...body} = user;
  return await axios.post(`${BASE_URL}/api/users/register`, user);
}