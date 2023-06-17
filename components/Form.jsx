"use client";
import Link from "next/link";

const Form = ({ type, user, setUser, loggingIn, handleLogin }) => {
  return (
    <section>
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span>
      </h1>
      <p className="desc text-left max-w-md">
        Login to view & manage your Finances
      </p>

      <form
        onSubmit={handleLogin}
        className="
        mt-10
        w-full
        max-w-2xl
        flex
        flex-col
        gap-7
        glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Username
          </span>

          <input
            type="text"
            onChange={(e) => setUser({ username: e.target.value })}
            className="form_input"
            required
            placeholder="username"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Password
          </span>

          <input
            type="text"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form_input"
            required
            placeholder="password"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <button className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {loggingIn ? "Signing In..." : "Login"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
