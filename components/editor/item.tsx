"use client";

import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Check, Pencil, Trash } from "lucide-react";

export default function Item({ text }: { text: string }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

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
            className="px-2"
            disabled={checked}
            variant={"secondary"}
          >
            {editing ? (
              <Check className="w-4 h-4" />
            ) : (
              <Pencil className="w-4 h-4" />
            )}
          </Button>
          <Select>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  <div className="w-6 h-4 rounded-full bg-neutral-500" />
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="red">
                <div className="w-6 h-4 rounded-full bg-red-500" />
              </SelectItem>
              <SelectItem value="orange">
                <div className="w-6 h-4 rounded-full bg-orange-500" />
              </SelectItem>
              <SelectItem value="yellow">
                <div className="w-6 h-4 rounded-full bg-yellow-500" />
              </SelectItem>
              <SelectItem value="green">
                <div className="w-6 h-4 rounded-full bg-green-500" />
              </SelectItem>
              <SelectItem value="blue">
                <div className="w-6 h-4 rounded-full bg-blue-500" />
              </SelectItem>
              <SelectItem value="purple">
                <div className="w-6 h-4 rounded-full bg-purple-500" />
              </SelectItem>
              <SelectItem value="pink">
                <div className="w-6 h-4 rounded-full bg-pink-500" />
              </SelectItem>
            </SelectContent>
          </Select>
          <Button size={"sm"} className="w-9 px-2" variant={"destructive"}>
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
