"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link"
import { useState } from "react"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function grtMenuClasses(){
        let menuClasses = [];

        if(isOpen){
            menuClasses=[
                "flex",
                "flex-col",
                "absolute",
                "top-[60px]",
                "bg-gray-800",
                "w-full",
                "p-4",
                "left-0",
                "gap-20",
            ]
        }else{
            menuClasses = ["hidden", "md:flex"];
        }
        return menuClasses.join(" ");
    }


  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex 
        justify-between items-center">
            <a href="" className="text-2xl font-bold">
                MyNav
            </a>
            <div className={grtMenuClasses()}>
                <Link href="/" className="mx-2 hover:text-gray-300">
                Home
                </Link>
                <Link href="/about" className="mx-2 hover:text-gray-300">
                About
                </Link>
                <Link href="/contact" className="mx-2 hover:text-gray-300">
                Contact
                </Link>
            </div>
            <div className="md:hidden flex items-center">
                <button 
                onClick={()=>{
                    setIsOpen(!isOpen)
                }}
                >
                    {isOpen? <FontAwesomeIcon icon={faXmark} /> : 
                     
                     <FontAwesomeIcon icon={faBars} />
                    }
               
               

                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar