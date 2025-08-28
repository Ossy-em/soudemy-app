import { MdCheck } from "react-icons/md";
import Image from "next/image";
export default function HowItWorks() {
    return (
        <div className="w-full flex flex-row mt-[125.55] gap-[168px] lg:px-32">
            <div className="flex flex-col">
                <h1 className="w-[431px] h-[180] text-[51px] font-semibold leading-tight ">
                    Get in-depth insights on your cashflow
                </h1>
                <p className="w-[398px] h-[63px] text-[14px] font-normal mt-8">
                    Give your accounting team a partner they can rely on. Automate the boring parts and make sure your financial calculations are always accurate.
                </p>

                <div className='mt-[30px] flex flex-col gap-[15px]'>
                    <div className="flex flex-row gap-[10px] items-center">
                        <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                        <h5 className='font-medium text-[16px] '>Financial transacrion become easier</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                        <h5 className='font-medium text-[16px] '>Financial transacrion become easier</h5>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <MdCheck className=" border-2 w-[15px] h-[15px] text-[#16A34A] font-extrabold rounded-3xl " />
                        <h5 className='font-medium text-[16px] '>Financial transacrion become easier</h5>
                    </div>
                </div>
            </div>

            <div className=" flex w-[524.32px] h-[524.32px]">
                <Image
                    src="/works/Group 2.png"
                    alt="card"
                    width={524.32}
                    height={524.32}
                />
            </div>
        </div>
    );
}