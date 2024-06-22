import gallerytwoone from '../Assests/images/gallerytwo-1.jpg'
import gallerytwotwo from '../Assests/images/gallerytwo-2.jpg'
import gallerytwothree from '../Assests/images/gallerytwo-4.jpg'
import gallerytwofour from '../Assests/images/gallerytwo-3.jpg'
import gallerytwofive from '../Assests/images/gallerytwo-5.jpg'
const Gallerytwo = () =>{
    return(
        <>
            <section id="gallerytwo" className="bg-white px-8 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20 relative">
                <div className="flex gap-3 sm:gap-10 items-end">
                    <div className="w-[100%] flex flex-col gap-5">
                        <div className=" text-right">
                            <img src={gallerytwoone}  alt="gallery" className="rounded-xl w-[80%] sm:w-[60%] object-cover inline-block" />
                        </div>
                        <div className=" text-right ">
                            <img src={gallerytwotwo}  alt="gallery" className="rounded-xl w-[90%] sm:w-[80%] object-cover inline-block" />
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <img src={gallerytwothree} alt="gallery" className="rounded-xl" />
                    </div>
                    <div className="w-[100%] hidden sm:flex flex-col gap-5">
                        <div className=" text-left ">
                            <img src={gallerytwofour}  alt="gallery" className="rounded-xl w-[60%] object-cover inline-block" />
                        </div>
                        <div className=" text-left">
                            <img src={gallerytwofive}  alt="gallery" className="rounded-xl w-[60%] object-cover inline-block" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallerytwo 