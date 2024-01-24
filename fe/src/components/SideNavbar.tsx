import { IoMdSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineExplore } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
// import LogoutIcon from "@mui/icons-material/Logout";
// import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
// import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
// import i18n from "../i18n";
// import { t } from "i18next";
// import { useState } from "react";
export default function SideNavbar() {
    const [t] = useTranslation();
    // const [activeLang, setActiveLang] = useState<"en" | "vn">("en");
    // function changeLanguage(language: "en" | "vn") {
    //     i18n.changeLanguage(language);
    // }
    // const [openLogOut, setOpenLogOut] = useState(false);
    // const handleOpenLogOut = () => {
    //     setOpenLogOut(true);
    // };
    // const handleCLoseLogOut = () => {
    //     setOpenLogOut(false);
    // };

    return (
        <div>
            <div className="bg-black fixed h-screen w-1/5 border-r-2 border-[#262626] p-5">
                <div className="py-4 font-pacifico text-2xl pl-[15px] font-Pacifico">
                    <Link to={"/"}> VietSocial</Link>
                </div>
                <div>
                    {/* home */}
                    <Link to={"/"}>
                        <div className="hoverSidebar group space-x-4">
                            <span>
                                <IoMdHome
                                    className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                    style={{ fontSize: "30px" }}
                                />
                            </span>
                            <span className="text-[16px]">{t("homePage")}</span>
                        </div>
                    </Link>
                    {/* search */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <IoMdSearch
                                className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">{t("search")}</span>
                    </div>
                    {/* exlore */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <MdOutlineExplore
                                className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">{t("explore")}</span>
                    </div>
                    {/* reels */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <MdOndemandVideo
                                className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">{t("reels")}</span>
                    </div>
                    {/* messenger */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <RiMessengerLine
                                className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">{t("messenger")}</span>
                    </div>
                    {/* notifile */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <FaRegHeart
                                className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">{t("nofifycation")}</span>
                    </div>
                    {/* create */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <AddCircleOutlineIcon
                                className="transform transition duration-500
                                group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">
                            {t("createAnArticle")}
                        </span>
                    </div>
                    {/* profile */}
                    <Link to={"/profile"}>
                        <div className="hoverSidebar group space-x-4 flex items-center">
                            <span className="h-[35px] w-[35px]">
                                <img
                                    className=" rounded-full transform transition duration-500
                                    group-hover:scale-[1.07]"
                                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/279213448_660810538345267_1208880374634183147_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHmvmso2f5Upo1BOhCFnWnb_H_b6Jgdjsn8f9vomB2OyXLaj9dy19o-AaIXoHkp1dLT4Gc1Otp74gX1YYKbY4C7&_nc_ohc=B9ayp9MjRaAAX-xZB22&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDA8rDARC5czzJmTneEN7hmAy5lfxwGVb7RMm1PmZnVSw&oe=65B21B54"
                                    alt=""
                                />
                            </span>
                            <span className="text-[16px]">{t("profile")}</span>
                        </div>
                    </Link>
                    {/* watch more */}
                    <div className="hoverSidebar group space-x-4">
                        <span>
                            <IoMenu
                                className="transform transition duration-500
                                    group-hover:scale-[1.07]"
                                style={{ fontSize: "30px" }}
                            />
                        </span>
                        <span className="text-[16px]">{t("watchMore")}</span>
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
                    {/* <div
                        className="hoverSidebar space-x-4"
                        onClick={handleOpenLogOut}
                    >
                        <span className="">
                            <LogoutIcon style={{ fontSize: "35px" }} />
                        </span>
                        <span className="text-xl">{t("logOut")}</span>
                    </div> */}
                    {/* <div className=" flex border w-fit ml-[15px]  mt-[30px] cursor-pointer">
                        <div
                            onClick={() => {
                                changeLanguage("en");
                                setActiveLang("en");
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
                                setActiveLang("vn");
                            }}
                            className={`px-4 ${
                                activeLang == "vn"
                                    ? "bg-gray-200 bg-opacity-10"
                                    : ""
                            }`}
                        >
                            VN
                        </div>
                    </div> */}
                </div>
                {/* OVERLAY */}
            </div>
            {/* {openLogOut && (
                <div
                    onClick={handleCLoseLogOut}
                    className=" fixed top-0 left-0  bottom-0 right-0 flex justify-center items-center z-50 bg-white bg-opacity-20"
                >
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="w-[25%] bg-black border-2 border-white p-10 space-y-7"
                    >
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
            )} */}
        </div>
    );
}
