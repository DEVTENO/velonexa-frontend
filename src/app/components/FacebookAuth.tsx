import { Facebook } from "lucide-react";
import React from "react";

type FacebookAuthProps = {
    children: React.ReactNode
}

const FacebookAuth: React.FC<FacebookAuthProps> = ({children}) => {
return (
    <div className="container">
       {children}                                                                                                                                          
    </div>
)
}

export default FacebookAuth
