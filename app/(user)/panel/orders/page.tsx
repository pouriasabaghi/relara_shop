import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Orders() {
  const orders = [
    { id: "1234", date: "2024-02-18", total: "$1,478.00", status: "Delivered" },
    { id: "5678", date: "2024-02-17", total: "$1,250.00", status: "Shipped" },
    { id: "5679", date: "2024-02-16", total: "$1,300.00", status: "Shipped" },
    { id: "5658", date: "2024-02-15", total: "$1,453.00", status: "Delivered" },
    { id: "5278", date: "2024-02-19", total: "$5,200.00", status: "Shipped" },
  ];

  return (
    <div>
      <p className="mb-4 md:mb-2 text-2xl font-bold">My Orders</p>
      <div className="md:p-3">
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders have been placed.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orders.map((order) => (
              <li key={order.id} className="border p-3">
                <div className="flex justify-between text-sm">
                  <p>{order.date}</p>
                  <p
                    className={cn(
                      "text-sm",
                      order.status === "Delivered"
                        ? "text-green-600"
                        : "text-yellow-600",
                    )}
                  >
                    {order.status}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-x-3 my-4 pb-3 overflow-auto">
                    <Image src={"/images/productImage.png"} alt="" className="border border-gray-200 rounded-sm" width={80} height={80}/>
                    <Image src={"/images/image.png"} alt="" className="border border-gray-200 rounded-sm" width={80} height={80}/>
                    <Image src={"/images/productImage.png"} alt="" className="border border-gray-200 rounded-sm" width={80} height={80}/>
                    <Image src={"/images/image.png"} alt="" className="border border-gray-200 rounded-sm" width={80} height={80}/>
                  </div>
                  <p className="text-right text-gray-700">Amount: <span className="text-customPrimary font-semibold">{order.total}</span></p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
