import Image from "next/image";
import landingImage from "../public/images/landing-page-image.png";
import Logo from "../public/images/flourish.png";
import googleLogo from "../public/images/google-logo.png";
import eye from "../public/images/eye.jpg";

export default function Home() {
  return (
    <main className=" w-full h-full flex justify-between">
      <div className="grid sm:grid-cols-12 bg-white w-full xl:gap-x-14">
        <div className="md:col-span-7 sm:col-span-6  w-full h-full">
          <Image
            src={landingImage}
            alt="landing page image"
            className="normal-case w-full h-[100dvh]"
          />
        </div>{" "}
        <div
          className="md:col-span-5 sm:col-span-6 w-full text-sm xl:text-lg xl:px-10 px-2 md:px-4 h-[100dvh]"
        >
          <header className="flex items-center flex-col">
            <Image src={Logo} alt="Flourish care logo" className="w-60 " />{" "}
            <p className="font font-semibold text-xl xl:text-2xl 2xl:text-4xl mb-1 xl:mb-5">
              Welcome back 👋{" "}
            </p>
          </header>
          <div id="input-section">
            <div id="email-input-div" className="flex flex-col">
              <label className="lg:mb-2" htmlFor="email-input">
                Email
              </label>
              <input
                type="text"
                id="email-input"
                className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2 2xl:mb-6 mb-4"
              />
            </div>

            <div id="password-input-div" className="flex flex-col">
              <label className="lg:mb-2" htmlFor="password-input">
                Password
              </label>
              <input
                type="password"
                id="password-input"
                className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2"
              />
            </div>

            <h3 className="text-secondary flex justify-end mb-4">
              Forgot Password ?
            </h3>
          </div>
          <div
            id="sign-up"
            className="flex flex-col justify-center items-center"
          >
            <button className="bg-secondary w-full 2xl:py-3 py-1 rounded-md text-white">
              Login
            </button>
            <p className="mt-4 2xl:mt-6 text-[#98999A]">
              Don&apos;t have an account?{" "}
              <span className="text-secondary">Sign Up</span>
            </p>
          </div>{" "}
          <div className="flex flex-row mt-5">
            <div className="border-b border-[#EEEEEE] flex-1"> </div>
            <p className="mx-3 text-[#555656]">or</p>
            <div className="border-b border-[#EEEEEE] flex-1"> </div>{" "}
          </div>{" "}
          <button className="flex justify-center w-full hover:bg-secondary mt-5 rounded-md border border-secondary py-1 2xl:py-4 duration-200  hover:border-secondary">
            <Image src={googleLogo} alt="google logo" />
            <p className="ml-2">Continue With Google</p>{" "}
          </button>
        </div>
      </div>
    </main>
  );
}
