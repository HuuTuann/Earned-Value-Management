"use client";
import { useCallback, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersVertical } from "lucide-react";

type ActivityAndWeekInputProps = {
  rows: number;
  setRows: (value: number) => void;
  columns: number;
  setColumns: (value: number) => void;
};

const ActivityAndWeekInput = ({
  rows,
  setRows,
  columns,
  setColumns,
}: ActivityAndWeekInputProps) => {
  const [activity, setActivity] = useState<number>(rows);
  const [week, setWeek] = useState<number>(columns);

  const handleChange = useCallback(
    (type: "activity" | "week", value: number) => {
      if (!isNaN(value))
        if (type === "activity") {
          setActivity(value);
        } else {
          setWeek(value);
        }
    },
    [],
  );

  const handleSave = () => {
    setRows(activity);
    setColumns(week);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <SlidersVertical size={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="space-y-4">
        <h3 className="text-center text-xl font-bold">Setting</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="activity">Activity:</Label>
            <Input
              id="activity"
              value={activity}
              onChange={(e) => handleChange("activity", Number(e.target.value))}
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="week">Week:</Label>
            <Input
              id="week"
              value={week}
              onChange={(e) => handleChange("week", Number(e.target.value))}
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
          </div>
        </div>
        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ActivityAndWeekInput;
