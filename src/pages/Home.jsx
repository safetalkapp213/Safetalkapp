import { useState } from "react";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import Tabs from "../components/Tabs";
import SessionCard from "../components/SessionCard";
import CTABox from "../components/CTABox";
import ProfileSettings from "../components/ProfileSettings";
import { upcoming, past, profile as mockProfile } from "../data/mockSessions"; // <-- alias here
import home_bg from "../assets/home_bg.png";

export default function Home() {
  const [tab, setTab] = useState("Upcoming Sessions");

  const mode =
    tab === "Upcoming Sessions"
      ? "upcoming"
      : tab === "Past Sessions"
      ? "past"
      : "other";
  const list = mode === "upcoming" ? upcoming : mode === "past" ? past : [];

  const upcomingCount = upcoming.length;
  const completedCount = past.filter((s) =>
    /completed/i.test(s.status ?? "")
  ).length;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${home_bg})` }}
    >
      <Navbar />

      <main className="mx-auto w-full max-w-[1200px] xl:max-w-[1320px] px-3 md:px-4 lg:px-5 py-6">
        {/* Header */}
        <section className="space-y-1.5">
          <h1 className="text-[#1F3A57] font-bold text-[32px] leading-[40px] md:text-[36px] md:leading-[44px]">
            Welcome back, Ola Yin!
          </h1>
          <p className="text-[15px] md:text-[16px] leading-6 text-[#3E3E3E]/80">
            Manage your therapy sessions and profile
          </p>
        </section>

        {/* KPIs + CTA */}
        <section className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard
            title="Upcoming Sessions"
            value={upcomingCount}
            icon="calendar"
          />
          <SummaryCard
            title="Completed Sessions"
            value={completedCount}
            icon="clock"
          />
          <CTABox onClick={() => alert("Find Therapist")} />
        </section>

        {/* Tabs */}
        <section className="mt-5">
          <Tabs
            tabs={["Upcoming Sessions", "Past Sessions", "Profile Settings"]}
            value={tab}
            onChange={setTab}
          />
        </section>

        {/* Content */}
        {tab === "Profile Settings" ? (
          <ProfileSettings
            profile={mockProfile}
            onEditProfile={() => alert("Edit Profile")}
            onChangePassword={() => alert("Change Password")}
            cardClassName="max-w-[1100px] lg:p-7"
          />
        ) : (
          <section className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
            {list.map((s) => (
              <SessionCard
                key={s.id}
                {...s}
                mode={mode}
                onReschedule={() => alert(`Reschedule session ${s.id}`)}
                onCancel={() =>
                  confirm("Are you sure you want to cancel this session?") &&
                  alert(`Cancel ${s.id}`)
                }
                onCompletePayment={() =>
                  alert(`Complete payment for session ${s.id}`)
                }
                onBookAgain={() => alert(`Book again with ${s.doctor}`)}
              />
            ))}
          </section>
        )}
      </main>

      <footer className="py-6 text-center text-xs font-medium text-gray-400">
        © {new Date().getFullYear()} Safetalk
      </footer>
    </div>
  );
}
