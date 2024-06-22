import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <>       
            <section id="navbar" className="sticky top-0 z-[999] shadow-2xl shadow-[#464646]">
                <nav className="flex py-4 px-8 md:px-14 lg:px-20 items-center justify-between bg-[#f8edd1]">
                    <Link className="nav__logo " to={"/"} title="logo">
                        <h1 className="text-4xl font-bold font-[recoleta] text-[#fe831d]">Scoopy</h1>
                    </Link>
                    <div className="nav__links md:flex gap-10 hidden text-[#725D68] font-[Poppins] font-medium">
                        {/* <div class="nav__link active"> */}
                        <div class="nav__link ">
                            <Link to={"/"} title="Home" class="relative">Home</Link>
                        </div>
                        <div className="nav__link">
                            <Link to={"/about"} title="About" className="relative">About</Link>
                        </div>
                        <div className="nav__link">
                            <Link to={"/products"} title="products" className="relative">products</Link>
                        </div>
                        <div className="nav__link">
                            <Link to={"/blog"} title="Blog" className="relative">Blog</Link>
                        </div>
                        <div className="nav__link">
                            <Link to={"/contact"} title="Contact" className="relative">Contact</Link>
                        </div>
                    </div>
                    <div className="nav__navigate md:flex gap-4 hidden text-[#725D68] font-medium font-[Poppins]">
                        <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                        <Link to={'/signin'}><i className="fa-solid fa-user"></i></Link>
                    </div>
                    <div className="md:hidden togglebar">
                        <Link to={'/sidenav'}>
                            <i className="fa-solid fa-bars-staggered"></i>
                        </Link>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar