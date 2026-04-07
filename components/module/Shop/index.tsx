import ShopManagementTable from "./ShopManagementTable";

const mockShopData = [
  {
    id: "1",
    shopOwner: "Ronald Richards",
    ownerEmail: "ronald.richards@email.com",
    shopName: "Tesla Enterprise",
    plan: "Basic Shop Plan" as const,
    status: "Active" as const,
    technicianCount: "03",
    technicians: [
      {
        id: "t1",
        no: "01",
        name: "Alice Johnson",
        email: "alice.j@gmail.com",
        sessions: "16 sessions",
      },
      {
        id: "t2",
        no: "02",
        name: "Alice Johnson",
        email: "alice.j@gmail.com",
        sessions: "6 sessions",
      },
      {
        id: "t3",
        no: "03",
        name: "Alice Johnson",
        email: "alice.j@gmail.com",
        sessions: "5 sessions",
      },
    ],
  },
  {
    id: "2",
    shopOwner: "Ronald Richards",
    ownerEmail: "ronald.richards@email.com",
    shopName: "Tesla Enterprise",
    plan: "Basic Shop Plan" as const,
    status: "Active" as const,
    technicianCount: "02",
    technicians: [
      {
        id: "t4",
        no: "01",
        name: "Bob Smith",
        email: "bob.smith@gmail.com",
        sessions: "12 sessions",
      },
      {
        id: "t5",
        no: "02",
        name: "Carol Davis",
        email: "carol.davis@gmail.com",
        sessions: "8 sessions",
      },
    ],
  },
  {
    id: "3",
    shopOwner: "Ronald Richards",
    ownerEmail: "ronald.richards@email.com",
    shopName: "Tesla Enterprise",
    plan: "Basic Shop Plan" as const,
    status: "Suspended" as const,
    technicianCount: "01",
    technicians: [
      {
        id: "t6",
        no: "01",
        name: "David Wilson",
        email: "david.wilson@gmail.com",
        sessions: "4 sessions",
      },
    ],
  },
  {
    id: "4",
    shopOwner: "Ronald Richards",
    ownerEmail: "ronald.richards@email.com",
    shopName: "Tesla Enterprise",
    plan: "Professional Shop Plan" as const,
    status: "Active" as const,
    technicianCount: "05",
    technicians: [
      {
        id: "t7",
        no: "01",
        name: "Emily Brown",
        email: "emily.brown@gmail.com",
        sessions: "20 sessions",
      },
      {
        id: "t8",
        no: "02",
        name: "Frank Miller",
        email: "frank.miller@gmail.com",
        sessions: "15 sessions",
      },
      {
        id: "t9",
        no: "03",
        name: "Grace Lee",
        email: "grace.lee@gmail.com",
        sessions: "18 sessions",
      },
      {
        id: "t10",
        no: "04",
        name: "Henry Taylor",
        email: "henry.taylor@gmail.com",
        sessions: "10 sessions",
      },
      {
        id: "t11",
        no: "05",
        name: "Iris Martinez",
        email: "iris.martinez@gmail.com",
        sessions: "14 sessions",
      },
    ],
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <ShopManagementTable data={mockShopData} />
    </main>
  );
}
