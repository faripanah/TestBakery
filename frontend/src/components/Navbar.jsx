import logo from '../assets/Images/bakerylogo.png'


const Navbar = () => {
    return(
        <header className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Bakery Logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#find-store">Find Store</a></li>
                </ul>
            </nav>
              {/* Icons Section */}
              <div className="icons">
                  
                    <i className="fas fa-search" title="Search"></i>
                    <i className="fas fa-shopping-cart" title="Cart"></i>
                    <i className="fas fa-user" title="User"></i>
                </div>



        </header>
    )
}
export default Navbar;