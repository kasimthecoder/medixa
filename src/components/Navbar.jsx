"use client";
import { Button } from "@/components/ui/button";

import { Menu, SearchIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Field } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { div } from "motion/react-client";

const navItems = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Categories",
    href: "#",
  },
  {
    title: "Compare",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-[#49535B]">
      <nav className=" mx-auto text-[#49535B] flex h-18 w-full max-w-7xl items-center gap-12 px-6 sm:px-4 ">
        <a
          href="/"
          className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 flex-1 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7"
        >
          Medixa
        </a>
        <div className="hidden gap-3 lg:inline-flex">
          {navItems.map((item) => (
            <Button key={item.title} asChild variant={"ghost"}>
              <a href={item.href}>{item.title}</a>
            </Button>
          ))}
        </div>
        <div className="hidden flex-1 justify-end gap-2 lg:inline-flex">
          <InputGroup className="rounded-full shadow-sm w-48 border border-[#49535B]">
            <InputGroupInput
              id="inline-start-input"
              placeholder="Search medicines..."
              className="h-11 text-sm pl-3"
              style={{ fontSize: "14px" }}
            />
            <InputGroupAddon align="inline-start" className="pl-2 pr-1">
              <SearchIcon className="text-muted-foreground w-4 h-4" size={16} />
            </InputGroupAddon>
            {/* <Button className="py-1 -mr-1 cursor-pointer px-3 rounded-full bg-[#565E74] text-xs h-8">
              Search
            </Button> */}
          </InputGroup>
        </div>
        <Sheet>
          <SheetTrigger asChild className="ml-auto lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open Menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[90%] max-w-sm flex-col px-6 py-6"
          >
            <SheetTitle>
              <a
                href="#"
                className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7"
              >
                Medixa
              </a>
            </SheetTitle>
            <nav className="-mx-4 my-6 flex flex-1 flex-col gap-2">
              <InputGroup className="rounded-full shadow-sm w-64 border border-[#49535B] ml-4">
                <InputGroupInput
                  id="inline-start-input"
                  placeholder="Search medicines..."
                  className="h-11 text-sm pl-3"
                  style={{ fontSize: "14px" }}
                />
                <InputGroupAddon align="inline-start" className="pl-2 pr-1">
                  <SearchIcon
                    className="text-muted-foreground w-4 h-4"
                    size={16}
                  />
                </InputGroupAddon>
                {/* <Button className="py-1 -mr-1 cursor-pointer px-3 rounded-full bg-[#565E74] text-xs h-8">
              Search
            </Button> */}
              </InputGroup>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  asChild
                  className="justify-start text-base"
                  variant={"ghost"}
                >
                  <a href={item.href}>{item.title}</a>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
