export const emailValidator= (userInputEmail)=>{
  return !!userInputEmail.match(/[\w]+\@[\w]+\.\w/g);
}

export const passwordValidator = (userInputPassword)=>{
  return !!userInputPassword.match(/.{8,}/g);
}