import contactimage from '../../../Assests/images/Contact/contact.jpg'
const Contactpage = () =>{
    return(
        <>
            <section id="contactcontact" className="px-8 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20 ">
                <div className="bg-[#f8edd1] flex h-[100%] md:h-[500px] items-center">
                    <div className="w-[100%]">
                        <div className="w-[100%] p-8 md:p-14 lg:w-[90%]  lg:p-20 mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-[recoleta] font-semibold text-[#725D68]">Contact Us</h2>
                            <div className="mt-5">
                                <input type="text" placeholder="Name" className="px-3 py-2 w-[100%]  outline-none font-[Poppins] font-medium mt-5" />
                                <input type="email" placeholder="Email" className="px-3 py-2 w-[100%] outline-none font-[Poppins] font-medium mt-5" />
                                <textarea name="message" id="message" className=" mt-5 px-3 py-2 w-[100%] outline-none font-[Poppins] font-medium" placeholder="Your Message"></textarea>
                                <button type="button" className=" block bg-[#fe831d] py-2 w-[100%] font-[poppins] font-medium text-white mt-3">Sent</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] sm:block hidden">
                        <img src={contactimage} alt="contact" className="w-[100%]  h-[100%] object-cover" />
                    </div>
                </div>
                <div className="flex lg:justify-between items-center px-8 mt-8 md:px-14 md:mt-14 lg:px-20 lg:mt-28 flex-wrap gap-20 justify-center lg:gap-0">
                    <div className="box flex items-center gap-5 flex-col">
                        <a href="tel:123 4XX7 890" title="phone" className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full text-3xl text-[#fe831d] bg-[#f8edd1] flex justify-center items-center" target="_blank">
                            <span><i className="fa-solid fa-phone"></i></span>
                        </a>
                        <a href="tel:123 4XX7 890" target="_blank" title="Phone">
                            <span  className="sm:text-2xl font-[recoleta] text-[#725D68]">+91 123 4XX7 890</span>
                        </a>
                    </div>
                    <div className="box flex items-center gap-5 flex-col ">
                        <a href="mailto:scoopdoop@gmail.com"  className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full text-3xl text-[#fe831d] bg-[#f8edd1] flex justify-center items-center" target="_blank" title="Email">
                            <span><i className="fa-regular fa-envelope"></i></span>
                        </a>
                        <a href="mailto:scoopdoop@gmail.com" target="_blank" title="Email">
                            <span  className="sm:text-2xl font-[recoleta] text-[#725D68]">scoopdoop@gmail.com</span>
                        </a>
                    </div>
                    <div className="box flex items-center gap-5 flex-col">
                        <a href="https://www.whatsapp.com/" target="_blank" title="whatsapp" className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full text-3xl text-[#fe831d] bg-[#f8edd1] flex justify-center items-center">
                            <span><i className="fa-brands fa-whatsapp"></i></span>
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank" title="whatsapp">
                            <span  className="sm:text-2xl font-[recoleta] text-[#725D68]">+91 098 7XX4 321</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactpage