import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function News() {
  const addNewsForm = () => {
    let fields = ['title', 'description', 'thumbnail', 'category'];
    let options = [
      {value:1, label: 'General'},
      {value:2, label: 'Complex'}
    ]

    return (
      <InputForm actionLabel="Add News" fields={fields} options={options} />
    )
  }
  
  return (
    <div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Add News' modalContent={addNewsForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.banners.tableData.headings} rows={data.banners.tableData.rows} />
      </div>
    </div>
  )
}

export default News