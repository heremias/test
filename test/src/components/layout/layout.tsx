import React from "react"
import "../../styles/main.css"
import Header from "./header"

const Layout = ({ children } :any) => {

  return (
    <>
      <div className="bar topbar"></div>
      <main className="pageStyles">
        <title>Home Page</title>
        
        {children}
      </main>
    </>
  )
}

export { Layout };
