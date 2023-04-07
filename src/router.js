import { useId } from "react";
import { createBrowserRouter } from "react-router-dom";
 import { SignInPage } from "./pages/SignIn";

const RoutePage = [
  {
    id : useId(),
    path : "/signin",
    label : "로그인",
    element : <AuthForm authType={"signin"}/>,
    withAuth : false
  },{
    id : useId(),
    path : "/signup",
    label : "회원가입",
    element : <AuthForm authType={"signup"}/>,
    withAuth : false
  }
]

export const routers = createBrowserRouter()