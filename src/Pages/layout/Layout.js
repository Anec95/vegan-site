import React from "react"
import Header from "Components/header/Header"
import { Outlet } from "react-router"

export default function Layout({handleSearch}) {
    return (
        <>
            <Header handleSearch={handleSearch} />
            <Outlet />
        </>
    )
}