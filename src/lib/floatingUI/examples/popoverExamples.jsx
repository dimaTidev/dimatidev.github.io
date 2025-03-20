import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverClose
} from "../Popover";
import "../css/popover.css";

function Uncontrolled() {
  return (
    <div className="App">
      <h1>Floating UI — Popover</h1>
      <Popover>
        <PopoverTrigger>My trigger</PopoverTrigger>
        <PopoverContent className="Popover">
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function Controlled() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <h1>Floating UI — Popover</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          My trigger
        </PopoverTrigger>
        <PopoverContent className="Popover">
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}