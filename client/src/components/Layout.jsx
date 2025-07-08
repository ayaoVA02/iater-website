import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ResponsiveContainer from "./ResponsiveContainer"

const Layout = () => {
  return (
    <div className="bg-white w-full">


  


      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="  bg-white mt-32">
          <Outlet />
        </main>
        <Footer />
      </div>
  
    </div>

  )
}

export default Layout
