import CustomizedTabs from "../components/CustomizedTabs";
import DataTable from "../components/DataTable";
import StatCard from "../components/StatCard";
import data from "../assets/data.json";

function Users() {
  const statCards = (index) => {
    return (
      <div className="w-100 flex flex-col md:flex-row flex-wrap">
        {data?.users[index]?.data?.stats.map((user, index) => (
          <StatCard
            key={index}
            title={user?.title}
            stat={user?.stat}
            image={user?.image}
          />
        ))}
      </div>
    )
  }

  const userTable = (index) => {
    return (
      <div>
        {statCards(index)}
        <div className="w-100 px-1 md:px-5 pb-0">
          <DataTable headings={data?.users[index]?.data?.headings} rows={data?.users[index]?.data?.list} showExtra={false} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white hover:shadow-2xl shadow-lg rounded-2xl duration-300 mx-5 mb-5 w-100">
        <CustomizedTabs data={data?.users} child={userTable} />
      </div>      
    </div>
  );
}

export default Users;
