import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function VideoStreaming() {
  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.advertisements.tableData.headings} rows={data.advertisements.tableData.rows} />
      </div>
    </div>
  )
}

export default VideoStreaming