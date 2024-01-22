import { Link } from "react-router-dom";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export default function Register() {
    return (
        <div className="relative w-full h-screen text-white bg-black flex items-center justify-center ">
            <form className="w-[80%] sm:w-[40%] text-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg border-2 border-white">
                <div className="text-5xl font-bold text-center mb-10">
                    Register
                </div>
                <div className="space-y-3  ">
                    <div className="space-x-2 flex flex-col sm:flex-row">
                        <label htmlFor="email" className="w-[150px]">
                            Email{" "}
                        </label>
                        <input
                            className="rounded-lg p-1 px-2 text-black sm:w-full"
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="space-x-2 flex flex-col sm:flex-row">
                        <label htmlFor="userName" className="w-[150px]">
                            Username{" "}
                        </label>
                        <input
                            className="rounded-lg p-1 px-2 text-black sm:w-full"
                            id="userName"
                            type="text"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="space-x-2 flex flex-col sm:flex-row ">
                        <label htmlFor="pass" className="w-[150px]">
                            PassWord
                        </label>
                        <input
                            className="rounded-lg p-1 px-2 text-black  sm:w-full"
                            id="pass"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex justify-between pt-10 text-[20px] text-pink-200">
                        <div>
                            You already have an account!
                            <p>
                                <Link to={"/login"}>
                                    <span className="underline hover:text-white">
                                        Login Now
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className=" font-bold border-2 border-white text-white h-fit mt-6 p-2 rounded-md hover:bg-black ">
                            Submit
                        </div>
                    </div>
                </div>
            </form>
            <Link to={"/"}>
                <div className="absolute top-12 left-10 space-x-2">
                    <WestOutlinedIcon />
                    <span>Back home</span>
                </div>
            </Link>
        </div>
    );
}
