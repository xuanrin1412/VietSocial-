import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import React from "react";
import postData from "../FakeData/postData";
interface ImgPostProps {
    data: postData;
    handleLeftRightImg: (type: string, postIndex: number) => void;
    dotChangeImg: (indexDot: number, postIndex: number) => void;
    currentIndex: number[];
    postIndex: number;
    lastImgPositions: number[];
}
export const ImgPost: React.FunctionComponent<ImgPostProps> = ({
    data,
    handleLeftRightImg,
    dotChangeImg,
    postIndex,
    currentIndex,
    lastImgPositions,
}) => {
    return (
        <div className="relative h-[500px] w-full flex  no-scrollbar overflow-x-scroll  items-center scroll-smooth  ">
            <div className=" h-[500px] w-full no-scrollbar overflow-x-scroll flex items-center scroll-smooth">
                {data.imgUrl.map((imgdata, index) => (
                    <img
                        key={index}
                        className={`h-full w-full object-cover rounded-md border border-gray-500
                        ${
                            currentIndex[postIndex] === index
                                ? " inline-block"
                                : "hidden "
                        }
                        `}
                        src={imgdata}
                        alt=""
                    />
                ))}
            </div>

            <div
                className={`absolute top-1/2 flex w-full justify-between items-center`}
            >
                {currentIndex[postIndex] === 0 ? (
                    <span></span>
                ) : (
                    <div
                        onClick={() => handleLeftRightImg("left", postIndex)}
                        className=" ml-3 flex items-center justify-center bg-white bg-opacity-50 rounded-full hover:bg-black hover:text-white"
                    >
                        <KeyboardArrowLeftIcon />
                    </div>
                )}

                {currentIndex[postIndex] === lastImgPositions[postIndex] ? (
                    <span></span>
                ) : (
                    <div
                        onClick={() => handleLeftRightImg("right", postIndex)}
                        className=" mr-3 flex items-center justify-center bg-white bg-opacity-50 rounded-full  hover:bg-black hover:text-white"
                    >
                        <ChevronRightIcon />
                    </div>
                )}
            </div>

            <div className="absolute left-0 right-0 mx-auto my-0 bottom-5  flex justify-center space-x-3">
                {data.imgUrl.map((imgdata, indexDot) => (
                    <div
                        onClick={() => dotChangeImg(indexDot, postIndex)}
                        key={indexDot}
                        className={` h-3 w-3  bg-opacity-30 hover:bg-opacity-80 rounded-full
                                ${
                                    currentIndex[postIndex] === indexDot
                                        ? "bg-black"
                                        : "bg-white"
                                }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
