import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";
import { AuthLayout } from "./layout/AuthLayout";

const RoutePage = [
  {
    id : 1,
    path : "/signin",
    label : "로그인",
    element : <SignInPage/>,
  },{
    id : 2,
    path : "/signup",
    label : "회원가입",
    element : <SignUpPage/>,
  },{
    id:3,
    path:"/todo",
    label: "todo list",
    element : <></>
  }
]

export const routers = createBrowserRouter(
  RoutePage.map(router =>{
    return {
      path : router.path,
      element: <AuthLayout>{router.element}</AuthLayout>
    }
  })
)