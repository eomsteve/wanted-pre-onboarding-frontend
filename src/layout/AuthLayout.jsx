import { useCallback, useEffect } from "react";
import { useRouter } from "../hooks/useRouter";

export const AuthLayout = ({ children }) => {
  const { routeTo } = useRouter();
  const isSignedIn = useCallback(async()=>{
    const token = localStorage.getItem('token');
    if(token){
      routeTo('/todo');
      return;
    }
    if(!token){
      routeTo('/signin');
      return;
    }
  },[])
  useEffect(()=>{
    isSignedIn();
  },[children])
  return <>{children}</>;
};
