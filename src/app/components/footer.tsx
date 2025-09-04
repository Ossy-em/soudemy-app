
export default function Footer() {

    return (
        <div className="h-[608px]  pt-[81px] bg-[#1E1E1E] lg:px-32 flex flex-col text-white font-[Montserrat] ">
            <div className="flex flex-row gap-[200px]">
                <h1 className="w-[286px] h-[80] text-[30px] leading-tight font-semibold">Subscribe to Our Newsletter</h1>
                <div className="flex items-center justify-between p-[25px] bg-white rounded-[55px] overflow-hidden w-[583px] h-[70px]">
                    <input
                        type="text"
                        placeholder="Your Email Addess"
                        className=" text-[#888888] text-[14px] font-medium w-[138px] h-10 "
                    />
                    <button className="bg-[#FF8100] text-black px-4 py-2 rounded-[35px] w-[144px] h-[48px] font-bold text-[14px] hover:bg-[#e6730e] transition-colors">
                        Get started
                    </button>
                </div>
            </div>

            <div className="flex grid-rows-5 mt-[166px] gap-[78px]">

                <div className="lex flex-col gap-[20px]">
                    <h1 className="font-bold text-[18px] w-[89px]">Soudemy</h1>
                    <p className="w-[274px] h-[14px] text-[13px] font-regular ">Platform help your money to be better</p>
                </div>


                <div className="flex flex-col gap-[15px]">
                    <h1 className="font-bold text-[14px] w-[64px] h-[18px]">Features</h1>
                    <ul className="flex flex-col gap-5 w-[122px] h-[132px] text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors">Financial Freedom</a></li>
                    </ul>
                </div>

                   <div className="flex flex-col gap-[15px]">
                    <h1 className="font-bold text-[14px] w-[64px] h-[18px]">Support</h1>
                    <ul className="flex flex-col gap-5 w-[122px] h-[132px] text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors">Financial Freedom</a></li>
                    </ul>
                </div>

                   <div className="flex flex-col gap-[15px]">
                    <h1 className="font-bold text-[14px] w-[64px] h-[18px]">Company</h1>
                    <ul className="flex flex-col gap-5 w-[122px] h-[132px] text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors">Financial Freedom</a></li>
                    </ul>
                </div>


                   <div className="flex flex-col gap-[15px]">
                    <h1 className="font-bold text-[14px] w-[64px] h-[18px]">Resources</h1>
                    <ul className="flex flex-col gap-5 w-[122px] h-[132px] text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors">Financial Freedom</a></li>
                    </ul>
                </div>



            </div>
            <div className="text-center flex items-center justify-center mt-[93px] mb-[70px]">
 <span className="w-[438px] h-[18px] text-[14px] font-medium ">Copyright: @2023 Soudemy Team Design All Rights Reserved.</span>
        </div>
    
            </div>
    )    
}