import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserCard = () => {
  return (
    <Card className="p-8 space-y-6  mx-auto">
      {/* User Image */}
      <div className="flex justify-start">
        <Image
          src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
          width={120}
          height={120}
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      {/* Buttons */}
      <div className="w-[30%] flex  flex-col sm:flex-row justify-start gap-4">
        <Link href="/admin/profile/edit">
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center"
          >
            <SquarePen className="w-4 h-4 mr-2" /> Edit Profile
          </Button>
        </Link>
        <Link href="/admin/profile/changepassword">
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center"
          >
            <SquarePen className="w-4 h-4 mr-2" /> Change Password
          </Button>
        </Link>
      </div>

      {/* Personal Info */}
      <div className="border rounded-2xl p-6 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600">Admin Name</h3>
            <p className="text-gray-800">Gavano</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Email Address</h3>
            <p className="text-gray-800">gavano.j@gmail.com</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
