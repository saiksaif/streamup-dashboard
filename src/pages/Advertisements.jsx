import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Advertisements() {
  const addAdvertisementForm = () => {
    let fields = ['title'];

    return (
      <InputForm actionLabel="Add Advertisement" fields={fields} />
    )
  }

  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <PopupModal actionLabel='Add Advertisement' modalContent={addAdvertisementForm()} />
      </div>

      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.advertisements.tableData.headings} rows={data.advertisements.tableData.rows} />
      </div>
    </div>
  )
}

export default Advertisements