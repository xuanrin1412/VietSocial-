import SideNavbar from "../components/SideNavbar";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
// import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import i18n from "../i18n";
import { t } from "i18next";
import { useState } from "react";
import Story from "../components/Story";
export default function Home() {
    // const [activeLang, setActiveLang] = useState<"en" | "vn">("en");
    // function changeLanguage(language: "en" | "vn") {
    //     i18n.changeLanguage(language);
    //     setActiveLang(language);

    //     console.log("language", language);
    // }

    const [isTruncated, setIsTrucated] = useState(true);
    const toggleContent = () => {
        setIsTrucated(!isTruncated);
    };
    return (
        <div className=" text-white flex w-full h-full ">
            <SideNavbar />
            {/* <div className="text-white absolute right-0 bg-red z-50 ">
                <div
                    onClick={() => {
                        changeLanguage("en");
                    }}
                    className={`px-4 ${
                        activeLang == "en" ? "bg-gray-200 bg-opacity-10 " : ""
                    }`}
                >
                    ENádadasd
                </div>
                <div
                    onClick={() => {
                        changeLanguage("vn");
                    }}
                    className={`px-4 ${
                        activeLang == "vn" ? "bg-gray-200 bg-opacity-10" : ""
                    }`}
                >
                    VNádasd
                </div>
            </div> */}
            <div className="absolute bg-black text-white right-0 w-4/5 flex">
                <div className="w-2/3">
                    <Story />
                    {/*======================== POST ==============================*/}

                    <div className=" w-8/12 mx-auto mb-10 bg-black  border-b-[1px] border-gray-600">
                        {/* header's-post */}
                        <div className="flex h-[46px]  items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                                <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                                    <div className="h-[45px] w-[45px] p-[3px]   ">
                                        <img
                                            className="h-full w-full object-cover rounded-full border-[2.5px] border-black"
                                            src="https://images.unsplash.com/photo-1659806727668-358fecad7f60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxKVlhYcng0NnQ2SXx8ZW58MHx8fHx8"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className=" font-medium">sowri</div>
                                    <div
                                        style={{
                                            fontSize: "30px",
                                        }}
                                    >
                                        &#183;
                                    </div>
                                    <div className="text-gray-500">
                                        {t("createAt")} 1/21/2024
                                    </div>
                                </div>
                            </div>
                            <div className=" cursor-pointer">
                                <MoreHorizRoundedIcon />
                            </div>
                        </div>
                        {/* images's-post */}
                        <div className="relative h-[500px] w-full">
                            <img
                                className="h-full w-full object-cover rounded-md border border-gray-500"
                                src="https://lh3.googleusercontent.com/pw/ABLVV85wdLG4Tp368ZHoTaTiyXoiMBfvPvSu45sAGqKgHW2JaXo-q19U9A1UZ_JJUVyKhFK_lXaeF3kahoJAzgFyzWMUyge9sZ8SNjMBWFCX1kWbSFdZpLG_o0fl54YP-CUHnES7YfdRq54x10hRz1CdVjqyVYD4Ul_9Htt2aYof-3gmF6KC6ZRZu7_1If206gUcIaTnw6Zl4iPJImKlP_6Jbpe7rBDCg98m8urHJjObUGvsPQ78iE7jt1bnwhojR-O4bN762u9RKS2om59Tnop52MkcO6LlYKdV9LO5KiMPG80wrc44KTFNw_K1f_v5UJgAIQSbbhBvQ-BXg8aAlX37SoDQNuahoeqRz0NayfXtBzPBTNsekYWwhCIfGBw1MqYTqaqH_NQDkdnzur7vgZr1ZCSLxARalNnp3teUvpzq1olLkbPfPEdZ4mEdpDE0sKPnTuRksBW_GryO8He7V-CHpcVLWF6Q00YYQYWTc31Pz51jQppjxRxYYy4LVxNMPK7HAONMCV1k-jYU1pDtHFYLnOIFxxWqp8mINl5SJV296aKJuL6FhyMXiw6s2McYsUuWD8ez0tewUTa0xro0Egyj3PqLx_9tXfO5A4IdvDvWELrNCd3-Psa1GTROYInoe-mfDULZNbjILAFx0jyMK2nMuiuLqlTB6h6Di-O8-lsaw7waSBPxwZyaH09PZAIsplurd6E3mk06RE9R4IMMFuTALTNn_WsXXJDumWD98RC6PZ4fLX08OCHnYToIan7-8ZWs_zSd1eOjdTsRiYMzsYYDdt7a_jnQxizjOLQSyCYarETrTkzyOam2eFe45BD_2i9qEZWeTEmxBmNqgt4GMi1TSehAOhm02PWeqg_38NGN-938r8ZjlrXbpS0nuuQu5vdCsQ=w465-h827-s-no-gm?authuser=0"
                                alt=""
                            />
                            <div className=" absolute top-1/2 flex w-full justify-between items-center">
                                <div className=" ml-3 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-black hover:text-white">
                                    <KeyboardArrowLeftIcon />
                                </div>
                                <div className=" mr-3 flex items-center justify-center bg-white bg-opacity-20 rounded-full  hover:bg-black hover:text-white">
                                    <ChevronRightIcon />
                                </div>
                            </div>
                            <div className="  absolute left-0 right-0 mx-auto my-0 bottom-5  flex justify-center space-x-3">
                                <div className="h-3 w-3 bg-white bg-opacity-30 hover:bg-opacity-80 rounded-full"></div>
                                <div className="h-3 w-3 bg-white bg-opacity-30 hover:bg-opacity-80 rounded-full"></div>
                                <div className="h-3 w-3 bg-white bg-opacity-30 hover:bg-opacity-80 rounded-full"></div>
                            </div>
                        </div>
                        {/* like,comment */}
                        <div className="mt-3 flex justify-between">
                            <div>
                                <FavoriteBorderIcon
                                    style={{ fontSize: "35px" }}
                                />
                            </div>
                            <div>
                                <InsertCommentOutlinedIcon
                                    style={{ fontSize: "33px" }}
                                />
                            </div>
                        </div>
                        <div className="my-2">
                            1.373 <span>{t("likes")}</span>
                        </div>
                        {/* content */}
                        <div className=" space-x-2 flex justify-between">
                            <p
                                className={`font-medium ${
                                    isTruncated ? "w-[350px] truncate" : ""
                                }`}
                            >
                                sowri <span className="px-2">||</span>
                                <span className="font-thin">
                                    Lorem ipsum dolor sit amet,Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit.
                                    Incidunt nostrum laborum, ratione
                                    consequatur ullam nisi sed veniam blanditiis
                                    optio delectus hic tempora totam dolorum
                                    aliquam dolores animi quas consectetur
                                    eligendi?
                                </span>
                            </p>
                            {isTruncated && (
                                <span
                                    onClick={toggleContent}
                                    className=" cursor-pointer"
                                >
                                    {isTruncated ? "Show more" : ""}
                                </span>
                            )}
                        </div>
                        <div className="my-1 text-[#A8A8A8] cursor-pointer">
                            {t("seeAll")} <span>247</span> {t("comments")}
                        </div>
                        <div className="w-full  bg-black flex items-center mb-4">
                            <input
                                className=" flex-1 outline-none bg-black "
                                type="text"
                                placeholder={t("addAComment")}
                            />
                            {/* <div className="px-4 cursor-pointer">
                                    <SendRoundedIcon />
                                </div> */}
                        </div>
                    </div>
                </div>

                {/* Right profilr suggests */}
                <div className="w-full  px-12 py-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="h-[38px] w-[38px]  ">
                                <img
                                    className="h-full w-full rounded-full "
                                    src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold">sowrin</div>
                        </div>
                        <div className="text-[#008CE7] font-medium">
                            {t("profile")}
                        </div>
                    </div>
                    <div className="pt-8 pb-4">Gợi ý cho bạn</div>
                    {/* each profile */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="h-[44px] w-[44px]  ">
                                    <img
                                        className="h-full w-full rounded-full "
                                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                        alt=""
                                    />
                                </div>
                                <div className="font-bold">sowrin</div>
                            </div>
                            <div className="text-[#008CE7] font-medium">
                                {t("profile")}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="h-[40px] w-[40px]  ">
                                    <img
                                        className="h-full w-full rounded-full "
                                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                        alt=""
                                    />
                                </div>
                                <div className="font-bold">sowrin</div>
                            </div>
                            <div className="text-[#008CE7] font-medium">
                                {t("profile")}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="h-[44px] w-[44px]  ">
                                    <img
                                        className="h-full w-full rounded-full "
                                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                        alt=""
                                    />
                                </div>
                                <div className="font-bold">sowrin</div>
                            </div>
                            <div className="text-[#008CE7] font-medium">
                                {t("profile")}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="h-[40px] w-[40px]  ">
                                    <img
                                        className="h-full w-full rounded-full "
                                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                        alt=""
                                    />
                                </div>
                                <div className="font-bold">sowrin</div>
                            </div>
                            <div className="text-[#008CE7] font-medium">
                                {t("profile")}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="h-[40px] w-[40px]  ">
                                    <img
                                        className="h-full w-full rounded-full "
                                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                        alt=""
                                    />
                                </div>
                                <div className="font-bold">sowrin</div>
                            </div>
                            <div className="text-[#008CE7] font-medium">
                                {t("profile")}
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 text-[13px] text-[#6C6C6C]">
                        Giới thiệu &#183; Trợ giúp &#183; Báo chí &#183; API
                        &#183; Việc làm &#183; Quyền riêng tư &#183; Điều khoản
                        &#183; Vị trí &#183; Ngôn ngữ &#183; Meta đã xác minh
                    </div>
                    <div className="mt-4 text-[13px] text-[#6C6C6C]">
                        © 2024 INSTAGRAM FROM META
                    </div>
                </div>
            </div>
        </div>
    );
}
