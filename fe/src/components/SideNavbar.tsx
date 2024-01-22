import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
// import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
// import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import i18n from "../i18n";
import { t } from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SideNavbar() {
    const [activeLang, setActiveLang] = useState<"en" | "vn">("en");
    function changeLanguage(language: "en" | "vn") {
        i18n.changeLanguage(language);
        setActiveLang(language);

        console.log("language", language);
    }

    const [openLogOut, setOpenLogOut] = useState(false);
    const handleOpenLogOut = () => {
        setOpenLogOut(true);
    };
    const handleCLoseLogOut = () => {
        setOpenLogOut(false);
    };

    return (
        <div>
            <div className="bg-black fixed h-screen w-1/5 border-r-2 border-[#262626] p-5">
                <div className="py-7 font-pacifico text-4xl pl-[15px] font-Pacifico">
                    <Link to={"/"}> VietSocial</Link>
                </div>
                <div>
                    <Link to={"/"}>
                        <div className="hoverSidebar space-x-4">
                            <span>
                                <HomeIcon style={{ fontSize: "35px" }} />
                            </span>
                            <span className="text-xl">{t("homePage")}</span>
                        </div>
                    </Link>

                    <div className="hoverSidebar space-x-4">
                        <span>
                            <SearchIcon style={{ fontSize: "35px" }} />
                        </span>
                        <span className="text-xl">{t("search")}</span>
                    </div>
                    <div className="hoverSidebar space-x-4">
                        <span>
                            <AddCircleOutlineIcon
                                style={{ fontSize: "35px" }}
                            />
                        </span>
                        <span className="text-xl">{t("createAnArticle")}</span>
                    </div>
                    <div className="hoverSidebar space-x-4 ">
                        <span className="h-[35px] w-[35px]">
                            <img
                                className=" rounded-full"
                                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/279213448_660810538345267_1208880374634183147_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHmvmso2f5Upo1BOhCFnWnb_H_b6Jgdjsn8f9vomB2OyXLaj9dy19o-AaIXoHkp1dLT4Gc1Otp74gX1YYKbY4C7&_nc_ohc=B9ayp9MjRaAAX-xZB22&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDA8rDARC5czzJmTneEN7hmAy5lfxwGVb7RMm1PmZnVSw&oe=65B21B54"
                                alt=""
                            />
                        </span>
                        <span className="text-xl">{t("profile")}</span>
                    </div>
                    {/* login - register */}
                    {/* <Link to={"/login"}>
            <div className="hoverSidebar space-x-4">
                <span className="">
                    <LoginRoundedIcon style={{ fontSize: "35px" }} />
                </span>
                <span className="text-xl">{t("logIn")}</span>
            </div>
        </Link>
        <Link to={"/register"}>
            <div className="hoverSidebar space-x-4">
                <span className="">
                    <HistoryEduOutlinedIcon
                        style={{ fontSize: "35px" }}
                    />
                </span>
                <span className="text-xl">{t("register")}</span>
            </div>
        </Link> */}
                    {/* ============= */}
                    <div
                        className="hoverSidebar space-x-4"
                        onClick={handleOpenLogOut}
                    >
                        <span className="">
                            <LogoutIcon style={{ fontSize: "35px" }} />
                        </span>
                        <span className="text-xl">{t("logOut")}</span>
                    </div>
                    <div></div>
                    <div className=" flex border w-fit ml-[15px]  mt-[30px] cursor-pointer">
                        <div
                            onClick={() => {
                                changeLanguage("en");
                            }}
                            className={`px-4 ${
                                activeLang == "en"
                                    ? "bg-gray-200 bg-opacity-10 "
                                    : ""
                            }`}
                        >
                            EN
                        </div>
                        <div
                            onClick={() => {
                                changeLanguage("vn");
                            }}
                            className={`px-4 ${
                                activeLang == "vn"
                                    ? "bg-gray-200 bg-opacity-10"
                                    : ""
                            }`}
                        >
                            VN
                        </div>
                    </div>
                </div>
                {/* OVERLAY */}
            </div>
            {openLogOut && (
                <div className=" fixed top-0 left-0  w-full h-screen flex justify-center items-center z-50 ">
                    <div
                        onClick={handleCLoseLogOut}
                        className=" fixed top-0 left-0 w-full h-full z-10 bg-white opacity-15"
                    ></div>
                    <div className="w-[80%] sm:w-[25%] bg-black border-2 border-white p-10 space-y-7 z-50">
                        <div className="text-xl font-bold text-center">
                            You want to log out ?
                        </div>
                        <div className="flex items-center justify-between px-4">
                            <span className="px-4 py-2 border-2 hover:bg-white hover:text-black font-bold ">
                                Yes
                            </span>
                            <span
                                onClick={handleCLoseLogOut}
                                className="px-4 py-2 border-2 hover:bg-white hover:text-black font-bold "
                            >
                                No
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
