import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Contacts() {
  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.agencies.tableData.headings} rows={data.agencies.tableData.rows} />
      </div>
    </div>
  )
}

export default Contacts