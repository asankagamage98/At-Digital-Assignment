
import "../assets/styles/navbar.css";
import Logo from "../assets/images/Logo.svg"


export default function Navbar() {

    

  return (
    <>
    <nav class="navbar navbar-expand-sm " data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src={Logo} alt="" /></a>
            <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link" href="#">SERVICES</a>
            <a class="nav-link" href="#">ABOUT US</a>
            <a class="nav-link" href="#">CONTACT US</a>
            <a class="nav-link">CAREERS</a>
            </div>
            </div>
        </div>
    </nav>
  </>
  )
}
