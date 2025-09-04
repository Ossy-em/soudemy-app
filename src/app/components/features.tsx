import Image from 'next/image';
import { MdCheck } from "react-icons/md";

export default function Features() {
    return (
        <div   id="features" className="scroll-mt-[80px] mt-[70px] px-4 sm:px-6 md:px-8 lg:px-32 max-w-full overflow-hidden">
            <div className="flex justify-center items-center">
                <h1 className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-[52px] text-center font-medium leading-tight break-words">
                    App features that help manage money more organized
                </h1>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#EFEFEF] flex flex-col items-center rounded-[25px] px-4 py-6">
                    <h3 className="mt-2 max-w-xs text-center text-lg sm:text-xl md:text-2xl font-semibold font-[Montserrat] mb-4">
                        Facilitate Financial Services
                    </h3>
                    <span className="max-w-xs font-regular text-xs sm:text-sm text-center mb-4">
                        Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas.
                    </span>
                    <Image
                        src="/features/img-1 .png"
                        alt="img-1"
                        width={220}
                        height={180}
                        className="mt-4 w-full max-w-xs h-auto object-contain"
                    />
                </div>

                <div className="bg-[#EFEFEF] flex flex-col items-center rounded-[25px] px-4 py-6">
                    <h3 className="mt-2 max-w-xs text-center text-lg sm:text-xl md:text-2xl font-semibold font-[Montserrat] mb-4">
                        Facilitate Financial Services
                    </h3>
                    <span className="max-w-xs font-regular text-xs sm:text-sm text-center mb-4">
                        Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas.
                    </span>
                    <Image
                        src="/features/img-2.png"
                        alt="img-2"
                        width={220}
                        height={180}
                        className="mt-4 w-full max-w-xs h-auto object-contain"
                    />
                </div>

                <div className="bg-[#EFEFEF] flex flex-col items-center rounded-[25px] px-4 py-6">
                    <h3 className="mt-2 max-w-xs text-center text-lg sm:text-xl md:text-2xl font-semibold font-[Montserrat] mb-4">
                        Facilitate Financial Services
                    </h3>
                    <span className="max-w-xs font-regular text-xs sm:text-sm text-center mb-4">
                        Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas.
                    </span>
                    <Image
                        src="/features/img-3.png"
                        alt="img-3"
                        width={220}
                        height={180}
                        className="mt-4 w-full max-w-xs h-auto object-contain"
                    />
                </div>
            </div>

            <div className='mt-16 sm:mt-20 md:mt-[90px] flex flex-col lg:flex-row gap-6 lg:gap-[17px] items-center lg:items-start'>

                <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                    <Image
                        src="/features/Group 3.png"
                        alt="group-3"
                        width={585}
                        height={499.45}
                        className="w-full max-w-md sm:max-w-lg lg:max-w-[585px] h-auto object-contain"
                    />
                </div>

                <div className='flex flex-col gap-6 lg:gap-[25px] w-full lg:w-auto max-w-full lg:max-w-none'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[49px] font-semibold leading-tight break-words text-center lg:text-left'>
                        The role of Fintech in the payment system
                    </h1>
                    <span className='text-sm lg:text-[14px] font-normal break-words text-center lg:text-left max-w-full lg:max-w-[330px]'>
                        FinTech is able to replace the role of formal financial institutions such as banks. In terms of the payment system.
                    </span>
                    <div className='flex flex-col gap-3 lg:gap-2'>
                        <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                            <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                           <h5 className='font-medium text-sm lg:text-[16px] break-words'>Become a tool for payment, settlement and clearing</h5> 
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                            <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                           <h5 className='font-medium text-sm lg:text-[16px] break-words'>Become a tool for payment, settlement and clearing</h5> 
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-center lg:justify-start">
                            <MdCheck className="border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl flex-shrink-0" />
                           <h5 className='font-medium text-sm lg:text-[16px] break-words'>Become a tool for payment, settlement and clearing</h5> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}