import { MdCheck } from "react-icons/md";
import Image from "next/image";

export default function HowItWorks() {
    return (
        <div id="how-it-works" className=" scroll-mt-[80px] w-full flex flex-col lg:flex-row mt-16 sm:mt-20 md:mt-24 lg:mt-[125.55px] gap-8 lg:gap-[168px] px-4 sm:px-6 md:px-8 lg:px-32 max-w-full overflow-hidden">
            <div className="flex flex-col w-full lg:w-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[51px] font-semibold leading-tight break-words text-center lg:text-left max-w-full lg:max-w-[431px]">
                    Get in-depth insights on your cashflow
                </h1>
                <p className="text-sm lg:text-[14px] font-normal mt-6 lg:mt-8 break-words text-center lg:text-left max-w-full lg:max-w-[398px]">
                    Give your accounting team a partner they can rely on. Automate the boring parts and make sure your financial calculations are always accurate.
                </p>

                <div className='mt-6 lg:mt-[30px] flex flex-col gap-4 lg:gap-[15px]'>
                    <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                        <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                        <h5 className='font-medium text-sm lg:text-[16px] break-words'>Financial transacrion become easier</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                        <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                        <h5 className='font-medium text-sm lg:text-[16px] break-words'>Financial transacrion become easier</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                        <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                        <h5 className='font-medium text-sm lg:text-[16px] break-words'>Financial transacrion become easier</h5>
                    </div>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                <Image
                    src="/works/Group 2.png"
                    alt="card"
                    width={524.32}
                    height={524.32}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[524.32px] h-auto object-contain"
                />
            </div>
        </div>
    );
}