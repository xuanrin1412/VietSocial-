import { useState } from "react";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import moment from "moment";
import postData from "../FakeData/postData";
import { t } from "i18next";
import { ImgPost } from "./ImgPost";

export default function Post() {
    //=========== handle toggle show more ==========
    const [isTruncated, setIsTruncated] = useState<boolean[]>(
        postData.map(() => true)
    );
    const toggleContent = (postIndex: number) => {
        setIsTruncated((prev) => [
            ...prev.slice(0, postIndex),
            !prev[postIndex],
            ...prev.slice(postIndex + 1),
        ]);
    };

    //=========== handle left right slice img ==========
    const lastImgPositions = postData.map((data) => data.imgUrl.length - 1);
    const [currentIndex, setCurrentIndex] = useState<number[]>(
        postData.map(() => 0)
    );
    const handleLeftRightImg = (type: string, postIndex: number) => {
        const lastimg = lastImgPositions[postIndex];
        console.log("lastimg", lastimg);
        if (type === "left") {
            setCurrentIndex((prev) => {
                const updatePrev = [
                    ...prev.slice(0, postIndex),
                    prev[postIndex] === 0 ? 0 : prev[postIndex] - 1,
                    ...prev.slice(postIndex + 1),
                ];
                return updatePrev;
            });
        } else if (type === "right") {
            setCurrentIndex((prev) => {
                const updatePrev = [
                    ...prev.slice(0, postIndex),
                    prev[postIndex] === lastimg ? lastimg : prev[postIndex] + 1,
                    ...prev.slice(postIndex + 1),
                ];
                return updatePrev;
            });
        }
    };
    const dotChangeImg = (indexDot: number, postIndex: number) => {
        setCurrentIndex((prev) => [
            ...prev.slice(0, postIndex),
            indexDot,
            ...prev.slice(postIndex + 1),
        ]);
    };
    return (
        <div>
            {postData.map((data, postIndex) => (
                <div
                    key={postIndex}
                    className=" w-8/12 mx-auto mb-10 bg-black  border-b-[1px] border-gray-600"
                >
                    {/* header's-post */}
                    <div className="flex h-[46px]  items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                                <div className="h-[45px] w-[45px] p-[2px]   ">
                                    <img
                                        className="h-full w-full object-cover rounded-full border-[2.5px] border-black"
                                        src={data.imgProfile}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className=" font-medium">
                                    {data.userName}
                                </div>
                                <div
                                    style={{
                                        fontSize: "30px",
                                    }}
                                >
                                    &#183;
                                </div>
                                <div className="text-gray-500">
                                    {moment(data.datePost).format(
                                        "MMMM DD, YYYY"
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer">
                            <MoreHorizRoundedIcon />
                        </div>
                    </div>
                    {/* images's-post */}
                    <ImgPost
                        data={data}
                        handleLeftRightImg={handleLeftRightImg}
                        dotChangeImg={dotChangeImg}
                        postIndex={postIndex}
                        currentIndex={currentIndex}
                        lastImgPositions={lastImgPositions}
                    />
                    {/* like , comment */}
                    <div className="mt-3 flex justify-between">
                        <div>
                            <FavoriteBorderIcon style={{ fontSize: "35px" }} />
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
                                isTruncated[postIndex]
                                    ? "w-[350px] truncate"
                                    : ""
                            }`}
                        >
                            sowri <span className="px-2">||</span>
                            <span className="font-thin">{data.context}</span>
                        </p>
                        {isTruncated[postIndex] && (
                            <span
                                onClick={() => {
                                    toggleContent(postIndex);
                                }}
                                className="cursor-pointer"
                            >
                                Show more
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
                    </div>
                </div>
            ))}
        </div>
    );
}
