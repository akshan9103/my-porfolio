"use client";

import { useState } from 'react';

export function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); // Clear previous messages

    const formData = new FormData(event.target);
    // Using the access key you provided
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset(); // Clear the form fields after success
      } else {
        setResult("Error: Something went wrong.");
      }
    } catch (error) {
      setResult("Error: Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={onSubmit} 
      className="w-full max-w-lg bg-[#f8f9fa] border border-gray-300 rounded-lg p-8 md:p-12 flex flex-col"
    >
      <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-black mb-2">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="w-full bg-transparent border-b border-black outline-none py-2 mb-8 focus:border-gray-500 transition-colors"
      />

      <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-black mb-2">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="w-full bg-transparent border-b border-black outline-none py-2 mb-8 focus:border-gray-500 transition-colors"
      />

      <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-black mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={1}
        required
        className="w-full bg-transparent border-b border-black outline-none py-2 mb-10 focus:border-gray-500 transition-colors resize-none"
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors w-max disabled:bg-gray-400"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message Display */}
      {result && (
        <p className={`mt-4 text-sm font-medium tracking-wide ${result.includes("Error") ? "text-red-500" : "text-green-600"}`}>
          {result}
        </p>
      )}
    </form>
  );
}