import Navbar from "../Pages/Navbar";

const HouseKeeping = () => {
    return(
        <>
        <nav className="bg-black navbar-dark py-3">
        <div className="col-sm fs-5  pt-2  navbar-brand fs-2 ps-5"> 
          <div className=" justify-content-center">
            <img src="https://i.postimg.cc/wBf3kxrr/Final-Logo-2.png" width="200" height="120" alt="Logo"></img>
        </div>
      </div>
      <div className="row"/>
        <div className="btn toolbar align-items-center"> <Navbar /></div>
        </nav>

        <div className="container fs-2 p-3 fw-bold border border-black text-center">
        This is the Housekeeping page!</div>
       

        <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/bwCMppnn/Housekeeping.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Housekeeping</h5>
            <p className="card-text">Providing solutions for residential and commercial cleaning needs. Give us a try and we'll get the job done right the first time.
            <a href="/house" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
        </>
     
    )
  }
  
  export default HouseKeeping




 