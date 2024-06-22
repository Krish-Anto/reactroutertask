import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function TopNav() {
const GuviLogo = '/src/assets/Guvi-blog-logo.png';
const navimg1 = '/src/assets/blog-header.png';

  return (
<>
<nav className="navbar bg-body-tertiary topnav">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={GuviLogo} alt="GuviLogo" width="120" height="50"/>
    </a>
  </div>
</nav>
<div className='container'>
   <div className="navimg d-flex justify-content-center">
     <img src={navimg1} alt="GuviLogo" width="90%" height="30%"/>
   </div>

</div>
</>  )
}

export default TopNav;