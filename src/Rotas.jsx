import React from "react";
import { Route, Routes } from "react-router-dom"
import PaginaHome from "./pages/PaginaHome/PaginaHome";
import PaginaSobre from "./pages/PaginaSobre/PaginaSobre";
import PaginaComoJogar from "./pages/PaginaComoJogar/PaginaComoJogar";
import PaginaRegras from "./pages/PaginaRegras/PaginaRegras";

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<PaginaHome />} />
            <Route path='/sobre' element={<PaginaSobre />} />
            <Route path='/regras' element={<PaginaRegras />} />
            <Route path='/comojogar' element={<PaginaComoJogar />} />

        </Routes>
    )
}