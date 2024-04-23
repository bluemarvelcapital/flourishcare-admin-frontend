import Image from "next/image";
import landingImage from "../public/images/landing-page-image.png";
import Logo from "../public/images/flourish.png";
import googleLogo from "../public/images/google-logo.png";
import eye from "../public/images/eye.jpg";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full text-sm lg:text-xl font-normal">
      <div className="flex-1 w-full h-[100dvh]">
        <Image
          src={landingImage}
          alt="landing page image"
          className="normal-case w-full h-[100dvh]"
        />
      </div>

      <div className="h-[100dvh]">
        <div className="flex-1 h-full flex flex-col items-center w-full px-2">
          <Image src={Logo} alt="Flourish care logo" className="w-60 " />
          <p className="font font-semibold text-xl lg:text-6xl mb-1 lg:mb-10">
            Welcome back 👋
          </p>

          <div className="flex-col flex w-full lg:mx-0 lg:w-2/3">
            <label htmlFor="input-email">Email</label>
            <input
              type="text"
              id="input-email"
              className="px-2 outline-none border-solid border-2 bg-[#FAFAFA] border-[#D7D7D7] focus:border-[#04BD4B] rounded-md py-1 lg:py-3"
            />
          </div>

          <div className="flex-col flex my-4 lg:my-7 w-full lg:mx-0 lg:w-2/3">
            <label htmlFor="input-password">Password</label>
            <input
              type="password"
              id="input-password"
              className="px-2 outline-none border-solid border-2 bg-[#FAFAFA] border-[#D7D7D7] focus:border-[#04BD4B] rounded-md py-1 lg:py-3"
            />
            {/* <Image
            src={eye}
            alt="eye"
            className="cursor-pointer absolute translate-x-0"
          /> */}
          </div>

          <div className="lg:w-2/3 w-full flex flex-row justify-end">
            <p className=" text-[#04BD4B] font-normal text-sm">
              Forgot password?
            </p>
          </div>
          <button className="lg:w-2/3 w-full bg-[#E2E2E2] text-[#98999A] rounded-md border-solid mt-5 py-2 lg:py-4 text-sm">
            Login
          </button>

          <div className="flex flex-row mt-5">
            <p className="">Don&apos;t have an account? </p>{" "}
            <span className="pl-2 capitalize text-[#04BD4B]"> sign up</span>
          </div>

          <div className="flex flex-row mt-5 w-2/3">
            <div className="border-b border-[#EEEEEE] flex-1"> </div>
            <p className="mx-3 text-[#555656]">or</p>
            <div className="border-b border-[#EEEEEE] flex-1"> </div>
          </div>

          <button className="flex justify-center w-full hover:bg-secondary lg:w-2/3 mt-5 rounded-md border border-[#EEEEEE py-1 lg:py-4">
            <Image src={googleLogo} alt="google logo" />
            <p className="ml-2">Continue With Google</p>
          </button>
        </div>
      </div>
    </main>
  );
}
