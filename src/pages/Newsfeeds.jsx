import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Newsfeeds() {
  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.newsfeeds.tableData.headings} rows={data.newsfeeds.tableData.rows} />
      </div>
    </div>
  )
}

export default Newsfeeds