"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Pencil, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Item() {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("test");

  const [checked, setChecked] = useState(false);
  const onCheckedChange = () => setChecked((prev) => !prev);
  const cardClass = checked
    ? "opacity-50 duration-200"
    : "opacity-100 duration-200";

  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (valueRef.current && editing) {
      valueRef.current.focus();
    }
  }, [editing]);

  return (
    <Card className={cardClass}>
      <CardContent className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-3 pl-1.5">
          <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
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
            disabled={checked}
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
