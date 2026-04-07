import CustomersTable from "../DashboardOverview/UserTable";
import RecentBilling from "./RecentBilling";

const AdminProfile = () => {
  const recentCompletedJobs = [
    {
      id: "1",
      parentName: "John Doe",
      parentImage: "/boy.png",
      caregiverName: "Toyota",
      caregiverImage: "/boy.png",
      date: "2023-06-01",
      incident: "Paid",
      technicians: 5,
    },
    {
      id: "2",
      parentName: "Jane Smith",
      parentImage: "/boy.png",
      caregiverName: "Honda",
      caregiverImage: "/boy.png",
      date: "2023-06-02",
      incident: "Paid",
      technicians: 3,
    },
    {
      id: "2",
      parentName: "Jane Smith",
      parentImage: "/boy.png",
      caregiverName: "Honda",
      caregiverImage: "/boy.png",
      date: "2023-06-02",
      incident: "Paid",
      technicians: 3,
    },
    {
      id: "2",
      parentName: "Jane Smith",
      parentImage: "/boy.png",
      caregiverName: "Honda",
      caregiverImage: "/boy.png",
      date: "2023-06-02",
      incident: "Paid",
      technicians: 3,
    },
  ];

  return (
    <div>
      {/* Recent User + Chart */}
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-2 ">
          <CustomersTable recentCompletedJobs={recentCompletedJobs} />
        </div>

        {/* Assessment Chart (2 column) */}
        <div className="lg:col-span-2 mt-4">
          <div className="bg-white border-0 rounded-2xl">
            <RecentBilling recentCompletedJobs={recentCompletedJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
