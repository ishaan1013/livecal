"use client";

import { useEffect, useRef, useState, useTransition } from "react";

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
import { Label } from "@prisma/client";
import { deleteTask, updateTask } from "@/lib/actions";

export default function Item({
  path,
  text,
  label,
  itemId,
}: {
  path: string;
  text: string;
  label: Label;
  itemId: string;
}) {
  let [isPending, startTransition] = useTransition();

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);
  const [oldValue, setOldValue] = useState(text);

  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (valueRef.current && editing) {
      valueRef.current.focus();
    }
  }, [editing]);

  const [checked, setChecked] = useState(false);
  const onCheckedChange = () => setChecked((prev) => !prev);
  const cardClass = isPending
    ? "opacity-30 duration-200 pointer-events-none cursor-progress"
    : checked
    ? "opacity-50 duration-200"
    : "opacity-100 duration-200";

  const [labelValue, setLabelValue] = useState<Label>(label);

  const onLabelChange = (label: Label) => {
    setLabelValue(label);
  };

  const handleEdit = () => {
    const newEditing = !editing;

    if (newEditing) {
      setOldValue(value);
    } else {
      if (value && value.length !== 0 && value !== oldValue) {
        startTransition(() => updateTask(itemId, value));
      } else {
        setValue(oldValue);
      }
    }
    setEditing(newEditing);
  };

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
            onClick={handleEdit}
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
          <Select value={labelValue} onValueChange={onLabelChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RED">
                <div className="w-6 h-4 rounded-full bg-red-500" />
              </SelectItem>
              <SelectItem value="ORANGE">
                <div className="w-6 h-4 rounded-full bg-orange-500" />
              </SelectItem>
              <SelectItem value="YELLOW">
                <div className="w-6 h-4 rounded-full bg-yellow-500" />
              </SelectItem>
              <SelectItem value="GREEN">
                <div className="w-6 h-4 rounded-full bg-green-500" />
              </SelectItem>
              <SelectItem value="BLUE">
                <div className="w-6 h-4 rounded-full bg-blue-500" />
              </SelectItem>
              <SelectItem value="PURPLE">
                <div className="w-6 h-4 rounded-full bg-purple-500" />
              </SelectItem>
              <SelectItem value="PINK">
                <div className="w-6 h-4 rounded-full bg-pink-500" />
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => {
              setValue("Deleting...");
              startTransition(() => deleteTask(path, itemId));
            }}
            size={"sm"}
            className="w-9 px-2"
            variant={"destructive"}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
