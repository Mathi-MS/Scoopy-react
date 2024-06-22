import {Link, useLocation} from 'react-router-dom'
const Footer = () =>{
    return(
        <>
            <section id="footer" className="px-8 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20  bg-[#f8edd1]">
                    <div className="flex justify-between items-center flex-wrap gap-10 lg:gap-10">
                    <Link to={'/'} title="logo">
                        <h2 className="text-5xl font-[recoleta] font-semibold text-[#fe831d]">Scoopy</h2>
                    </Link>
                    <div>
                        <ul className="flex sm:gap-5 flex-wrap gap-3">
                            <li>
                                <Link className="font-[recoleta] font-semibold text-[#725D68] hover:text-[#fe831d]" to={'/'} title="Home">Home</Link>
                            </li>
                            <li>
                                <Link className="font-[recoleta] font-semibold text-[#725D68] hover:text-[#fe831d]" to={'/about'} title="About">About</Link>
                            </li>
                            <li>
                                <Link className="font-[recoleta] font-semibold text-[#725D68] hover:text-[#fe831d]" to={'/products'} title="products">products</Link>
                            </li>
                            <li>
                                <Link className="font-[recoleta] font-semibold text-[#725D68] hover:text-[#fe831d]" to={'/blog'} title="Blog">Blog</Link>
                            </li>
                            <li>
                                <Link className="font-[recoleta] font-semibold text-[#725D68] hover:text-[#fe831d]" to={'/contact'} title="Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-[recoleta] font-bold text-[#fe831d]">Follow Us On</h2>
                        <ul className="flex gap-5 mt-3">
                            <li>
                                <Link to={'https://in.pinterest.com/'} title="pintrest" className="w-[30px] h-[30px] rounded-full items-center justify-center flex bg-[#fe831d]" target="_blank">
                                    <i className="fa-brands fa-pinterest-p text-[#f8edd1]"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'https://www.instagram.com/'} title="instagram" className="w-[30px] h-[30px] rounded-full items-center justify-center flex bg-[#fe831d]" target="_blank">
                                    <i className="fa-brands fa-instagram text-[#f8edd1]"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'https://twitter.com/'} title="twitter" className="w-[30px] h-[30px] rounded-full items-center justify-center flex bg-[#fe831d]" target="_blank">
                                    <i className="fa-brands fa-x-twitter text-[#f8edd1]"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'https://www.facebook.com/'} title="facebook" className="w-[30px] h-[30px] rounded-full items-center justify-center flex bg-[#fe831d]" target="_blank">
                                    <i className="fa-brands fa-facebook-f text-[#f8edd1]"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className=" font-[Poppins] pt-5 text-[#725D68]">2024 Scoopy,Inc. | Privacy Policy | Terms Of Use</p>
            </section>           
        </>
    )
}

export default Footer