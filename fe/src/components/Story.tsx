import { useRef, useState } from "react";
import storyData from "../FakeData/storyData";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function Story() {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [maxScroll, setMaxScroll] = useState<number>(0);

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        const scrollAmount = 330;
        if (container) {
            if (direction === "right") {
                container.scrollLeft += scrollAmount;
            } else if (direction === "left") {
                container.scrollLeft -= scrollAmount;
            }
            setScrollPosition(container.scrollLeft);
            setMaxScroll(container.scrollWidth - container.clientWidth);
        }
    };
    return (
        <div className="h-[130px] mb-5  w-full no-scrollbar overflow-x-scroll  flex items-center ">
            <div
                ref={scrollContainerRef}
                className="no-scrollbar overflow-x-scroll flex items-center scroll-smooth"
                onScroll={() => {
                    if (scrollContainerRef.current) {
                        setScrollPosition(
                            scrollContainerRef.current.scrollLeft
                        );
                    }
                }}
            >
                {storyData.map((data, index) => (
                    <div
                        key={index}
                        className="space-y-2 px-[8.5px] cursor-pointer"
                    >
                        <div className=" bg-gradient-to-r rounded-full from-purple-500 to-pink-500">
                            <div className="h-[67px] w-[67px] p-[2px] ">
                                <img
                                    className="h-full w-full object-cover rounded-full border-[2.5px] border-black"
                                    src={data.imgUrl}
                                    alt=""
                                />
                            </div>
                        </div>
                        <p className="text-center text-[15px] w-[67px] h-[25px] text-ellipsis overflow-hidden">
                            {data.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className=" pl-4 absolute  top-10 left-0 w-[649px]  flex justify-between flex-end ">
                {scrollPosition == 0 ? (
                    <span></span>
                ) : (
                    <span onClick={() => handleScroll("left")}>
                        <FaCircleChevronLeft className="h-5 w-5 opacity-90" />
                    </span>
                )}
                {scrollPosition >= 1 && scrollPosition == maxScroll ? (
                    <span></span>
                ) : (
                    <span onClick={() => handleScroll("right")}>
                        <FaCircleChevronRight className="h-5 w-5 opacity-90" />
                    </span>
                )}
            </div>
        </div>
    );
}
