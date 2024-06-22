import { Link, useNavigate } from "react-router-dom"
const Sidenav = () =>{
    const navigate = useNavigate()
    const goback = () =>{
        navigate(-1)
    }
    return(
        <>
           <section id="mobnav" className="fixed h-[100%] top-0 z-[1000] w-[100%] bg-[#f8edd1]  items-center justify-center flex" >
                <div className="relative">
                    <div className="nav__links flex gap-5 flex-col text-center font-[recoleta] text-2xl">
                        <div className="nav__link ">
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
                    <div className="nav__navigate flex gap-4 justify-center mt-5 text-2xl">
                        <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                        <Link to={'/signin'}><i className="fa-solid fa-user"></i></Link>
                    </div>
                </div>
                <div className="absolute top-[5%] right-[15%] text-2xl cursor-pointer closebar">
                    <i className="fa-solid fa-xmark" onClick={goback}></i>
                </div>
            </section> 
        </>
    )
}

export default Sidenav