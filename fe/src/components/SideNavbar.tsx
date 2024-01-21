import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import i18n from "../i18n";
import { t } from "i18next";
import { useState } from "react";
export default function SideNavbar() {
    const [activeLang, setActiveLang] = useState<"en" | "vn">("en");
    function changeLanguage(language: "en" | "vn") {
        i18n.changeLanguage(language);
        setActiveLang(language);

        console.log("language", language);
    }

    return (
        <div className="bg-black fixed h-screen w-1/5 border-r-2 border-[#262626] p-5">
            <div className="py-7 font-pacifico text-4xl pl-[15px]">
                VietSocial
            </div>
            <div>
                <div className="hoverSidebar space-x-4">
                    <span>
                        <HomeIcon style={{ fontSize: "35px" }} />
                    </span>
                    <span className="text-xl">{t("homePage")}</span>
                </div>
                <div className="hoverSidebar space-x-4">
                    <span>
                        <SearchIcon style={{ fontSize: "35px" }} />
                    </span>
                    <span className="text-xl">{t("search")}</span>
                </div>
                <div className="hoverSidebar space-x-4">
                    <span>
                        <AddCircleOutlineIcon style={{ fontSize: "35px" }} />
                    </span>
                    <span className="text-xl">{t("createAnArticle")}</span>
                </div>
                <div className="hoverSidebar space-x-4">
                    <span className="h-[35px] w-[35px]">
                        <img
                            className=" rounded-full"
                            src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/279213448_660810538345267_1208880374634183147_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHmvmso2f5Upo1BOhCFnWnb_H_b6Jgdjsn8f9vomB2OyXLaj9dy19o-AaIXoHkp1dLT4Gc1Otp74gX1YYKbY4C7&_nc_ohc=B9ayp9MjRaAAX-xZB22&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDA8rDARC5czzJmTneEN7hmAy5lfxwGVb7RMm1PmZnVSw&oe=65B21B54"
                            alt=""
                        />
                    </span>
                    <span className="text-xl">{t("profile")}</span>
                </div>
                <div className="hoverSidebar space-x-4">
                    <span className="">
                        <LogoutIcon style={{ fontSize: "35px" }} />
                    </span>
                    <span className="text-xl">{t("logOut")}</span>
                </div>
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
        </div>
    );
}
