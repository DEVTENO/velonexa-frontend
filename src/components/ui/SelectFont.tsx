import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="relative w-full h-[3.25rem] bg-inputProfileBg border border-inputProfileBorder">
        <SelectValue placeholder="Poppins" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Font</SelectLabel>
          <SelectItem value="poppins">Poppins</SelectItem>
          <SelectItem value="robota">Robota</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
