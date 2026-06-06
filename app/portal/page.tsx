import DashboardCard from "@/components/ui/dashboard-card";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>
      <p className="mt-2 text-gray-500">
        Welcome to your event management dashboard. Here you can manage your events, view registrations, and handle payments.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-gray-500 mt-6">
        <DashboardCard title="Events">
          <p className="text-3xl font-bold">0</p>
        </DashboardCard>

        <DashboardCard title="Registrations">
          <p className="text-3xl font-bold">0</p>
        </DashboardCard>

        <DashboardCard title="Revenue">
          <p className="text-3xl font-bold">$0</p>
        </DashboardCard>

        <DashboardCard title="Volunteers">
          <p className="text-3xl font-bold">0</p>
        </DashboardCard>
      </div>
    </div>
  );
}