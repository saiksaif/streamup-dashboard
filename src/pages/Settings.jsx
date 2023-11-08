import CustomizedTabs from "../components/CustomizedTabs";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Settings() {
    const settings = (index) => {
        return (
          <div>
            Settings Here
          </div>
        )
    }

    return (
        <div>
            <div className="bg-white hover:shadow-2xl shadow-lg rounded-2xl duration-300 mx-5 mb-5 w-100">
                <CustomizedTabs data={data?.setting} child={settings} />
            </div>
        </div>
    );
}

export default Settings;
