import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
 <Link to="/">
   <div className="navbar   bg-slate-900 flex justify-center p-3">
      <div className="navbar-start">
        <a className="navbar-item text-purple-300 text-4xl">MedIt</a>
      </div>
      </div>
 </Link>  
      
  );
};

export default Navbar;
