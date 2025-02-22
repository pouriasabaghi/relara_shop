import React from "react";
import { PiPencilSimple, PiTrash } from "react-icons/pi";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Addresses() {
  const addresses = [
    {
      id: 1,
      name: "Ali Rezaei",
      phone: "+98 912 345 6789",
      postalcode: "12345678",
      address: "Tehran, Pasdaran Street, Building 25, Apt 12",
    },
    {
      id: 2,
      name: "Sara Ahmadi",
      phone: "+98 935 678 1234",
      postalcode: "12345678",
      address: "Shiraz, Zand Street, No. 45, Floor 3",
    },
    {
      id: 3,
      name: "Sara Ahmadi",
      phone: "+98 935 678 1234",
      postalcode: "12345678",
      address: "Shiraz, Zand Street, No. 45, Floor 3",
    },
    {
      id: 4,
      name: "Sara Ahmadi",
      phone: "+98 935 678 1234",
      postalcode: "12345678",
      address: "Shiraz, Zand Street, No. 45, Floor 3",
    },
    {
      id: 5,
      name: "Sara Ahmadi",
      phone: "+98 935 678 1234",
      postalcode: "12345678",
      address: "Shiraz, Zand Street, No. 45, Floor 3",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center md:mb-2 mb-4">
        <p className="text-2xl font-bold">My Addresses</p>
        <button className="hover:text-customPrimary transition">
          <IoAddCircleOutline size={25}/>
        </button>
      </div>
      <div className="md:p-3">
        {addresses.length === 0 ? (
          <p className="text-lg text-gray-500">No addresses added yet.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {addresses.map((address) => (
              <li
                key={address.id}
                className="relative rounded-sm border border-gray-200 bg-white p-3"
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-customPrimary">
                    {address.name}
                  </h3>
                  <p className="text-sm text-gray-600">{address.phone}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    {address.postalcode}
                  </p>
                  <p className="text-sm text-gray-700">{address.address}</p>
                </div>

                <div className="absolute right-4 top-4">
                  <div className="flex flex-col gap-2">
                    <button className="text-lg transition hover:text-red-500">
                      <PiTrash />
                    </button>
                    <button className="text-lg transition hover:text-customPrimary">
                      <PiPencilSimple />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
