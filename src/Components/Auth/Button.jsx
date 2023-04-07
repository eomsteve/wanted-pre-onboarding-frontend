
export const AuthButton = ({ authType }) => {
  const label = authType === "signin" ? "Sign in" : "Sign Up";
  return <button className="border-2 rounded-md" type="submit" data-testid={`${authType}-button`}>{label}</button>;
};

