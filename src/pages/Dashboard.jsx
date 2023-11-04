import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Dashboard() {
  return (
    <div>
      <div className="w-100 flex flex-col md:flex-row flex-wrap">
        {data.dashboard.stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            stat={stat.stat}
            image={stat.image}
          />
        ))}
      </div>
      <div className="w-100 px-5 pb-5">
        <DataTable headings={data.dashboard.tableData.headings} rows={data.dashboard.tableData.rows} />
      </div>
    </div>
  );
}

export default Dashboard;
