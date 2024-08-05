'use client'

import React, { useState } from "react"
import LogoRegister from "../../components/LogoRegister"

type RegisterFormData = {
    username: string
    email: string
    password: string
    confirmPassword: string

}

const Register: React.FC<RegisterFormData> = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const handleSubmit = (e: React.FormEvent) => {

        console.log('berhasil klik', formData)
    }  



    return (
        <div className="container">
            
            <LogoRegister>
               <h1>VeloneXa</h1>
            </LogoRegister>
            <p className="text-gray-500 font-[600]">Sign up to see photos and videos from your friends.</p>
        </div>
    )
}

export default Register