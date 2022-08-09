import React from "react";
import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center h-screen text-white">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-8xl">
          OOPS<span className="text-yellow-500">!</span>
        </h1>
        <h3>
          This website uses an API that is not available in your country.{" "}
          <span className="underline underline-offset-4">
            Please use an VPN
          </span>{" "}
          and click button below
        </h3>
        <button
          className="bg-primary px-3 py-2 rounded-sm"
          onClick={() => navigate(0)}
        >
          Refresh
        </button>
      </div>
    </section>
  );
}
