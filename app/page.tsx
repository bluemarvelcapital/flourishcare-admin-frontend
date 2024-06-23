"use client";
import Image from "next/image";
import landingImage from "@/public/images/landing-page-image.png";
import Logo from "@/public/images/flourish.png";
import { useLoginMutation } from "@/services/auth.service";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuth } from "@/context/auth.slice";

export default function Home() {
    const [formData, setFormData] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });
    const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await login({
                email: formData.email,
                password: formData.password,
            }).unwrap();

            const { accessToken, refreshToken, user } = response.data;
            dispatch(setAuth({ accessToken, refreshToken, user }));
            toast.success("Login successful");
            router.replace("/overview");
        } catch (error: unknown) {
            toast.error(
                (error as any)?.data?.message ??
                    "An error occurred. Please try again.",
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className=" w-full h-full flex justify-between">
            <div className="grid sm:grid-cols-12 bg-white w-full xl:gap-x-14">
                <div className="hidden md:block md:col-span-7 sm:col-span-6  w-full h-full">
                    <Image
                        src={landingImage}
                        alt="landing page image"
                        className="normal-case w-full h-[100dvh]"
                    />
                </div>{" "}
                <div className="px-10 py-10 md:col-span-5 sm:col-span-6 w-full text-sm xl:text-lg xl:px-10 px-2 md:px-4 h-full my-auto flex flex-col justify-center mx-auto max-w-[900px]">
                    <header className="flex items-center flex-col">
                        <Image
                            src={Logo}
                            alt="Flourish care logo"
                            className="w-[200px] md:w-60  mb-7"
                        />{" "}
                        <p className="font font-semibold text-xl xl:text-2xl 2xl:text-4xl mb-1 xl:mb-5">
                            Welcome back 👋{" "}
                        </p>
                    </header>
                    <form action="" method="post" onSubmit={handleLogin}>
                        <div id="input-section">
                            <div id="email-input-div" className="flex flex-col">
                                <label
                                    className="lg:mb-2"
                                    htmlFor="email-input"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email-input"
                                    required
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2 2xl:mb-6 mb-4"
                                />
                            </div>

                            <div
                                id="password-input-div"
                                className="flex flex-col"
                            >
                                <label
                                    className="lg:mb-2"
                                    htmlFor="password-input"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password-input"
                                    required
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
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
                            <button
                                type="submit"
                                className="bg-secondary w-full 2xl:py-3 py-1 rounded-md text-white"
                            >
                                {isLoading ? "Logging in..." : "Login"}
                            </button>
                        </div>{" "}
                    </form>
                </div>
            </div>
        </main>
    );
}
