import { cn } from "../utils/cn";

export default function Tabs({ tabs, value, onChange, fullWidth = false }) {
  return (
    <div
      role="tablist"
      aria-label="Sections"
      className={cn(
        "inline-flex items-center rounded-full bg-gray-400 p-1",
        fullWidth && "w-full"
      )}
    >
      {tabs.map((tab) => {
        const active = value === tab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab)}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
              fullWidth && "flex-1",
              active
                ? "bg-white text-black shadow"
                : "bg-transparent text-[#3E3E3E] hover:bg-white/40"
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}