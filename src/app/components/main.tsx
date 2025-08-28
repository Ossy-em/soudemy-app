import { MdCheckCircle } from "react-icons/md";
import Image from "next/image";
export default function Main() {
  const checkList = [
    { id: 1, name: "Easily Access To Any Data" },
    { id: 2, name: "Fast and Secure Transactions" },
    { id: 3, name: "24/7 Customer Support" },
    { id: 4, name: "All-in-one Financial Platform" },
  ];
  return (
    <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-2 md:px-0 lg:px-32">

      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-4">
          Soudemy can maximize your money flow.
        </h1>
        <p className="font-regular text-sm sm:text-base md:text-[14px] mb-6">
          You no longer need to go home or go to the bank to do this. Only through this platform, all financial activities can be completed.
        </p>
        <div className="flex flex-row gap-4 mb-8">
          <button className="mt-2 w-28 sm:w-32 h-10 bg-[#FF8100] rounded-[30px] font-bold text-sm sm:text-[14px]">
            <a href="">Get Started</a>
          </button>
          <button className="mt-2 w-28 sm:w-32 h-10 rounded-[30px] border border-black font-bold text-sm sm:text-[14px]">
            <a href="">Learn more</a>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
          {checkList.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <MdCheckCircle className="w-5 h-5" />
              <span className="font-regular text-sm sm:text-[14px]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/main/Group 1.png"
          alt="Main Image"
          width={350}
          height={320}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  );
}