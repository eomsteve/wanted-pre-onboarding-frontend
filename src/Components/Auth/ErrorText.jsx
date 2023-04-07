export const ErrorText = ( { type } ) =>{
  const texts = {
    email : "이메일 입력을 확인해 주세요",
    password : "비밀번호 입력을 확인해 주세요"
  }
  return <p className="text-red-400 text-sm">
    {texts[type]}
  </p>
}

