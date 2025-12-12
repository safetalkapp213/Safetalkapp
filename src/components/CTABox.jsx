import Buttons from "../components/Buttons";

export default function CTABox({ onClick }) {
  return (
    <div
      className="
        h-[90px] w-full max-w-[330px]
        rounded-2xl border border-[#2D5F5D] bg-[#2D5F5D]
        px-4 py-3
        grid grid-rows-[auto_1fr_auto]
      "
    >
      <p className="font-semibold text-white text-[15px] leading-5">
        Ready for your next session?
      </p>

      <div />

      <Buttons
        className="
          bg-white text-[#2D5F5D] hover:opacity-95
          h-10 w-full max-w-[280px] mx-auto
          rounded-xl
        "
        variant="primary"
        onClick={onClick}
      >
        Find a Therapist
      </Buttons>
    </div>
  );
}