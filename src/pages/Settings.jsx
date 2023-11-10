import CustomizedTabs from "../components/CustomizedTabs";
import EditProfile from "../components/EditProfile";
import data from "../assets/data.json";

function Settings() {
    const profileSettings = (index) => {
        return (
            <EditProfile />
        )
    }
    // const changePassword = (index) => {
    //     return (
    //         <div>
    //         other Here
    //       </div>
    //     )
    // }
    const websiteSettings = (index) => {
        return (
            <div>
            other Here
          </div>
        )
    }
    // const badges = (index) => {
    //     return (
    //         <div>
    //         other Here
    //       </div>
    //     )
    // }
    let pages = [
        // changePassword,
        profileSettings,
        websiteSettings
        // badges
    ]

    return (
        <div>
            <div className="bg-white hover:shadow-2xl shadow-lg rounded-2xl duration-300 mx-5 mb-5 w-100">
                <CustomizedTabs data={data?.setting} child={pages} />
            </div>
        </div>
    );
}

export default Settings;
