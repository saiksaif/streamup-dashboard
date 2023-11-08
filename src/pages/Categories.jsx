import CustomizedTabs from "../components/CustomizedTabs";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Categories() {
    const categoryTable = (index) => {
        return (
          <div>
            <div className="w-100 px-1 md:px-5 pb-0">
              <DataTable headings={data?.categories[index]?.data?.headings} rows={data?.categories[index]?.data?.list} showExtra={false} />
            </div>
          </div>
        )
    }

    return (
        <div>
            <div className="bg-white hover:shadow-2xl shadow-lg rounded-2xl duration-300 mx-5 mb-5 w-100">
                <CustomizedTabs data={data?.categories} child={categoryTable} />
            </div>
        </div>
    );
}

export default Categories;
