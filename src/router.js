import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";

const RoutePage = [
  {
    id : 1,
    path : "/signin",
    label : "로그인",
    element : <SignInPage/>,
    withAuth : false
  },{
    id : 2,
    path : "/signup",
    label : "회원가입",
    element : <SignUpPage/>,
    withAuth : false
  }
]

export const routers = createBrowserRouter(
  RoutePage.map(router =>{
    return {
      path : router.path,
      element: router.element,
    }
  })
)