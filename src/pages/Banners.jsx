import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Banners() {
  
  const addBannerForm = () => {
    let fields = ['title', 'description', 'thumbnail', 'category']
    let options = [    
      {value: 1, label: "Small"},
      {value: 2, label: "Big"}
    ]

    return (
      <InputForm actionLabel="Add Banner" fields={fields} options={options} />
    )
  }
  
  return (
    <div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Add Banner' modalContent={addBannerForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.banners.tableData.headings} rows={data.banners.tableData.rows} />
      </div>
    </div>
  )
}

export default Banners