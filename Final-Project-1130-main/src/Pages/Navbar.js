import './Navbar.css';



const Navbar = () => {
    return ( 
        <nav className="nav">
           
            <div className="links btn btn-group" role="group">
                <a href="/"><button className="btn btn-warning">Home</button></a>
                <a href="/create"><button className="btn btn-warning">CreateAccount</button></a>
                <a href="/customerlogin"><button className="btn btn-warning">CustomerLogin</button></a>
                <a href="/employeelogin"><button className="btn btn-warning">EmployeeLogin</button></a>
                <a href="/ourservices" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn dropdown-toggle btn-warning dropdown">OurServices</button></a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Interior Design</a></li>
                    <li><a class="dropdown-item" href="#">Flooring</a></li>
                    <li><a class="dropdown-item" href="#">Plumbing</a></li>
                    <li><a class="dropdown-item" href="#">Housekeeping</a></li>
                    <li><a class="dropdown-item" href="#">Landscaping</a></li>
                    <li><a class="dropdown-item" href="#">Mounting</a></li>
                    <li><a class="dropdown-item" href="#">Pool Maintenance</a></li>
                    <li><a class="dropdown-item" href="#">Home Security</a></li>
               </ul> 
            </div>   
        </nav>
   
    
    );
}
 
export default Navbar;

