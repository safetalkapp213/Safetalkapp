import Button from "./Buttons";
import { cn } from "../utils/cn";

function Field({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-[12px] leading-4 text-gray-500">{label}</p>
      <p className="text-[14px] leading-5 text-[#3E3E3E] font-medium">
        {value ?? "—"}
      </p>
    </div>
  );
}

export default function ProfileSettings({
  profile,
  onEditProfile,
  onChangePassword,
  cardClassName,
}) {
  const name = profile?.name ?? "—";
  const email = profile?.email ?? "—";
  const memberSince = profile?.memberSince ?? "—";
  const avatar = profile?.avatar;

  return (
    <section className="mt-5">
      <div
        className={cn(
          "w-full max-w-[1100px]",
          "rounded-2xl border border-[#2D5F5D] bg-white",
          "p-5 md:p-6 lg:p-7",
          "space-y-6",
          cardClassName
        )}
      >
        {/* title */}
        <h3 className="text-[#1F3A57] font-semibold text-[16px] leading-6">
          Profile Settings
        </h3>

        {/* row 1: avatar + identity */}
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-[#E6EEF0] ring-1 ring-gray-200 flex items-center justify-center shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-[#1F3A57] text-base font-semibold">👤</span>
            )}
          </div>
          <div className="mt-1">
            <p className="font-semibold text-[#3E3E3E]">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>

        {/* rows 2–4: each field on its own line */}
        <div className="space-y-5">
          <Field label="Full Name" value={name} />
          <Field label="Email Address" value={email} />
          <Field label="Member Since" value={memberSince} />
        </div>

        {/* rows 5–6: full-width outline buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full h-10 rounded-md border-gray-300 text-[#1F3A57] bg-white hover:bg-gray-100 hover:!text-[#1F3A57] justify-center"
            onClick={onEditProfile}
          >
            Edit Profile
          </Button>
          <Button
            variant="outline"
            className="w-full h-10 rounded-md border-gray-300 text-[#1F3A57] bg-white hover:bg-gray-100 hover:!text-[#1F3A57] justify-center"
            onClick={onChangePassword}
          >
            Change Password
          </Button>
        </div>
      </div>
    </section>
  );
}