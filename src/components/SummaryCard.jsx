import Icon from "./Icon";

export default function SummaryCard({ title, value, icon = "calendar" }) {
  return (
    <div className="rounded-2xl border border-[#2D5F5D] bg-white p-4 h-[90px] text-[#2D5F5D] flex flex-col justify-between w-full max-w-[330px]">
      <p className="text-[14px] leading-5 font-medium">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-[24px] leading-7 font-bold">{value}</p>
        <div className="h-10 w-10 rounded-lg bg-[#2D5F5D]/10 flex items-center justify-center">
          <Icon name={icon} className="h-5 w-5 stroke-[2.5]" />
        </div>
      </div>
    </div>
  );
}
