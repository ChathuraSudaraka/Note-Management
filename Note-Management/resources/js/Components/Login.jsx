import React from "react";

function LoginForm() {
    var csrfToken = window.Laravel.csrfToken;
    return (
        <div className="min-h-screen py-40 bg-gradient-to-r from-gray-700 to-zinc-950">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-contain bg-center"
                        style={{
                            backgroundImage:
                                "url('https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=2000')",
                        }}
                    ></div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4">Log In</h2>
                        <p className="mb-4">
                            Login your account. It’s free and only takes a
                            minute
                        </p>
                        <form action="/login" method="POST">
                            <input
                                type="hidden"
                                name="_token"
                                value={csrfToken}
                            />
                            <div className="mt-5">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Username"
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
                                <button
                                    className="w-full bg-purple-500 hover:bg-blue-800 py-3 text-center text-white"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>

                            <div className="button-container mt-5">
                                <a href="/signup" className="hover:text-blue-800">
                                    Go to Register
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
