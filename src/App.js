
import React,{Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import  {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider, useDispatch} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";

const Grocery = lazy(()=>import("./components/Grocery"));

const Applayout = () =>{

    const [userName , setUserName] =  useState();
    //
    useEffect(()=>{
        const data =  {
            name: "Login"
        }
        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedUser:"sonu"}}>
            <div className="app">
                <UserContext.Provider value={{loggedUser:userName, setUserName}}>
                <Header/>
                <Outlet/> 
                </UserContext.Provider>
            </div>
            </UserContext.Provider>
        </Provider>

       
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Applayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact-us",
                element: <Contact/>,
            },
            {
                path: "/Grocery",
                element: (
                <Suspense fallback = {<h1>Loading content..</h1>}><Grocery/></Suspense>),
            },
            {
                path: "/restaurants/:resId", // here :resId is dynamic
                element: <RestaurantMenu/>,   
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/login",
                element: <Login/>
            }

        ],
        errorElement: <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);