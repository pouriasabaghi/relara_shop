import Card from "@/ui/Card";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
