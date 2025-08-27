"use client";
import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-8 lg:px-32 py-5 h-[5000px]">
      <nav className="h-[80px] flex flex-row font-[Montserrat] justify-between items-center relative">
        
    
        <div className="hidden md:flex w-[536px] h-[65px] pt-2.5 gap-15">
          <h1 className="font-bold text-[18px] w-[89px]">Soudemy</h1>
          <ul className="flex gap-6 w-97 text-[14px] font-regular">
            <li><a href="/" className="hover:text-[#FF8100] transition-colors">Feature</a></li>
            <li><a href="/how-it-works" className="hover:text-[#FF8100] transition-colors">How it works</a></li>
            <li><a href="/products" className="hover:text-[#FF8100] transition-colors">Products</a></li>
            <li><a href="/client-stories" className="hover:text-[#FF8100] transition-colors">Client Stories</a></li>
          </ul>
        </div>

       
        <div className="md:hidden flex justify-between items-center w-full">
          <h1 className="font-bold text-[18px]">Soudemy</h1>
          <button 
            onClick={toggleSidebar}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      
        <div className="hidden md:flex gap-7.5">
          <button className="font-semibold text-[14px] h-5 pt-2.5 hover:text-[#FF8100] transition-colors">
            <a href="/sign-up">Sign up</a>
          </button>
          <button className="px-5 py-2.5 rounded-[30px] bg-[#FF8100] text-[14px] font-bold w-31 h-10 hover:bg-[#e6730e] transition-colors">
            <a href="/get-started" className="">Get started</a>
          </button>
        </div>

      </nav>

    
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

    
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
      
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="font-bold text-[18px]">Soudemy</h2>
            <button 
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
     
          <div className="flex flex-col flex-1 p-6">
            <ul className="flex flex-col gap-6 text-[16px] font-regular mb-8">
              <li>
                <a 
                  href="/" 
                  className="block py-2 hover:text-[#FF8100] transition-colors"
                  onClick={closeSidebar}
                >
                  Feature
                </a>
              </li>
              <li>
                <a 
                  href="/how-it-works" 
                  className="block py-2 hover:text-[#FF8100] transition-colors"
                  onClick={closeSidebar}
                >
                  How it works
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className="block py-2 hover:text-[#FF8100] transition-colors"
                  onClick={closeSidebar}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="/client-stories" 
                  className="block py-2 hover:text-[#FF8100] transition-colors"
                  onClick={closeSidebar}
                >
                  Client Stories
                </a>
              </li>
            </ul>
            
            <div className="flex flex-col gap-4 mt-auto">
              <button 
                className="font-semibold text-[16px] py-3 text-left hover:text-[#FF8100] transition-colors"
                onClick={closeSidebar}
              >
                <a href="/sign-up" className="block">Sign up</a>
              </button>
              <button 
                className="px-6 py-3 rounded-[30px] bg-[#FF8100] text-[16px] font-bold text-white hover:bg-[#e6730e] transition-colors"
                onClick={closeSidebar}
              >
                <a href="/get-started" className="block ">Get started</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1>hello</h1>
    </div>
  );
}