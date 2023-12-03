import Navbar from "../Pages/Navbar";

const InteriorDesign = () => {
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
      <h1>This is the InteriorDesign page!</h1>

      
      <div className="col-sm col mb-4">
        <div className="card  h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/T1gQbXht/Interior-Design.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Interior Design</h5>
            <p className="card-text"> Luxury, innovative solutions, curated in unique styles to fit your needs. We provide
              support with all phases of the design process.
           
            <a href="/interior" className="btn btn-primary mt-3">Learn More</a> </p>
          </div>
        </div>
      </div>
      </>
      
        
       
    )
  }
  
  export default InteriorDesign




 

    
        