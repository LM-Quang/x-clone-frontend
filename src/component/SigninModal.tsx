import Link from "next/link";
import React from "react";

interface ModalProps {
   isOpen: boolean;
   closeModal: React.MouseEventHandler<HTMLButtonElement>;
}
const CreateAccountModal = ({ isOpen, closeModal }: ModalProps) => {
   return (
      <div>
         {isOpen && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
               <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-60" />
               <div className="relative p-4 w-full max-w-md max-h-full bg-black rounded-2xl">
                  <div className="p-5">
                     <div className="flex mb-5">
                        <button
                           type="button"
                           onClick={closeModal}
                           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                           <svg
                              className="w-3 h-3"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M1 1L13 13M13 1L1 13"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </button>
                        <svg
                           className="w-9 h-9 m-auto fill-white"
                           viewBox="0 0 24 24"
                           aria-label="X logo"
                        >
                           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                     </div>
                     <h1 className="text-3xl font-bold mb-8">Sign in to X</h1>
                     <div>
                        <div className="space-y-4">
                           <button className="w-full flex items-center justify-center bg-white text-gray-800 font-semibold py-3 px-4 border rounded-full cursor-pointer transition ease-in-out duration-200 hover:bg-gray-200">
                              <svg
                                 className="w-5 h-5 mr-2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                 />
                                 <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                 />
                                 <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                 />
                                 <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                 />
                              </svg>
                              Sign up with Google
                           </button>

                           <button className="w-full flex items-center justify-center bg-white text-gray-800 font-semibold py-2 px-4 border rounded-full cursor-pointer transition ease-in-out duration-200 hover:bg-gray-200">
                              <svg
                                 className="w-8 h-8 mr-2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M16.3,10.2c-0.2-1.5,0.6-3,1.8-3.8c-0.7-1-1.7-1.6-2.9-1.8c-1.2-0.2-2.4,0.7-3,0.7c-0.6,0-1.6-0.7-2.6-0.7 c-1.3,0-2.6,0.8-3.3,2c-1.4,2.4-0.4,6,1,8c0.7,1,1.4,2,2.4,2c1,0,1.3-0.6,2.5-0.6c1.2,0,1.5,0.6,2.5,0.6c1,0,1.7-0.9,2.3-1.9 c0.7-1.1,1-2.1,1-2.2C17.9,12.3,16.3,12,16.3,10.2z"
                                    fill="currentColor"
                                 />
                                 <path
                                    d="M14.8,4.4c0.6-0.8,1.1-1.9,0.9-3c-0.9,0-2,0.6-2.6,1.4c-0.6,0.7-1.1,1.8-0.9,2.8C13.1,5.7,14.1,5.2,14.8,4.4z"
                                    fill="currentColor"
                                 />
                              </svg>
                              Sign up with Apple
                           </button>

                           <div className=" w-full relative flex items-center">
                              <div className="flex-grow border-t border-gray-500"></div>
                              <span className="flex-shrink mx-4 text-white">or</span>
                              <div className="flex-grow border-t border-gray-500"></div>
                           </div>

                           <form>
                              <input
                                 type="text"
                                 id="phoneOrEmail"
                                 className="border border-gray-500 text-gray-500 text-2xl rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 outline-none"
                                 placeholder="Phone, email"
                                 required
                              />
                           </form>

                           <button className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full cursor-pointer transition ease-in-out duration-200 hover:bg-gray-200">
                              Next
                           </button>

                           <button className="w-full  text-white font-semibold py-3 px-4 border-2 border-borderGray rounded-full cursor-pointer transition ease-in-out duration-200 hover:bg-gray-900">
                              Forgot Password?
                           </button>

                           <p className="mt-5">
                              Don&apos;t have an account?{" "}
                              <Link href="/" className="text-iconBlue">
                                 Sign up.
                              </Link>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default CreateAccountModal;
