import React from "react";

export default function Profile() {
  return (
    <div>
      <p className="mb-4 md:mb-2 text-2xl font-bold">Profile</p>
      <form className="md:p-3">
        <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2">
          {/* first name */}
          <div>
            <label className="block pb-2 text-sm font-medium">First Name</label>
            <input
              // {...register("firstName", { required: "First name is required" })}
              className="w-full rounded-lg border p-2"
            />
            {/* {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>} */}
          </div>

          {/* last name */}
          <div>
            <label className="block pb-2 text-sm font-medium">Last Name</label>
            <input
              // {...register("lastName", { required: "Last name is required" })}
              className="w-full rounded-lg border p-2"
            />
            {/* {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>} */}
          </div>

          {/* phone number */}
          <div>
            <label className="block pb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              // {...register("phone", { required: "Phone number is required" })}
              className="w-full rounded-lg border p-2"
            />
            {/* {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>} */}
          </div>

          {/* email */}
          <div>
            <label className="block pb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              // {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              className="w-full rounded-lg border p-2"
            />
            {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
          </div>
        </div>

        <button
          type="submit"
          className="my-4 md:my-8 w-full rounded-lg bg-customPrimary py-2 text-white hover:bg-primaryDark"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
