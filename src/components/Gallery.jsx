import galleryone from '../Assests/images/gallery-1.jpg'
import gallerythree from '../Assests/images/gallery-3.jpg'
import gallerytwo from '../Assests/images/gallery-2.jpg'
import gallerysix from '../Assests/images/gallery-6.jpg'
import galleryfive from '../Assests/images/gallery-5.jpg'
import galleryfour from '../Assests/images/gallery-4.jpg'
import bannerscoop from '../Assests/images/banner-1-scoop.png'

const Gallery = () => {
    return(
        <>
            <div id="gallery" className="bg-white px-8 md:px-14 lg:px-20 pt-10 pb-8 sm:pb-20 relative">
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E69A4D] font-[Poppins] font-bold">We are Serve 100% Natural flavours</h2>
                <div className="flex pt-4 sm:pt-20 gap-3 md:gap-10 items-center ">
                    <div className="w-[100%] hidden sm:flex gap-5 lg:gap-10 flex-col">
                        <img src={galleryone} alt="gallery" className="rounded-lg sm:rounded-3xl" />
                        <img src={gallerythree} alt="gallery" className="rounded-lg sm:rounded-3xl" />
                    </div>
                    <div className="w-[100%]">
                        <img src={gallerytwo} alt="gallery" className="rounded-lg sm:rounded-3xl" />
                    </div>
                    <div className="md:w-[70%] w-[100%] flex gap-4 flex-col">
                        <div>
                            <img src={gallerysix} alt="gallery" className="rounded-lg sm:rounded-3xl" />
                        </div>
                        <div className="w-[100%] flex gap-2 sm:gap-5 ">
                            <img src={galleryfive} alt="gallery" className="rounded-lg sm:rounded-xl w-[45%] sm:w-[50%]" />
                            <img src={galleryfour} alt="gallery" className="rounded-lg sm:rounded-xl w-[45%] sm:w-[50%]" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-150px] left-[-100px] scoop lg:block hidden">
                    <img src={bannerscoop} alt="scoop" className="lg:block hidden" />
                </div>
            </div>
        </>
    )
}

export default Gallery