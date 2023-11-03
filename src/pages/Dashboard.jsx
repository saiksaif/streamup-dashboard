import StatCard from "../components/StatCard"
import DataTable from "../components/DataTable"

function Dashboard() {
  const stats = [
    {
      title: "Wallet",
      stat: 12,
      image: "/svgIcons/wallet2.svg"
    },
    {
      title: "Notifications",
      stat: 3,
      image: "/svgIcons/notification2.svg"
    },
    {
      title: "Messages",
      stat: 4,
      image: "/svgIcons/message2.svg"
    },
    {
      title: "Subscribers",
      stat: 240,
      image: "/svgIcons/subscriber2.svg"
    },
    {
      title: "Administrators",
      stat: 5,
      image: "/svgIcons/administrator2.svg"
    },
    {
      title: "Admins",
      stat: 2,
      image: "/svgIcons/administrator2.svg"
    },
    {
      title: "Agencies",
      stat: 4,
      image: "/svgIcons/agency2.svg"
    },
    {
      title: "Hosts",
      stat: 12,
      image: "/svgIcons/host2.svg"
    },
    {
      title: "Agents",
      stat: 14,
      image: "/svgIcons/agent2.svg"
    },
    {
      title: "Users",
      stat: 540,
      image: "/svgIcons/users2.svg"
    },
    {
      title: "Blocked",
      stat: 21,
      image: "/svgIcons/blocked2.svg"
    },
  ]

  return (
    <div>
      <div className="w-100 flex flex-col md:flex-row flex-wrap">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} stat={stat.stat} image={stat.image} />
          )
          )}
      </div>
      <div className="w-100 px-5 pb-5">
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard