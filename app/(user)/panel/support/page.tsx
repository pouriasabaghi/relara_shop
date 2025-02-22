import React from "react";

export default function Support() {
  return (
    <div>
      <p className="mb-4 md:mb-2 text-2xl font-bold">Support</p>
      <form className="md:p-3">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="block pb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              // {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              className="w-full rounded-lg border p-2"
            />
            {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
          </div>

          <div>
            <label className="block pb-2 text-sm font-medium">Subject</label>
            <input
              // {...register("subject", { required: "Subject is required" })}
              className="w-full rounded-lg border p-2"
            />
            {/* {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>} */}
          </div>

          <div className="md:col-span-2">
            <label className="block pb-2 text-sm font-medium">Message</label>
            <textarea
              rows={4}
              // {...register("message", { required: "Message is required" })}
              className="w-full rounded-lg border p-2 resize-none"
            />
            {/* {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>} */}
          </div>
        </div>

        <button
          type="submit"
          className="my-4 md:my-8 w-full rounded-lg bg-customPrimary py-2 text-white hover:bg-primaryDark"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
