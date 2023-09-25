import React from "react";
import Sidebar from "./Sidebar";


export default function Layout(props){

    return(
        <div className="h-full w-full">
            <Sidebar />
            <main className="fixed left-60 h-full w-[calc(100%-15rem)] overflow-y-scroll">
                {props.children}
            </main>
        </div>
        
    );      
}