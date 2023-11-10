import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Blogs() {
  const addBlogForm = () => {
    let fields = ['title', 'description', 'thumbnail', 'category']
    let options = [    
      {value: 1, label: "New"},
      {value: 2, label: "Old"}
    ]

    return (
      <InputForm actionLabel="Add blog" fields={fields} options={options} />
    )
  }
  
  return (
    <div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Add blog' modalContent={addBlogForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.banners.tableData.headings} rows={data.banners.tableData.rows} />
      </div>
    </div>
  )
}

export default Blogs