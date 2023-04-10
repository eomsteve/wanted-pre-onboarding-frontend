import { createBrowserRouter } from 'react-router-dom';
import { SignInPage } from './pages/SignIn';
import { SignUpPage } from './pages/SignUp';
import { TodoPage } from './pages/Todo';
import { AuthLayout } from './layout/AuthLayout';

const RoutePage = [
  {
    id: 1,
    path: '/signin',
    label: '로그인',
    element: <SignInPage />,
    auth: true,
  },
  {
    id: 2,
    path: '/signup',
    label: '회원가입',
    element: <SignUpPage />,
    auth: true,
  },
  {
    id: 3,
    path: '/todo',
    label: 'todo list',
    element: <TodoPage />,
    auth: true,
  },
  {
    id: 4,
    path: '/*',
    label: 'basic',
    element: <div>404 error ! <br/> something wrong...</div>,
    auth: true,
  },
];

export const routers = createBrowserRouter(
  RoutePage.map((router) => {
    if (router.auth) {
      return {
        path: router.path,
        element: <AuthLayout>{router.element}</AuthLayout>,
      };
    }
    return {
      path: router.path,
      element: router.element,
    };
  })
);
