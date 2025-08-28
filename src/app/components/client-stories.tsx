import Image from "next/image";

export default function ClientStories() {   

    return (
        <div className="flex flex-row items-center mt-[90px] bg-[#F9F9F9] h-[594px] justify-between w-screen">
       <div className="pt-[150px]">
<Image
src="/clients/Group 4.png"
alt="clients"
height={329}
width={394.89}/>
       </div>

        <div className="flex flex-col ml-[32px] w-[445px] h-[234px] mr-[11px]">
        <Image
            src="/clients/Frame 28.png"
            alt="client stories"
            width={50}
            height={50}
       />

       <h1 className="w-[109px] mt-[6px] h-[25px] font-semibold text-[14px]">Sara Workman</h1>
       <span className="w-[75px] h-[15px] font-regular text-[12px] ">CEO at Valid</span>
       <p className="w-[700px] h-[90px] font-medium text-[22px]">"Since I started using this fintech app, managing my finances has become so much easier. I can track my spending, set savings goals, and even invest all in one place."</p>
        </div>

        <div className="pt-[316]">
             <Image
            src="/clients/Group 5.png"
            alt="client stories"
            width={295.42}
            height={157}
       />

        </div>

         </div>

        
    );
}