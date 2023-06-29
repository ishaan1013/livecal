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
import { cn } from "@/lib/utils";

export default function Item({
  path,
  id,
  text,
  label,
  itemId,
  check,
  editLock,
  setEditLock,
  selected,
}: {
  path: string;
  id: string;
  text: string;
  label: Label;
  itemId: string;
  check: boolean;
  editLock: boolean;
  setEditLock: (editLock: boolean) => void;
  selected: string[] | null;
}) {
  let [isPending, startTransition] = useTransition();

  const setSelected = useStore((state) => state.setSelected);

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

  useEffect(() => {
    if (!editing) {
      setValue(text);
    }
  }, [text]);

  const pendingClass = isPending
    ? "opacity-30 duration-200 pointer-events-none cursor-progress"
    : "opacity-100 duration-200";
  const selectedClass = selected
    ? "ring-2 ring-offset-2 " +
      (selected[1] === "RED"
        ? "ring-red-500/70 ring-offset-muted/70"
        : selected[1] === "ORANGE"
        ? "ring-orange-500/70 ring-offset-muted/70"
        : selected[1] === "YELLOW"
        ? "ring-yellow-500/70 ring-offset-muted/70"
        : selected[1] === "GREEN"
        ? "ring-green-500/70 ring-offset-muted/70"
        : selected[1] === "BLUE"
        ? "ring-blue-500/70 ring-offset-muted/70"
        : selected[1] === "PURPLE"
        ? "ring-purple-500/70 ring-offset-muted/70"
        : "ring-pink-500/70 ring-offset-muted/70")
    : "";
  const cardClass = cn(pendingClass, selectedClass);

  const nameClass = selected
    ? "py-1 px-2 opacity-100 -top-4 rounded text-white font-medium text-xs left-2 absolute " +
      (selected[1] === "RED"
        ? "bg-red-600"
        : selected[1] === "ORANGE"
        ? "bg-orange-600"
        : selected[1] === "YELLOW"
        ? "bg-yellow-600"
        : selected[1] === "GREEN"
        ? "bg-green-600"
        : selected[1] === "BLUE"
        ? "bg-blue-600"
        : selected[1] === "PURPLE"
        ? "bg-purple-600"
        : "bg-pink-600")
    : "duration-200 opacity-0 py-1 px-2 -top-4 rounded left-2 absolute";

  // const [labelValue, setLabelValue] = useState<Label>(label);

  const handleEdit = () => {
    const newState = !editing;

    if (newState) {
      setOldValue(value);
      setEditLock(true);
      setSelected(id);
    } else {
      setEditLock(false);
      setSelected("");
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
    const newState = !check;

    checkTaskZ(itemId, newState);

    startTransition(() => checkTask(itemId, newState));
    // setChecked((prev) => !prev);
  };

  const onLabelChange = (label: Label) => {
    relabelTaskZ(itemId, label);

    startTransition(() => relabelTask(itemId, label));

    // setLabelValue(label);
  };

  return (
    <Card className={cardClass}>
      <CardContent className="flex items-center relative justify-between p-2">
        <div className={nameClass}>{selected ? selected[0] : null}</div>
        <div className="flex items-center xs:space-x-3 space-x-1.5 pl-1.5">
          <Checkbox checked={check} onCheckedChange={onCheckedChange} />
          <input
            ref={valueRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!editing}
            style={{
              textDecorationLine: check ? "line-through" : "none",
              borderBottomColor: editing ? "#555555" : "transparent",
            }}
            className="bg-transparent sm:text-base text-sm sm:w-[200px] xs:w-[120px] w-[80px] text-ellipsis whitespace-nowrap overflow-hidden py-[1px] border-y-2 border-transparent outline-none"
          />
        </div>
        <div className="flex items-center xs:space-x-2 space-x-1">
          {/* <div>{JSON.stringify(selected)}</div> */}
          <Button
            onClick={handleEdit}
            size={"sm"}
            className="px-2"
            disabled={
              check || (!editing && editLock) || selected ? true : false
            }
            variant={"secondary"}
          >
            {editing ? (
              <Check className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
          </Button>
          <Select disabled={check} value={label} onValueChange={onLabelChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RED">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-red-500" />
              </SelectItem>
              <SelectItem value="ORANGE">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-orange-500" />
              </SelectItem>
              <SelectItem value="YELLOW">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-yellow-500" />
              </SelectItem>
              <SelectItem value="GREEN">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-green-500" />
              </SelectItem>
              <SelectItem value="BLUE">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-blue-500" />
              </SelectItem>
              <SelectItem value="PURPLE">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-purple-500" />
              </SelectItem>
              <SelectItem value="PINK">
                <div className="sm:w-6 sm:h-4 w-4 h-3 rounded-full bg-pink-500" />
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
