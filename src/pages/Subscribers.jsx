import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Subscribers() {
  const addSubsForm = () => {
    let fields = ['fullname', 'email', 'number', 'type'];
    let typeOptions = [
      {value:1, label: 'General'},
      {value:2, label: 'Complex'}
    ]

    return (
      <InputForm actionLabel="Add New Subscriber" fields={fields} typeOptions={typeOptions} />
    )
  }
  
  return (
    <div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Add New Subscriber' modalContent={addSubsForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.agencies.tableData.headings} rows={data.agencies.tableData.rows} />
      </div>
    </div>
  )
}

export default Subscribers