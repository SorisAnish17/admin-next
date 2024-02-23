import DashboardComponent from "@/Components/dashboard";

export const metadata = {
  title: "Dashboard | Admin Dashboard",
  description:
    "An interactive and comprehensive admin dashboard that provides real-time insights and management tools for efficient administration and monitoring of various aspects of your system or application.",
};

export default async function HomeDashboard() {
  return <DashboardComponent />;
}
