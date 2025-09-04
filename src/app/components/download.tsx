import { MdCheck } from "react-icons/md";
import Image from "next/image";

export default function Download() {

    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-32 mb-8 lg:mb-[38px] gap-8 lg:gap-0 max-w-full overflow-hidden">
            <div className="flex flex-col mt-8 sm:mt-12 md:mt-16 lg:mt-[163px] w-full lg:w-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold leading-tight break-words max-w-full lg:max-w-[554px] text-center lg:text-left">
                    Facilitate Accessible Financial Services
                </h1>
                <p className="text-sm lg:text-[14px] font-normal mt-4 lg:mt-[20px] break-words max-w-full lg:max-w-[344px] text-center lg:text-left">
                    E-wallet that facilities financial transactions anytime and anywhere with just a mobile device.
                </p>

                <div className='mt-6 lg:mt-[20px] flex flex-col gap-4 lg:gap-[15px]'>
                    <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                        <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                        <h5 className='font-medium text-sm lg:text-[16px] break-words'>Financial transacrion become easier</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                        <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                        <h5 className='font-medium text-sm lg:text-[16px] break-words'>Better funding access</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                        <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                        <h5 className='font-medium text-sm lg:text-[16px] break-words'>Supporting financial inclusion</h5>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[24px] mt-8 lg:mt-[47px] justify-center lg:justify-start items-center lg:items-start">
                    <Image
                        src="/download/Fintech-Google-play.png"
                        alt="Google-Play"
                        width={194}
                        height={60}
                        className="w-full max-w-[150px] sm:max-w-[194px] h-auto object-contain"
                    />

                    <Image
                        src="/download/Fintech-App-Store.png"
                        alt="App-Store"
                        width={194}
                        height={60}
                        className="w-full max-w-[150px] sm:max-w-[194px] h-auto object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:w-auto lg:mr-[150px] lg:mt-[90px]">
                <Image
                    src="/download/Group 6.png"
                    alt="Download"
                    width={532.9}
                    height={531.17}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[532.9px] h-auto object-contain"
                />
            </div>
        </div>
    );
}