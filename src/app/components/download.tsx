
import { MdCheck } from "react-icons/md";
import Image from "next/image";
export default function Download() {

    return (
        <div className=" flex flex-row lg:px-32 mb-[38px] ">
            <div className="flex flex-col mt-[163px]">
                <h1 className="w-[554px] h-[120px] text-[52px] font-semibold leading-tight">Facilitate Accessible Financial Services</h1>
                <p className="w-[344px] h-{42px] text-[14px] font-normal mt-[20px]">E-wallet that facilities financial transactions anytime and anywhere with just a mobile device.</p>

                <div className='mt-[20px] flex flex-col gap-[15px]'>
                    <div className="flex flex-row gap-[10px] items-center">
                        <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                        <h5 className='font-medium text-[16px] '>Financial transacrion become easier</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                        <h5 className='font-medium text-[16px] '>Better funding access</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                        <h5 className='font-medium text-[16px] '>Supporting financial inclusion</h5>
                    </div>
                </div>

                <div className="flex flex-row gap-[24px] mt-[47px]">
                    <Image
                        src="/download/Fintech-Google-play.png"
                        alt="Goole-Play"
                        width={194}
                        height={60} />

                    <Image
                        src="/download/Fintech-App-Store.png"
                        alt="App-Store"
                        width={194}
                        height={60} />

                </div>


            </div>

            <Image
                src="/download/Group 6.png"
                alt="Goole-Play"
                width={532.9}
                height={531.17} 
                className="mr-[150px] mt-[90px]"/>
        </div>
    )
}