import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Stories() {
  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.stories.tableData.headings} rows={data.stories.tableData.rows} />
      </div>
    </div>
  )
}

export default Stories