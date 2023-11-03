import StatCard from "../components/StatCard"

function Dashboard() {
  const stats = [
    {
      title: "Wallet",
      stat: 12,
      image: "/svgIcons/wallet.svg"
    },
    {
      title: "Notifications",
      stat: 3,
      image: "/svgIcons/notification.svg"
    },
    {
      title: "Messages",
      stat: 4,
      image: "/svgIcons/message.svg"
    },
    {
      title: "Subscribers",
      stat: 240,
      image: "/svgIcons/subscriber.svg"
    },
    {
      title: "Administrators",
      stat: 5,
      image: "/svgIcons/administrator.svg"
    },
    {
      title: "Admins",
      stat: 2,
      image: "/svgIcons/administrator.svg"
    },
    {
      title: "Agencies",
      stat: 4,
      image: "/svgIcons/agency.svg"
    },
    {
      title: "Hosts",
      stat: 12,
      image: "/svgIcons/host.svg"
    },
    {
      title: "Agents",
      stat: 14,
      image: "/svgIcons/agent.svg"
    },
    {
      title: "Users",
      stat: 540,
      image: "/svgIcons/users.svg"
    },
    {
      title: "Blocked",
      stat: 21,
      image: "/svgIcons/blocked.svg"
    },
  ]

  return (
    <div className="w-100 flex flex-row flex-wrap gap-5">
      {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} stat={stat.stat} image={stat.image} />
        )
      )}
    </div>
  )
}

export default Dashboard