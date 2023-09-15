import React from "react";

function SignUpForm() {
    var csrfToken = window.Laravel.csrfToken;

    return (
        <div className="min-h-screen py-20 bg-gradient-to-r from-gray-700 to-zinc-950">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-contain bg-center"
                        style={{
                            backgroundImage:
                                "url('https://img.freepik.com/premium-vector/biometric-security_701961-6759.jpg')",
                        }}
                    ></div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4">Register</h2>
                        <p className="mb-4">
                            Create your account. It’s free and only takes a
                            minute
                        </p>
                        <form action="/register" method="POST">
                            <input type="hidden" name="_token" value={csrfToken} />
                            <div className="grid grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="Firstname"
                                    className="border border-gray-400 py-1 px-2"
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Surname"
                                    className="border border-gray-400 py-1 px-2"
                                />
                            </div>
                            <div className="mt-5">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className="border border-gray-400 py-1 px-2 w-full"
                                />
                            </div>
                            <div className="mt-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="border border-gray-400 py-1 px-2 w-full"
                                />
                            </div>
                            <div className="mt-5">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="border border-gray-400 py-1 px-2 w-full"
                                />
                            </div>
                            <div className="mt-5">
                                <input
                                    type="checkbox"
                                    className="border border-gray-400"
                                />
                            </div>
                            <span>
                                I accept the{" "}
                                <a
                                    href="#"
                                    className="text-purple-500 font-semibold"
                                >
                                    Terms of Use
                                </a>{" "}
                                &{" "}
                                <a
                                    href="#"
                                    className="text-purple-500 font-semibold"
                                >
                                    Privacy Policy
                                </a>
                            </span>
                            <div className="mt-5">
                                <button className="w-full bg-purple-500 py-3 text-center text-white" type="submit">
                                    Register Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
