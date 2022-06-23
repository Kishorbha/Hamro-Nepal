import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/header/header"
import HeroSection from "./components/hero/hero"
import ProductHome from "./components/product/product-list"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductHome />
    </>
  )
}

export default App
