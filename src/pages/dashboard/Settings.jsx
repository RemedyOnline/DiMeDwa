import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const [formData, setFormData] = useState({
    fullName: "Martin Asamoah",
    email: "martinasamoah@gmail.com",
    password: "",
    confirmPassword: "",
    notifications: true,
    theme: "light",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 bg-highlight p-4 shadow-md md:p-6"
      >
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold">Settings</h2>
          <p className="text-sm md:text-base">
            Manage your account details at ease...
          </p>
        </div>
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-base font-bold md:text-lg lg:text-xl">
              Profile
            </h2>
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </label>
              <input
                required
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
              />
            </div>
            <div className="relative flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                required
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-bold md:text-lg lg:text-xl">
              Security
            </h2>
            <div className="relative flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Current Password
                </label>
                <input
                  // required
                  type={isVisible ? "text" : "password"}
                  name="password"
                  aria-label="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  id="password"
                  className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
                />
                <button
                  type="button"
                  aria-label={isVisible ? "Hide Password" : "Show Password"}
                  aria-pressed={isVisible}
                  aria-controls="password"
                  onClick={togglePasswordVisibility}
                  className="hover: absolute right-3 top-1/2 translate-y-1 text-hoverBG hover:text-theme-color"
                >
                  {isVisible ? <Eye /> : <EyeClosed />}
                </button>
              </div>
            </div>
            <div className="relative flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  New Password
                </label>
                <input
                  // required
                  type={isVisible ? "text" : "password"}
                  name="confirmPassword"
                  aria-label="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  id="confirmPassword"
                  className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
                />
                <button
                  type="button"
                  aria-label={isVisible ? "Hide Password" : "Show Password"}
                  aria-pressed={isVisible}
                  aria-controls="password"
                  onClick={togglePasswordVisibility}
                  className="hover: absolute right-3 top-1/2 translate-y-1 text-hoverBG hover:text-theme-color"
                >
                  {isVisible ? <Eye /> : <EyeClosed />}
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-bold md:text-lg lg:text-xl">
              Preferences
            </h2>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="notifications"
                id="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
                className="h-4 w-4"
              />
              <label htmlFor="notifications" className="ml-2 text-sm">
                Enable Email Notifications
              </label>
            </div>
            <div className="relative flex flex-col gap-1">
              <label htmlFor="theme" className="text-sm font-medium">
                Theme
              </label>
              <select
                required
                className="w-full rounded-md bg-inputBG px-2 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
                value={formData.theme}
                onChange={handleInputChange}
                name="theme"
                id="theme"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </section>
        {message && (
          <div className="flex items-center justify-center rounded-md border border-green-200 bg-green-50 p-2">
            <p className="text-sm text-green-600">{message}</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center rounded-md border border-red-200 bg-red-50 p-2">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        <div className="">
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "cursor-not-allowed bg-gray-400" : "bg-theme-color hover:bg-hoverBG"} w-full rounded-lg px-2 py-2.5 text-white ring ring-inputRing transition-colors`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Settings;
