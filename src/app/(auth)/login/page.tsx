import { LoginFormData, RegisterFormData } from "@/lib/types/types";
import { useState } from "react";

const Login: React.FC<LoginFormData> = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  return <div></div>;
};

export default Login;
