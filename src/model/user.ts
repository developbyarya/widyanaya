import { BASE_URL } from "./base";

interface User {
  user_id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
}

const loginURL = BASE_URL + "login"
const registerURL = BASE_URL + "login"

interface Response {
  hasError: boolean;
  errorMsg?: string; 
  token?: string;
}

export async function actionLogin (formData: FormData):Promise<Response>{
  const res = await fetch(loginURL, {
    body: formData,
    headers: {
      "Content-Type": "application/json"
    },
    method: "post"
  })
  if (res.status != 200){
    return {hasError: true, errorMsg: "Login error! Check username or Password"}
  } 

  return {hasError: false, token: (await res.json()).token}
}

export async function actionRegister (formData: FormData):Promise<Response>{
  const res = await fetch(loginURL, {
    body: formData,
    headers: {
      "Content-Type": "application/json"
    },
    method: "post"
  })
  if (res.status != 200){
    return {hasError: true, errorMsg: "Register error!"}
  } 

  return {hasError: false, token: (await res.json()).data.token}
}
