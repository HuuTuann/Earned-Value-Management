import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectWeekProps = {
  week: number;
  maxWeek: number;
  setWeek: (value: number) => void;
};

const SelectWeek = ({ week, maxWeek, setWeek }: SelectWeekProps) => {
  return (
    <div className="flex w-28 items-center gap-2">
      <Label htmlFor="week">Week</Label>
      <Select
        onValueChange={(value) => setWeek(Number(value))}
        defaultValue={String(week)}
      >
        <SelectTrigger id="week">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          {Array.from({ length: maxWeek }, (_, index) => (
            <SelectItem key={index} value={String(index + 1)}>
              {index + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWeek;
