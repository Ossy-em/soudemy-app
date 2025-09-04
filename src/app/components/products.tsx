import { MdPayment } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoDesktopOutline } from "react-icons/io5";

export default function Products() {
    return (
        <div id="products" className="scroll-mt-[80px] mt-16 sm:mt-20 md:mt-24 lg:mt-[90.68px] px-4 sm:px-6 md:px-8 lg:px-32 max-w-full overflow-hidden">
            <div className="items-center text-center flex justify-center">
                <h1 className="text-center font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[52px] max-w-full lg:max-w-[535px] leading-tight break-words">
                    We've created a full suite of products
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-[66px] gap-4 lg:gap-[15px]">

                <div className="flex flex-col pl-5 gap-[15px] bg-[#EFEFEF] w-full max-w-[335px] h-[229px] rounded-2xl mx-auto lg:mx-0">
                    <div className="bg-white h-13 w-15 mt-[17px] rounded-[10px] gap-[10px]">
                        <MdPayment className="text-[#FF8100] h-8 w-10 m-2.5" />
                    </div>
                    <h1 className="text-[18px] font-medium w-[244px] h-[25px] mt-[13px] break-words">Payment Feature Ultimate</h1>
                    <p className="w-83.25 h-18.75 mt-2 text-[12px] pr-5 font-normal break-words">Arcu sed eu phasellus feugiat mattis, dolor iaculis turpis sit risus ornare consequat quam, urna eleifend?</p>
                </div>

                <div className="flex flex-col pl-5 gap-[15px] bg-[#EFEFEF] w-full max-w-[335px] h-[229px] rounded-2xl mx-auto lg:mx-0">
                    <div className="bg-white h-13 w-15 mt-[17px] rounded-[10px] gap-[10px]">
                        <TbBrandGoogleAnalytics className="text-[#FF8100] h-8 w-10 m-2.5" />
                    </div>
                    <h1 className="text-[18px] font-medium w-[244px] h-[25px] mt-[13px] break-words">Finance Analytics</h1>
                    <p className="w-83.25 h-18.75 mt-2 text-[12px] pr-5 font-normal break-words">Arcu sed eu phasellus feugiat mattis, dolor iaculis turpis sit risus ornare consequat quam, urna eleifend?</p>
                </div>

                <div className="flex flex-col pl-5 gap-[15px] bg-[#EFEFEF] w-full max-w-[335px] h-[229px] rounded-2xl mx-auto lg:mx-0 sm:col-span-2 lg:col-span-1">
                    <div className="bg-white h-13 w-15 mt-[17px] rounded-[10px] gap-[10px]">
                        <IoDesktopOutline className="text-[#FF8100] h-8 w-10 m-2.5" />
                    </div>
                    <h1 className="text-[18px] font-medium w-[244px] h-[25px] mt-[13px] break-words">Intelligent Software</h1>
                    <p className="w-83.25 h-18.75 mt-2 text-[12px] pr-5 font-normal break-words">Arcu sed eu phasellus feugiat mattis, dolor iaculis turpis sit risus ornare consequat quam, urna eleifend?</p>
                </div>

            </div>
        </div>
    );
}