import Feed from "@/component/Feed";
import Share from "@/component/Share";
import Link from "next/link";

const Homepage = () => {
   return (
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
   );
};

export default Homepage;
