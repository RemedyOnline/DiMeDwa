import { Calendar, ChartBar, ChartBarIcon, Goal, Settings } from "lucide-react";
import guy1 from "../../../assets/img/guy1.png";

const Events = [
  {
    id: "1",
    day: "9",
    month: "Jan",
    title: "React Ghana",
    details: "React Ghana New Year Meetup",
  },
  {
    id: "2",
    day: "14",
    month: "Feb",
    title: "Valentine's Day",
    details: "International Valentines Day Celebration...",
  },
  {
    id: "3",
    day: "6",
    month: "Mar",
    title: "Independence Celebration",
    details: "59th Independence Celebration",
  },
  {
    id: "1",
    day: "17",
    month: "Apr",
    title: "Founder's Day",
    details: "National Founder's Day Celebration",
  },
];

const UserEvent = () => {
  return (
    <div className="h-full w-full md:flex md:justify-start lg:flex-col">
      <div className="">
        <div className="p-2">
          <div className="flex h-full w-full items-center gap-2 rounded-lg bg-white p-3">
            <img
              src={guy1}
              alt="userImage"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <p className="w-full rounded-lg text-base font-semibold lg:text-lg">
                John Doe
              </p>
              <p className="w-full text-sm lg:text-base">Vendor</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <section className="h-full w-full space-y-2 rounded-lg bg-white px-2 py-4">
            <h3 className="p-0 font-mono text-xl font-semibold">Events</h3>
            {Events.map((event) => (
              <div
                key={event.id}
                className="bg-bgColor flex w-full gap-3 rounded-lg p-2"
              >
                <p className="flex h-fit w-1/6 flex-col items-center rounded-md border border-hoverBG border-opacity-50 p-1 text-center font-mono font-semibold">
                  <span className="">
                    {event.day}
                    <sup>th</sup>
                  </span>
                  <span>{event.month}</span>
                </p>
                <div className="bg-fuchsia-200">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-wrap text-sm text-hoverBG">
                    {event.details}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="p-2">
          <div className="h-full w-full space-y-2 rounded-lg bg-white px-2 py-4">
            <h3 className="p-0 font-mono text-xl font-semibold">Shortcuts</h3>
            <div className="gap-2 space-y-3 rounded-lg">
              <p className="bg-bgColor flex gap-5 rounded-lg p-2">
                <Goal />
                <span className="text-center font-medium">Goals</span>
              </p>
              <p className="bg-bgColor flex gap-5 rounded-lg p-2">
                <Calendar />
                <span className="text-center font-medium">Plans</span>
              </p>
              <p className="bg-bgColor flex gap-5 rounded-lg p-2">
                <ChartBarIcon />
                <span className="text-center font-medium">Stat</span>
              </p>
              <p className="bg-bgColor flex gap-5 rounded-lg p-2">
                <Settings />
                <span className="text-center font-medium">Settings</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEvent;
