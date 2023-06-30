"use client";

import { HelpCircle } from "lucide-react";
import { useState } from "react";
import HelpModal from "./helpModal";

export default function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HelpModal open={open} setOpen={setOpen} />
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent text-accent-foreground"
      >
        <HelpCircle className="w-5 h-5" />
      </button>
    </>
  );
}
