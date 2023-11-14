import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { FaExternalLinkAlt } from "react-icons/fa";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(
        "https://iedc-backend-api.onrender.com/api/v1/newsletter",
        {
          email,
        }
      );
      setIsLoading(false);
      setEmail("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="sm:p-3  self-center flex flex-col justify-center items-center gap-7">
      <h1 className="text-center text-white text-4xl font-bold ">
        Subscribe to our Newsletter
      </h1>
      <form
        className="flex justify-center items-center gap-2"
        onSubmit={handleEmailSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={handleInput}
          className="px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Subscribe
        </button>

        {isLoading && <LoadingSpinner />}
      </form>
      <div className="flex justify-center items-center gap-4 text-white text-4xl md:mt-8">
        <h1 className="">
          Follow our WhatsApp Channel
        </h1>
        <a href="https://whatsapp.com/channel/0029VaDjzCcAInPqNjl4VJ1u" target="_blank">
          <FaExternalLinkAlt className="text-3xl font-medium"/>
        </a>
      </div>
    </div>
  );
}

export default Newsletter;
