export default function Footer() {

    return (
        <div className="min-h-[400px] lg:h-[608px] pt-12 lg:pt-[81px] bg-[#1E1E1E] px-4 sm:px-6 md:px-8 lg:px-32 flex flex-col text-white font-[Montserrat] max-w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px] items-center lg:items-start">
                <h1 className="text-xl sm:text-2xl lg:text-[30px] leading-tight font-semibold break-words max-w-full lg:max-w-[286px] text-center lg:text-left">
                    Subscribe to Our Newsletter
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 lg:p-[25px] bg-white rounded-[55px] overflow-hidden w-full max-w-md lg:max-w-[583px] lg:w-[583px] lg:h-[70px] gap-4 sm:gap-0">
                    <input
                        type="text"
                        placeholder="Your Email Address"
                        className="text-[#888888] text-[14px] font-medium w-full sm:w-auto lg:w-[138px] h-10 outline-none bg-transparent"
                    />
                    <button className="bg-[#FF8100] text-black px-4 py-2 rounded-[35px] w-full sm:w-[144px] h-[48px] font-bold text-[14px] hover:bg-[#e6730e] transition-colors">
                        Get started
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 lg:mt-[166px] gap-8 lg:gap-[78px]">

                <div className="flex flex-col gap-4 lg:gap-[20px] col-span-2 md:col-span-3 lg:col-span-1">
                    <h1 className="font-bold text-[18px] break-words">Soudemy</h1>
                    <p className="text-[13px] font-regular break-words max-w-[274px]">Platform help your money to be better</p>
                </div>

                <div className="flex flex-col gap-4 lg:gap-[15px]">
                    <h1 className="font-bold text-[14px] break-words">Features</h1>
                    <ul className="flex flex-col gap-3 lg:gap-5 text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors break-words">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors break-words">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors break-words">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors break-words">Financial Freedom</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 lg:gap-[15px]">
                    <h1 className="font-bold text-[14px] break-words">Support</h1>
                    <ul className="flex flex-col gap-3 lg:gap-5 text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors break-words">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors break-words">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors break-words">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors break-words">Financial Freedom</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 lg:gap-[15px]">
                    <h1 className="font-bold text-[14px] break-words">Company</h1>
                    <ul className="flex flex-col gap-3 lg:gap-5 text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors break-words">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors break-words">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors break-words">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors break-words">Financial Freedom</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 lg:gap-[15px]">
                    <h1 className="font-bold text-[14px] break-words">Resources</h1>
                    <ul className="flex flex-col gap-3 lg:gap-5 text-[13px] font-regular">
                        <li><a href="/" className="hover:text-[#FF8100] transition-colors break-words">Saving goal</a></li>
                        <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors break-words">Cash Back Reward</a></li>
                        <li><a href="/products" className="hover:text-[#FF8100] transition-colors break-words">Early payday</a></li>
                        <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors break-words">Financial Freedom</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-center flex items-center justify-center mt-12 lg:mt-[93px] mb-8 lg:mb-[70px]">
                <span className="text-[14px] font-medium break-words max-w-full px-4">
                    Copyright: @2023 Soudemy Team Design All Rights Reserved.
                </span>
            </div>
        </div>
    );    
}