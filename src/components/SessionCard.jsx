import Button from "./Buttons";
import Icon from "./Icon";
import StatusBadge from "./StatusBadge";

export default function SessionCard({
  doctor,
  specialty,
  date,
  time,
  price,
  status = "",
  mode = "upcoming",
  onReschedule,
  onCancel,
  onCompletePayment,
  onBookAgain,
}) {
  const isPast = mode === "past";
  const norm = (status || "").toLowerCase();

  // badge
  let badge = null;
  if (isPast) {
    if (norm.includes("completed"))
      badge = <StatusBadge kind="completed">Completed</StatusBadge>;
    else if (norm.includes("miss"))
      badge = <StatusBadge kind="missed">Missed Session</StatusBadge>;
  } else {
    badge = norm.includes("payment") ? (
      <StatusBadge kind="payment">Payment Pending</StatusBadge>
    ) : (
      <StatusBadge kind="confirmed">Confirmed</StatusBadge>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#2D5F5D] items-start px-4 py-3 w-[500px]">
      {/* top */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/80?u=${doctor}`}
            alt={`${doctor} avatar`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-[#3E3E3E] text-[15px] leading-5">
              {doctor}
            </p>
            <p className="text-[13px] leading-4 text-gray-500">{specialty}</p>
          </div>
        </div>
        <div>{badge}</div>
      </div>

      {/* meta */}
      <div className="mt-3 flex flex-col gap-2 text-[13px] leading-5 text-gray-700 font-medium">
        <div className="flex items-center gap-1.5">
          <Icon name="calendar" className="w-4 h-4 stroke-[2]" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon name="clock" className="w-4 h-4 stroke-[2]" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon name="money" className="w-4 h-4 stroke-[2]" />
          <span>${price}</span>
        </div>
      </div>

      {/* actions */}
      <div className="mt-3 flex items-center gap-3">
        {isPast ? (
          <Button
            className="w-full px-12 md:px-20 text-[#1F3A57] border"
            onClick={onBookAgain}
          >
            Book Again
          </Button>
        ) : norm.includes("payment") ? (
          <Button
            className="w-full px-12 md:px-20 bg-[#2D5F5D] text-white"
            onClick={onCompletePayment}
          >
            Complete Payment
          </Button>
        ) : (
          <>
            <Button
              className="bg-[#2D5F5D] text-white px-12 md:px-20"
              onClick={onReschedule}
            >
              Reschedule
            </Button>
            <Button
              className="px-12 md:px-20 text-red-600 border border-red-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
}