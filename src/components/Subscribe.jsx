import { Link } from "react-router-dom"

const Subscribe = () =>{
    return(
        <>
        <section id="subscribe" className="px-8 md:px-14 lg:px-20 mb-8 md:mb-20">
            <div className="p-6 sm:p-14 lg:p-20 bg-[#f8edd1] text-center rounded-3xl">
                <h2 className="text-4xl font-[recoleta] font-bold pb-5">Join Membership And Connect To  Every Member</h2>
                <p className="text-1xl font-[Poppins] pb-5">Subscribe To Our Newsletter To Be The First To Receive Any Information About Us</p>
                <div className="relative w-[100%] sm:w-[80%] md:w-[60%] m-auto">
                    <input type="text" placeholder="Enter your Email" className="outline-none py-4 px-4 sm:py-5 sm:px-5 rounded-full  md:text-2xl text-[Poppins] w-[100%]" />
                    <Link to={'/'} title="Subscribe" className="bg-[#fe831d] w-max p-2 sm:p-4 rounded-full text-white font-[poppins] absolute right-2 top-0
                    m-auto bottom-0 h-max">
                        <span>Subscribe</span>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}
 
export default Subscribe