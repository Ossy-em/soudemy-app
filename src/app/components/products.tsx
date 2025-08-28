import { MdPayment,   } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoDesktopOutline } from "react-icons/io5";


export default function Products() {
    return (
        <div className="mt-[90.68] lg:px-32 ">
            <div className="items-center text-center flex justify-center">
                <h1 className="text-center font-medium text-[52px] w-[535px] h-[130] leading-tight">We`ve created a full suite of products</h1>
            </div>

            <div className=" flex grid-rows-3 mt-[66px] gap-[15px]">

                <div className="flex flex-col pl-5 gap-[15px] bg-[#EFEFEF] w-[335px] h-[229px] rounded-2xl">
                    <div className="bg-white h-13 w-15 mt-[17px] rounded-[10px] gap-[10px]">
                        <MdPayment className=" text-[#FF8100] h-8 w-10 m-2.5  " />
                    </div>
                    <h1 className="text-[18px] font-medium w-[244px] h-[25px] mt-[13px]">Payment Feature Ultimate</h1>
                    <p className="w-83.25 h-18.75 mt-2 text-[12px] pr-5 font-normal">Arcu sed eu phasellus feugiat mattis, dolor iaculis turpis sit risus ornare consequat quam, urna eleifend?</p>
                </div>

                     <div className="flex flex-col pl-5 gap-[15px] bg-[#EFEFEF] w-[335px] h-[229px] rounded-2xl">
                    <div className="bg-white h-13 w-15 mt-[17px] rounded-[10px] gap-[10px]">
                        <TbBrandGoogleAnalytics className=" text-[#FF8100] h-8 w-10 m-2.5  " />
                    </div>
                    <h1 className="text-[18px] font-medium w-[244px] h-[25px] mt-[13px]">PFinance Analytics</h1>
                    <p className="w-83.25 h-18.75 mt-2 text-[12px] pr-5 font-normal">Arcu sed eu phasellus feugiat mattis, dolor iaculis turpis sit risus ornare consequat quam, urna eleifend?</p>
                </div>

                  <div className="flex flex-col pl-5 gap-[15px] bg-[#EFEFEF] w-[335px] h-[229px] rounded-2xl">
                    <div className="bg-white h-13 w-15 mt-[17px] rounded-[10px] gap-[10px]">
                        <IoDesktopOutline  className=" text-[#FF8100] h-8 w-10 m-2.5  " />
                    </div>
                    <h1 className="text-[18px] font-medium w-[244px] h-[25px] mt-[13px]">Intelligent Software</h1>
                    <p className="w-83.25 h-18.75 mt-2 text-[12px] pr-5 font-normal">Arcu sed eu phasellus feugiat mattis, dolor iaculis turpis sit risus ornare consequat quam, urna eleifend?</p>
                </div>

            </div>
        </div>
    )
}