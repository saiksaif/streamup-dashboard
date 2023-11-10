import PopupModal from "../components/PopupModal";
import InputForm from "../components/InputForm";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Transactions() {
  const addNotifForm = () => {
    let fields = ['users', 'amount'];
    let users = [
      {value:1, label: 'User 1'},
      {value:2, label: 'User 2'}
    ]

    return (
      <InputForm actionLabel="Transfer" fields={fields} users={users} />
    )
  }
  
  return (
    <div>
    <div className="w-100 px-1 md:px-5 pb-0">
      <PopupModal actionLabel='Transfer' modalContent={addNotifForm()} />
    </div>
    
      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.transactions.tableData.headings} rows={data.transactions.tableData.rows} />
      </div>
    </div>
  )
}

export default Transactions