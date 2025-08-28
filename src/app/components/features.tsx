import Image from 'next/image';
import { MdCheck } from "react-icons/md";
export default function Features() {
    return (
        <div className="mt-[70] px-2 sm:px-4 lg:px-32">
            <div className="flex justify-center items-center">
                <h1 className="w-[828px] text-2xl sm:text-3xl md:text-4xl lg:text-[52px] text-center font-medium leading-tight">
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

            <div className='mt-[90] flex flex-row gap-[17px]'>

                <div>
                    <Image
                        src="/features/Group 3.png"
                        alt="group-3"
                        width={585}
                        height={499.45}
                        className="w-[585px] h-[499.45px] "
                    />
                </div>

                <div className='flex flex-col gap-[25px]'>
                    <h1 className='w-[447px] h-[180px] text-[49px] font-semibold leading-tight'>The role of Fintech in the payment system</h1>
                    <span className='w-[330px] h-[63] text-[14px] font-normal'>FinTech is able to replace the role of formal financial institutions such as banks. In terms of the payment system. </span>
                    <div className=''>
                        <div className="flex flex-row gap-[10px] items-center">
                            <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                           <h5 className='font-medium text-[16px] '>Become a tool for payment, settlement and clearing</h5> 
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                           <h5 className='font-medium text-[16px] '>Become a tool for payment, settlement and clearing</h5> 
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                           <h5 className='font-medium text-[16px] '>Become a tool for payment, settlement and clearing</h5> 
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}