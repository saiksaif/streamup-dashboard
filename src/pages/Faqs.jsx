import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Faqs() {
  const addFaqForm = () => {
    let fields = ['question', 'answer', 'category'];
    let options = [
      {value:1, label: 'General'},
      {value:2, label: 'Complex'}
    ]

    return (
      <InputForm actionLabel="Add New FAQ" fields={fields} options={options} />
    )
  }
  
  return (
    <div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Add New FAQ' modalContent={addFaqForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.agencies.tableData.headings} rows={data.agencies.tableData.rows} />
      </div>
    </div>
  )
}

export default Faqs