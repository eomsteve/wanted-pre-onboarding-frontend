
export const AuthButton = ({ authType }) => {
  const label = authType === "signin" ? "Sign in" : "Sign Up";
  return <button type="submit" data-testid={`${authType}-button`}>{label}</button>;
};

