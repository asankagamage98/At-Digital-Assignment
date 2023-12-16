
import Logo from "../assets/images/Logo.svg"
import '../assets/styles/footer.css'

export default function Footer() {
  return (
    <>
       {/* Footer  */}
      <footer className="row ">
        <div class="row pt-4 ps-5">
          <div class="col-lg-6 footer2 ">
              <img src={Logo} alt="" className="" />
              <p className="pt-3 ">
                 Your goal is our target. Not anything in between. 
                 We use <br/> online marketing platforms and tools 
                 to achieve single <br/> objective - your business results.
              </p>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-12  ">
             <h3>Our Technologies</h3>
             <p>React JS</p>
             <p>Gatsby</p>
             <p>NextJS</p>
             <p>NodeJS</p>
             <p>GraphQL</p>
             <p>Laravel</p>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-12 ">
             <h3>Our Services</h3>
             <p>Social media Marketing</p>
             <p>Web & Mobile App Development</p>
             <p>Data & Analytics</p>
             <p>Google Marketing solutions</p>
             <p>Search Engine Optimization</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center p-0 m-0">
          <div className="col-12 col-md-11 col-lg-10 rs-line py-2">
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  )
}
