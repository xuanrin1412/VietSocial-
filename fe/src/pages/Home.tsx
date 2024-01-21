// import { useTranslation } from "react-i18next";
import SideNavbar from "../components/SideNavbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { useState } from "react";

export default function Home() {
    // const { t } = useTranslation();
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleContent = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <div className=" text-white flex w-full h-full ">
            <SideNavbar />
            <div className="absolute bg-black right-0 w-4/5">
                <div className="w-2/3">
                    {/* STORY */}
                    <div className=" h-[130px] mb-5  flex items-center pl-4 bg-gray-900 space-x-4">
                        <div className="space-y-2">
                            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                                <div className="h-[70px] w-[70px] p-[3px]  ">
                                    <img
                                        className="h-full w-full rounded-full border-[2.5px] border-black"
                                        src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/279054327_660144745078513_596882133879240517_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeERMwr-uTDImtvfcrcSVH83WF7suV3-Ph9YXuy5Xf4-H7qrvYAoJzyMFHdd0jGWE6Gvdw87ISNMCXnOcgi0xrgp&_nc_ohc=BOvM0-Q5fwQAX--oI7M&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDtAF4Rnh8OcpCN2v9NKROelaIwq-2FJfEfy4Srfcc8Lw&oe=65B23AF1"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <p className="text-center w-[70px] h-[25px] text-ellipsis overflow-hidden">
                                sowri le thi
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ">
                                <div className="h-[70px] w-[70px] p-[3px]  ">
                                    <img
                                        className="h-full w-full rounded-full border-[2.5px] border-black"
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279235561_657932951966359_3526617033743877937_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeG6MhBYAbqp-pzdsGpWFlci-EupDdCC13X4S6kN0ILXderCuon5W0ZBPkKEPeaS1DE_WPyanjoGzhoT3mz8Gzat&_nc_ohc=QD2692a6cskAX9wv8lQ&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA7CMSnuiZxETov87o1yfha85dnypFrr_JxsDAJfPt1Lw&oe=65B231FF"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <p className="text-center w-[70px] h-[25px] text-ellipsis overflow-hidden">
                                sowri le thi
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                                <div className="h-[70px] w-[70px] p-[3px]  ">
                                    <img
                                        className="h-full w-full rounded-full border-[2.5px] border-black"
                                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/273725517_612240389868949_2939115832801018432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFxsIwNqs6bBqVMUlRJAZjiyOG06KUjvjPI4bTopSO-M9Vg72lXnr1z4s3XpqMK1cMdFYLE-MEsw6hgMb-bBEaS&_nc_ohc=o6G38zNjpc4AX98GEZz&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCE7zdQDMskxY9uMtDh5gyfvzGeuPMCpnJNDKYofuowlw&oe=65B12492"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <p className="text-center w-[70px] h-[25px] text-ellipsis overflow-hidden">
                                sowri le thi
                            </p>
                        </div>
                    </div>

                    {/* POST */}
                    <div className="">
                        <div className=" w-8/12 mx-auto bg-black">
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
                                        <div className=" font-medium">
                                            sowri
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            &#183;
                                        </div>
                                        <div className="text-gray-500">
                                            Create at 1/21/2024
                                        </div>
                                    </div>
                                </div>
                                <div>...cxdfs</div>
                            </div>
                            {/* images's-post */}
                            <div className="relative h-[500px] w-[490px]">
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
                            <div className="my-2">1.373 lượt thích</div>
                            <div className=" space-x-2 flex justify-between">
                                <p
                                    className={`font-medium ${
                                        isTruncated ? "w-[380px] truncate" : ""
                                    }`}
                                >
                                    sowri
                                    <span className="">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quas quibusdam porro,
                                        accusantium voluptas laborum quam
                                        eveniet dolore! Reprehenderit autem sunt
                                        iure illo et perspiciatis unde ea in,
                                        laborum blanditiis dolore!
                                    </span>
                                </p>
                                <span onClick={toggleContent}>
                                    {isTruncated ? "Show more" : "Show less"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
