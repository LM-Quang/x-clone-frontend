import Feed from "@/component/Feed";
import LeftBar from "@/component/LeftBar";
import RightBar from "@/component/RightBar";
import Share from "@/component/Share";
import Link from "next/link";

const Homepage = () => {
   return (
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
         <div className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
         </div>
         <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
               <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href="/">
                  For you
               </Link>
               <Link className="pb-3 flex items-center" href="/">
                  Following
               </Link>
               <Link className="hidden pb-3 md:flex items-center" href="/">
                  React.js
               </Link>
               <Link className="hidden pb-3 md:flex items-center" href="/">
                  Javascript
               </Link>
               <Link className="hidden pb-3 md:flex items-center" href="/">
                  CSS
               </Link>
            </div>
            <Share />
            <Feed />
         </div>
         <div className="hidden lg:flex ml-4 flex-1">
            <RightBar />
         </div>
      </div>
   );
};

export default Homepage;
