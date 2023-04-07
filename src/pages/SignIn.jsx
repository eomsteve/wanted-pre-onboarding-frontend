/**
 * formContainer
 * inputEmail
 * inputPassword
 * submitButton signIn
 * /formContainer
 */

export const SignInPage = ()=>{
  return <div className="Container flex justify-center align-middle">
    <AuthForm authType={"signin"}/>
  </div>
}