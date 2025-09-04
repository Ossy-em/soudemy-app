import Image from "next/image";

export default function ClientStories() {   

    return (
        <div id="client-stories" className="scroll-mt-[80px] flex flex-col lg:flex-row items-center mt-16 sm:mt-20 md:mt-24 lg:mt-[90px] bg-[#F9F9F9] min-h-[400px] lg:h-[594px] justify-center lg:justify-between w-full px-4 sm:px-6 md:px-8 lg:px-0 py-8 lg:py-0 max-w-full overflow-hidden">
            <div className="flex justify-center lg:pt-[150px] order-2 lg:order-1">
                <Image
                    src="/clients/Group 4.png"
                    alt="clients"
                    height={329}
                    width={394.89}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[394.89px] h-auto object-contain"
                />
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[32px] w-full lg:w-[445px] max-w-full lg:max-w-[445px] lg:h-[234px] lg:mr-[11px] order-1 lg:order-2 px-4 lg:px-0">
                <Image
                    src="/clients/Frame 28.png"
                    alt="client stories"
                    width={50}
                    height={50}
                    className="mb-2"
                />

                <h1 className="mt-[6px] font-semibold text-[14px] break-words">Sara Workman</h1>
                <span className="font-regular text-[12px] break-words mb-4 lg:mb-0">CEO at Valid</span>
                <p className="font-medium text-base sm:text-lg lg:text-[22px] leading-relaxed lg:leading-normal break-words max-w-full lg:max-w-[700px]">
                    "Since I started using this fintech app, managing my finances has become so much easier. I can track my spending, set savings goals, and even invest all in one place."
                </p>
            </div>

            <div className="flex justify-center lg:pt-[316px] order-3">
                <Image
                    src="/clients/Group 5.png"
                    alt="client stories"
                    width={295.42}
                    height={157}
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-[295.42px] h-auto object-contain"
                />
            </div>
        </div>
    );
}