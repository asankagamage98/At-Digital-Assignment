import "../assets/styles/home.css"
import Img from "../assets/images/main.png"
import BlueCard from "../components/cards/BlueCard"
import HomeSections from "../components/HomeSections"

export default function Home() {
  return (
    <>
      <main class="w-100 position-relative">
      <img src={Img} alt="background image" class="w-100 hero-img" />
      <div class="text-overlay d-none d-lg-block px-5 py-3">
        <div class="w-100 h-100">
          <div class="row h-50">
            <div class="col-6"></div>
            <div class="col-6"></div>
          </div>
          <div class="row h-50">
            {/* Blue color card (LG, XL)  */}
            <div class="col-6 mt-5">
              <BlueCard/>   
            </div>
            <div class="col-6"></div>
          </div>
        </div>
       </div>
    </main>

    {/* Blue color card (SM, MD) */}
    <main class="d-block d-lg-none">
      <BlueCard />
    </main>

     {/* Sections  */}

      <HomeSections/>
      {/* <Footer/> */}


    </>
  )
}
