import SideNavbar from "../components/SideNavbar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Profile() {
    return (
        <div className=" text-white flex w-full h-full ">
            <SideNavbar />
            <div className="absolute bg-black text-white right-0 w-4/5 grid grid-cols-3 ">
                <div className="flex h-full w-full justify-center py-16">
                    <div className="h-[152px] w-[152px]  bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ">
                        <div className="h-[150px] w-[150px] p-1 ">
                            <img
                                className="h-full w-full object-cover rounded-full border-2 border-black "
                                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/299188902_724819998610987_8260485082414516733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEyJymSjeKIHDS4ELAPqlueOz7v3BRXris7Pu_cFFeuK8A5JAbIOz8IYkSyQSrSFZ3WW8kJdQZ1nZ4_OWJ1yciX&_nc_ohc=pNN35Ny_RIsAX-Fxfjb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCbbA6_X5Jgs-z_-x2JaVvGf8Ocvl6gPKRhL7x4UISNLg&oe=65B33AAB"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className=" col-span-2 py-10">
                    <div className="flex space-x-4  items-center">
                        <span className="text-xl">sowri</span>
                        <span className="px-4 py-1 rounded-lg bg-[#363636] hover:bg-[#2c2c2c] text-[14px] font-medium">
                            Chỉnh sửa trang cá nhân
                        </span>
                        <span className="px-4 py-1 rounded-lg bg-[#363636] hover:bg-[#2c2c2c] text-[14px] font-medium">
                            Xem kho lưu trữ *
                        </span>
                        <span>
                            <SettingsOutlinedIcon />
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>name</div>
                </div>
            </div>
        </div>
    );
}
