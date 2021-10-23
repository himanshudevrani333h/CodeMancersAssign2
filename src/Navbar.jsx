import  "./pbar.css"
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <Link to = "/home" className="navbar-brand" onClick={()=>{
            <Redirect to="/home"/>
        }}>
          NETPRIME
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" key={0}>
              <Link to = "/home" className="nav-link active" aria-current="page"  onClick={(e)=>{
                   let atag = document.querySelectorAll(".nav-link");
                   for(let i =0; i<atag.length; i++){
                       if(atag[i].classList.contains("active")) atag[i].classList.remove("active");
                   }
                 if(e.currentTarget.classList.contains("active")){
                     e.currentTarget.classList.remove("active")
                 }else{
                     e.currentTarget.classList.add("active");
                 }
              }}>
                Home
              </Link>
            </li>
            <li className="nav-item"key={1} >
              <Link to={"/feature"} className="nav-link "  onClick={(e)=>{
                  
                  let atag = document.querySelectorAll(".nav-link");
                  console.log("atag",atag);
                  for(let i =0; i<atag.length; i++){
                      if(atag[i].classList.contains("active")) atag[i].classList.remove("active");
                  }
                 if(e.currentTarget.classList.contains("active")){
                     e.currentTarget.classList.remove("active")
                 }else{
                     e.currentTarget.classList.add("active");
                 }
              }}>
                Features
              </Link>
            </li>
            <li className="nav-item" key={2}>
              <Link to="pricing" className="nav-link "  onClick={(e)=>{
                  let atag = document.querySelectorAll(".nav-link");
                  for(let i =0; i<atag.length; i++){
                      if(atag[i].classList.contains("active")) atag[i].classList.remove("active");
                  }
                 if(e.currentTarget.classList.contains("active")){
                     e.currentTarget.classList.remove("active")
                 }else{
                     e.currentTarget.classList.add("active");
                 }
              }}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
