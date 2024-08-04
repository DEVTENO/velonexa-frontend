import React from "react";

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
return (
    <div className="border border-red-600 min-h-screen ">
    <div>{children}</div>
    </div>
)
}

export default Layout
