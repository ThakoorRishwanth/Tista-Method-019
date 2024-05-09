import { Navbar } from "../Header/Navbar"
import '../../styles/Body/body.css'


export const Body = () => {
    return (
        <>
      <Navbar/>
    <div>
          <div className='head2'>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active c1">
        <div className="text"><h1>TEST RIDE THE 2024</h1>
        <h1>MOTORCYCLE LINEUP</h1>
        <p>Including the all-new Road Glide<sup>TM</sup>and Street Glide<sup>TM</sup>.</p>
        <button>BOOK A TEST RIDE TODAY <i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/short-hero/test-ride-hp-shd.jpg?impolicy=myresize&rw=1280" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c2">
    <div className="text2">
      <h5>MEET OUR 2024</h5>
      <h1>CRUISER MOTORCYCLES</h1>
        <button>SEE THE BIKES <i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/short-hero/cruiser-category-hp-shd.jpg?impolicy=myresize&rw=1600" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c3">
    <div className="text3">
      <h5>A NEW ERA OF</h5>
      <h1>GRAND AMERICAN</h1>
      <h1>TOURING</h1>
        <button>SEE THE BIKES <i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/short-hero/gat-category-hp-shd.jpg?impolicy=myresize&rw=1600" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c4">
    <div className="text4">
      <h5>JULY 25-28,2024 | MILWAUKEE, WI | USA</h5>
      <h1>2024 HARLEY-DAVIDSON</h1>
      <h1>HOMECOMING<sup>TM</sup></h1>
      <h1>FESTIVAL</h1>
        <button>BUY TICKETS <i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/short-hero/hoco-hp-shd.jpg?impolicy=myresize&rw=1600" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden ca1">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden ca2">Next</span>
  </button>
</div>
    </div>
    </div>
        </>
  )
}
