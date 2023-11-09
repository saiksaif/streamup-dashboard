import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Transactions() {
  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.transactions.tableData.headings} rows={data.transactions.tableData.rows} />
      </div>
    </div>
  )
}

export default Transactions