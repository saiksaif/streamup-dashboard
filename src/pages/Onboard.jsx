import CustomizedTabs from "../components/CustomizedTabs";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Onboard() {
    const onboardTable = (index) => {
        return (
          <div>
            <div className="w-100 px-1 md:px-5 pb-0">
              <DataTable headings={data?.onboarding[index]?.data?.headings} rows={data?.onboarding[index]?.data?.list} showExtra={false} />
            </div>
          </div>
        )
    }

    return (
        <div>
            <div className="bg-white hover:shadow-2xl shadow-lg rounded-2xl duration-300 mx-5 mb-5 w-100">
                <CustomizedTabs data={data?.onboarding} child={onboardTable} />
            </div>
        </div>
    );
}

export default Onboard;
