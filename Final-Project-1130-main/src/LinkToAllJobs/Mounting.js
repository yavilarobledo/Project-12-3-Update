import Navbar from "../Pages/Navbar";

const Mounting  = () => {
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
        
        <h1>This is the Mounting page!</h1>

        <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/L6q2rCwN/TV-mount.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Mounting</h5>
            <p className="card-text">Offering fast and accurate mounting services. We can handle basic and custom mounting to beautify and declutter your space.
            <a href="/Mounting" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Mounting

 


  