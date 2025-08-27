import { MdCheckCircle } from "react-icons/md";
import Image from "next/image";
export default function Main() {

    const checkList = [
        { id: 1, name: "Easily Access To Any Data" },
        { id: 2, name: "Easily Access To Any Data" },
        { id: 3, name: "Easily Access To Any Data" },
        { id: 4, name: "Easily Access To Any Data" },
    ];
    return (
        <div className="mt-[57.96px] flex flex-row" >
            <div className="flex flex-col" >
                <h1 className="w-116 h-60 text-[60px] font-bold leading-tight font ">Soudemy can maximize your money flow.</h1>
                <p className="font-regular text-[14px] w-97.5 h-15 mt-5 ">You no longer need to go home or go to the bank to do this.Only through this platform , all financial activities can completed.</p>
              
              <div className="flex flex-row">
                 <button className="mt-[10px] w-32 h-10 bg-[#FF8100] rounded-[30px] gap-2.5"><a href="" className="font-bold text-[14px] h-5 w-21">Get Started</a></button>
                <button className="ml-9.5 mt-[10px] w-32 h-10 rounded-[30px] border border-black gap-2.5"><a href="" className="font-bold  text-[14px] h-5 w-21">Learn more</a></button>

              </div>
               
             <div className="grid grid-cols-2 gap-3.2 mt-10 w-110">
                 {checkList.map((item) => (
                    <div key={item.id }className="flex items-center gap-2">
                        <MdCheckCircle className="w-[15px] h-[15px] bg text-xl" />
                        <span className="font-regular h-5 w-[179px] text-[14px]">{item.name}</span> </div>))}</div>  
   
            </div>

            <Image
             src="/main/Group 1.png"
                alt="Main Image"
                width={530}
                height={495}
                className=" mr-[179px] "/>
               
           

        </div>
    )

}