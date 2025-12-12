export default function StatusBadge({ kind = "confirmed", children }) {
  const styles = {
    confirmed: "bg-green-100 text-green-700",
    payment: "bg-yellow-100 text-yellow-800",
    completed: "bg-emerald-100 text-emerald-700",
    missed: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
        styles[kind] || ""
      }`}
    >
      {children}
    </span>
  );
}