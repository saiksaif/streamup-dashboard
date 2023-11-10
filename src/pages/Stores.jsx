import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import StatCard from "../components/StatCard";
import data from "../assets/data.json";

function Stores() {
  const addStoreForm = () => {
    let fields = ['title'];

    return (
      <InputForm actionLabel="Add Item" fields={fields} />
    )
  }
  
  return (
    <div>
    <div className="w-100 flex flex-col md:flex-row flex-wrap">
      {data?.agencies?.stats?.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          stat={stat.stat}
          image={stat.image}
          customNumber={3}
        />
      ))}
    </div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Add Item' modalContent={addStoreForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.advertisements.tableData.headings} rows={data.advertisements.tableData.rows} />
      </div>
    </div>
  )
}

export default Stores