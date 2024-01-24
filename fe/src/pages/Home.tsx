import SideNavbar from "../components/SideNavbar";
import { t } from "i18next";
import Story from "../components/Story";
import Post from "../components/Post";
import storyData from "../FakeData/storyData";

export default function Home() {
    return (
        <div className=" text-white flex w-full h-full ">
            <SideNavbar />
            <div className="absolute bg-black text-white right-0 w-4/5 flex">
                <div className="w-2/3">
                    <Story />
                    <Post />
                </div>
                <div className="w-full  px-12 py-8">
                    {/* YOUR PROFILE */}
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
                    <div>
                        {storyData.slice(0, 5).map((data, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center mb-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="h-[44px] w-[44px]  ">
                                        <img
                                            className="h-full w-full rounded-full object-cover "
                                            src={data.imgUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="font-bold">{data.name}</div>
                                </div>
                                <div className="text-[#008CE7] font-medium">
                                    {t("follow")}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="pt-6 text-[13px] text-[#6C6C6C]">
                            Giới thiệu &#183; Trợ giúp &#183; Báo chí &#183; API
                            &#183; Việc làm &#183; Quyền riêng tư &#183; Điều
                            khoản &#183; Vị trí &#183; Ngôn ngữ &#183; Meta đã
                            xác minh
                        </div>
                        <div className="mt-4 text-[13px] text-[#6C6C6C]">
                            © 2024 INSTAGRAM FROM META
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
