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
import { checkTask, deleteTask, relabelTask, updateTask } from "@/lib/actions";
import useStore from "@/lib/state";

export default function Item({
  path,
  text,
  label,
  itemId,
  check,
  editLock,
  setEditLock,
}: {
  path: string;
  text: string;
  label: Label;
  itemId: string;
  check: boolean;
  editLock: boolean;
  setEditLock: (editLock: boolean) => void;
}) {
  let [isPending, startTransition] = useTransition();

  const checkTaskZ = useStore((state) => state.checkTask);
  const renameTaskZ = useStore((state) => state.renameTask);
  const relabelTaskZ = useStore((state) => state.changeLabel);
  const deleteTaskZ = useStore((state) => state.deleteTask);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);
  const [oldValue, setOldValue] = useState(text);

  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (valueRef.current && editing) {
      valueRef.current.focus();
    }
  }, [editing]);

  const [checked, setChecked] = useState(check);

  const cardClass = isPending
    ? "opacity-30 duration-200 pointer-events-none cursor-progress"
    : "opacity-100 duration-200";

  const [labelValue, setLabelValue] = useState<Label>(label);

  const handleEdit = () => {
    const newState = !editing;

    if (newState) {
      setOldValue(value);
      setEditLock(true);
    } else {
      setEditLock(false);
      if (value && value.length !== 0 && value !== oldValue) {
        renameTaskZ(itemId, value);
        startTransition(() => updateTask(itemId, value));
      } else {
        setValue(oldValue);
      }
    }
    setEditing(newState);
  };

  const onCheckedChange = () => {
    const newState = !checked;

    checkTaskZ(itemId, newState);

    startTransition(() => checkTask(itemId, newState));
    setChecked((prev) => !prev);
  };

  const onLabelChange = (label: Label) => {
    relabelTaskZ(itemId, label);

    startTransition(() => relabelTask(itemId, label));

    setLabelValue(label);
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
            style={{
              textDecorationLine: checked ? "line-through" : "none",
              borderBottomColor: editing ? "#555555" : "transparent",
            }}
            className="bg-transparent max-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden py-[1px] border-y-2 border-transparent outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleEdit}
            size={"sm"}
            className="px-2"
            disabled={checked || (!editing && editLock)}
            variant={"secondary"}
          >
            {editing ? (
              <Check className="w-4 h-4" />
            ) : (
              <Pencil className="w-4 h-4" />
            )}
          </Button>
          <Select
            disabled={checked}
            value={labelValue}
            onValueChange={onLabelChange}
          >
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
              deleteTaskZ(itemId);
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
