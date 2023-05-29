"use client";

// tabs css not working??
// import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "../ui/button";
import { useState } from "react";

export default function ViewSwitch() {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center">
      <Button
        onClick={() => setValue(0)}
        size="sm"
        variant={value === 0 ? "secondary" : "ghost"}
      >
        Calendar
      </Button>
      <Button
        onClick={() => setValue(1)}
        size="sm"
        variant={value === 1 ? "secondary" : "ghost"}
      >
        List
      </Button>
    </div>
  );
}
