"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import landingImage from "../../public/login_image.svg";
import { Button, Form, Input } from "antd";
import { useLoginMutation } from "@/services/auth.service";
import { useDispatch } from "react-redux";
import { setAuth } from "@/context/auth.slice";
import { toast } from "react-toastify";

export default function Auth() {
    const router = useRouter();
    const [form] = Form.useForm<{ email: string; password: string }>();
    const [login, { isLoading: loginIsLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    return (
        <div className="grid sm:grid-cols-12 bg-white w-full xl:gap-x-14">
            <div className="md:col-span-7 sm:col-span-6 w-full h-full">
                <Image
                    src={landingImage}
                    alt="landing page image"
                    className="normal-case w-full h-[100dvh]"
                />
            </div>{" "}
            <div
                className="md:col-span-5 flex flex-row align-center justify-center sm:col-span-6 w-full text-sm xl:text-lg xl:px-10 px-2 md:px-4 h-full mx-auto my-auto"
                // style={{}}
            >
                <header className="flex items-center flex-col">
                    <Image
                        src={Logo}
                        alt="Flourish care logo"
                        className="w-60 "
                        style={{ margin: "20px 0" }}
                    />{" "}
                    <p className="font font-semibold text-xl xl:text-2xl 2xl:text-4xl mb-1 xl:mb-5">
                        Welcome back Admin 👋{" "}
                    </p>
                </header>
                <div id="input-section">
                    <Form
                        layout="vertical"
                        onFinish={(values: {
                            email: string;
                            password: string;
                        }) => {
                            login(values)
                                .unwrap()
                                .then((res) => {
                                    toast.success("Login successful");

                                    // TODO: Change to direct to dashboard overview instead of blog section
                                    dispatch(
                                        setAuth({
                                            user: res.data.user,
                                            accessToken: res.data.accessToken,
                                            refreshToken: res.data.refreshToken,
                                        }),
                                    );
                                    router.replace("/blog");
                                })
                                .catch((err) =>
                                    toast.error(
                                        err?.message ||
                                            err?.data?.message ||
                                            "An Error Occured",
                                    ),
                                );
                        }}
                        form={form}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            required
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email",
                                },
                            ]}
                        >
                            <Input
                                type="text"
                                id="email-input"
                                onChange={(e) =>
                                    form.setFieldsValue({
                                        email: e.target.value,
                                    })
                                }
                                className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2 2xl:mb-6 mb-4"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            required
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your password",
                                },
                            ]}
                        >
                            <div
                                id="password-input-div"
                                className="flex flex-col"
                            >
                                <Input
                                    onChange={(e) =>
                                        form.setFieldsValue({
                                            password: e.target.value,
                                        })
                                    }
                                    type="password"
                                    id="password-input"
                                    className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2"
                                />
                            </div>
                        </Form.Item>
                        {/* <h3 className="text-secondary flex justify-end mb-4" style={{ cursor: 'pointer' }}>
                            Forgot Password ?
                        </h3> */}
                        <div
                            id="sign-up"
                            className="flex flex-col justify-center items-center"
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-secondary w-full rounded-md text-white flex flex-row justify-center items-center"
                                style={{ padding: "25px", marginTop: "20px" }}
                                disabled={loginIsLoading}
                            >
                                {loginIsLoading ? (
                                    "Logging In..."
                                ) : (
                                    <p>Login</p>
                                )}
                            </Button>
                            {/* <p className="mt-4 2xl:mt-6 text-[#98999A]">
                                Don&apos;t have an account?{" "}
                                <span className="text-secondary" style={{ cursor: 'pointer' }}>Sign Up</span>
                            </p> */}
                        </div>{" "}
                    </Form>
                </div>
                {/* <div className="flex flex-row mt-5">
                    <div className="border-b border-[#EEEEEE] flex-1"> </div>
                    <p className="mx-3 text-[#555656]">or</p>
                    <div className="border-b border-[#EEEEEE] flex-1"> </div>{" "}
                </div>{" "}
                <button className="flex justify-center w-full hover:bg-secondary mt-5 rounded-md border border-secondary py-1 2xl:py-4 duration-200  hover:border-secondary">
                    <Image src={googleLogo} alt="google logo" />
                    <p className="ml-2">Continue With Google</p>{" "}
                </button> */}
            </div>
        </div>
    );
}
