import Navbar from "../components/Navbar";
import Button from "../components/Buttons";
import Icon from "../components/Icon";
import { bookingSummary, selectedTherapist } from "../data/mockSessions";
import booking_bg from "../assets/booking_bg.png"; 

// --------- MAIN PAGE ---------
export default function BookingConfirm() {
  const handleBack = () => {
    // later: navigate to step 2 page
    alert("Go back to previous step");
  };

  const handleConfirm = () => {
    // later: call API / navigate to success
    alert("Booking confirmed!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${booking_bg})` }}
    >
      <Navbar />

      <main className="mx-auto w-full max-w-[1200px] xl:max-w-[750px] px-3 md:px-4 lg:px-6 py-6">
        {/* Back link */}
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-2 text-m font-medium text-[[#1F3A57] hover:text-[#2D5F5D]"
        >
          <span className="text-lg">&larr;</span>
          <span>Back</span>
        </button>

        {/* Step indicator */}
        <div className="mt-4">
          <StepIndicator currentStep={3} />
        </div>

        {/* Content: big confirm card + small doctor card */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)] items-start justify-center">
          <ConfirmCard details={bookingSummary} onConfirm={handleConfirm} />
          <DoctorCard therapist={selectedTherapist} />
        </section>
      </main>
    </div>
  );
}

// --------- STEP INDICATOR (1–2–3) ---------

function StepIndicator({ currentStep }) {
  const steps = [
    { id: 1, label: "Select Date" },
    { id: 2, label: "Select Time" },
    { id: 3, label: "Confirm" },
  ];

  return (
    <ol className="flex items-center gap-8 text-sm">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const showLine = index < steps.length - 1;

        const circleClasses = [
          "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
          "bg-[#2D5F5D] border-[#2D5F5D] text-white", // teal bg, white number for ALL
        ].join(" ");

        const labelClasses = [
          "text-[#1F3A57]", // dark teal text for ALL
          isActive ? "font-semibold" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={step.id} className="flex items-center">
            <div className="flex items-center gap-3">
              <div className={circleClasses}>{step.id}</div>
              <span className={labelClasses}>{step.label}</span>
            </div>

            {showLine && (
              <div className="mx-4 hidden h-[2px] w-16 bg-[#2D5F5D] sm:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}


// --------- CONFIRM CARD (big left panel) ---------

function ConfirmCard({ details, onConfirm }) {
  const { date, time, duration, amount } = details;

  return (
    <div className="rounded-xl bg-white/95 px-6 py-6 md:px-8 md:py-7 shadow-lg backdrop-blur-sm">
      {/* Header row with icon + title */}
      <div className="flex items-center gap-3">
        <Icon name="check" className="w-5 h-5 text-[#2D5F5D] stroke-[2]" />
        <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1F3A57]">
          Confirm Your Booking
        </h2>
      </div>

      {/* Detail rows */}
      <div className="mt-6 space-y-4 text-sm md:text-[14px] text-[#3E3E3E]">
        <DetailRow label="Date" value={date} />
        <DetailRow label="Time" value={time} />
        <DetailRow label="Duration" value={duration} />
        <DetailRow label="Total Amount" value={`$ ${amount}`} highlight />
      </div>

      {/* Note box */}
      <div className="mt-6 rounded-md bg-[#D5F1EC] px-4 py-3 text-xs md:text-[12px] leading-5 text-[#3E3E3E]">
        <p className="font-semibold mb-1">Next steps:</p>
        <p>
          After confirming, you’ll receive an email with a secure payment link.
          Complete payment to finalize your booking.
        </p>
      </div>

      {/* Confirm button */}
      <div className="mt-6">
        <Button
          className="w-full h-11 rounded-lg bg-[#2D5F5D] text-white hover:opacity-95"
          onClick={onConfirm}
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}

function DetailRow({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between border-b border-[#2D5F5D] pb-3 last:border-b-0 last:pb-0">
      <span className="text-[#5F6B73]">{label}</span>
      <span
        className={
          highlight
            ? "font-semibold text-[#2D5F5D]"
            : "font-medium text-[#3E3E3E]"
        }
      >
        {value}
      </span>
    </div>
  );
}

// --------- DOCTOR CARD (right small panel) ---------

function DoctorCard({ therapist }) {
  return (
    <aside className="rounded-xl bg-white/95 px-5 py-4 shadow-md backdrop-blur-sm max-w-[400px] ml-auto">
      <div className="flex items-center gap-3">
        <img
          src={therapist.avatar}
          alt={therapist.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#1F3A57]">
            {therapist.name}
          </p>
          <p className="text-xs text-gray-500">{therapist.experience}</p>
        </div>
      </div>

      <div className="mt-3 text-xs text-[#2D5F5D] space-y-1">
        <p>
          <span className="font-semibold text-[#1F3A57]">Price:</span>{" "}
          {therapist.price}
        </p>
        <p>
          <span className="font-semibold text-[#1F3A57]">Specializations:</span>{" "}
          {therapist.specializations}
        </p>
      </div>
    </aside>
  );
}
