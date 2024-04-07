import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import React from 'react'
import ProjectSection from "./components/ProjectSection";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            
            {
                index: true,
                element: <Home/>
            },

            {
                path: '/about me',
                element: <About/>
            }

            
        ]
    }
])

