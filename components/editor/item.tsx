"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Pencil, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Item() {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("test");

  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (valueRef.current && editing) {
      valueRef.current.focus();
    }
  }, [editing]);

  return (
    <Card>
      <CardContent className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <input
            ref={valueRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!editing}
            className="bg-transparent max-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden  py-[1px] border-y-2 border-transparent outline-none focus:border-b-accent-foreground"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setEditing((prev) => !prev)}
            size={"sm"}
            variant={"secondary"}
          >
            {editing ? (
              <Check className="w-4 h-4" />
            ) : (
              <Pencil className="w-4 h-4" />
            )}
          </Button>
          <Button size={"sm"} variant={"destructive"}>
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
