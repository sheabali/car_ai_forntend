"use client";

interface MetricCardProps {
  title: string;
  value?: number | string;
  bg: string;
  month?: string;
  invitations?: string;
  plan?: string;
  nextRenewal?: string;
  icon: React.ReactNode;
}

export default function MetricCard({
  title,
  value,
  bg,
  icon,
  month,
  invitations,
  plan,
  nextRenewal,
}: MetricCardProps) {
  return (
    <div className="flex items-start bg-card justify-between rounded-xl p-6">
      {/* Left: Text content */}
      <div className="space-y-1">
        <p className="text-[16px] font-medium text-[#4F5655]">{title}</p>

        <div className="flex items-center gap-4 mt-10">
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>

          {month && (
            <div className="text-sm font-medium rounded-full bg-[#e6f9f0] text-[#00C566] py-1 px-2">
              {month}
            </div>
          )}

          {invitations && (
            <div className="text-sm font-medium  bg-[#f0f5ff] text-[#1b64f6] rounded-full py-1 px-2">
              {invitations} Remaining Invitations
            </div>
          )}
        </div>

        {/* Plan Info */}
        {plan && (
          <p className="text-sm text-gray-600 font-medium mt-2">{plan}</p>
        )}

        {nextRenewal && (
          <p className="text-xl text-[#1B4697] font-semibold">
            Next renewal: {nextRenewal}
          </p>
        )}
      </div>

      {/* Right: Icon */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${bg} text-white`}
      >
        {icon}
      </div>
    </div>
  );
}
