/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateTechnicianStatusMutation } from "@/redux/api/shopOwnerDashboardApi";
import { Ban, CheckCircle, Trash2 } from "lucide-react";
import { toast } from "sonner";

const ActionCell = ({ id, status }: { id: string; status: any }) => {
  const [updateStatus, { isLoading }] = useUpdateTechnicianStatusMutation();

  const handleStatusChange = async (newStatus: any) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
      toast.success("Status updated successfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update status.");
      console.error("Failed to update status:", err);
    }
  };

  if (status === "ACTIVE") {
    return (
      <button
        disabled={isLoading}
        onClick={() => handleStatusChange("SUSPENDED")}
        className="text-red-500 hover:text-red-600 transition-colors disabled:opacity-50"
      >
        <Trash2 size={18} />
      </button>
    );
  }

  if (status === "INVITED") {
    return (
      <button
        disabled={isLoading}
        onClick={() => handleStatusChange("BLOCKED")}
        className="text-yellow-500 hover:text-yellow-600 transition-colors disabled:opacity-50"
      >
        <Ban size={18} />
      </button>
    );
  }

  if (status === "SUSPENDED") {
    return (
      <button
        disabled={isLoading}
        onClick={() => handleStatusChange("ACTIVE")}
        className="text-green-500 hover:text-green-600 transition-colors disabled:opacity-50"
      >
        <CheckCircle size={18} />
      </button>
    );
  }

  // BLOCKED / INACTIVE — no action
  return null;
};

export default ActionCell;
