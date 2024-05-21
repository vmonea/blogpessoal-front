import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import { AuthProvider } from "./contexts/AuthContext"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"


function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App