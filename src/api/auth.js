import { client } from "./client";
import { useRouter } from "../hooks/useRouter";
export const signin = async (userData) =>{
  return await client.post("/auth/signin", userData);
}

export const signup = async (userData) =>{
  return await client.post("/auth/signup", userData);
}