"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { CopyIcon, SearchIcon } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import HeroCategories from "./HeroCategories";

const Hero = () => {
  return (
    <div className="py-10 lg:py-28 xl:py-22 bg-cover bg-center bg-no-repeat min-h-screen relative">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="mx-auto text-center [&>p]:mx-auto [&>p]:max-w-xl">
          <h1 className="text-4xl/tight font-bold text-[#003265] tracking-tight sm:text-4xl/tight lg:text-7xl/tight">
            {/* Healing begins with <span className="text-[#565E74]">clarity.</span> */}
            Know your medicines{" "}
            <span className="text-[#565E74] italic font-medium">better.</span>
            {/* Search, compare, and understand medicines. */}
          </h1>
          <p className="mt-6 text-[#4A5167] text-xl/8 ">
            Find medicines, compare options, and check side effects in one
            place.
          </p>
          <Field className="mt-16 mx-auto w-[95%] lg:max-w-2xl">
            <InputGroup className="h-18 lg:h-22 rounded-full w-2xl shadow-2xl text-3xl border border-[#49535B] ">
              <InputGroupInput
                id="inline-start-input"
                placeholder="Search medicines (e.g. Dolo 650, Crocin, fever)"
                className="text-2xl h-16 pl-8"
                style={{ fontSize: "18px" }}
              />
              <InputGroupAddon align="inline-start" className="pl-8 pr-4 ">
                <SearchIcon
                  className="text-muted-foreground w-8 h-8"
                  size={32}
                />
              </InputGroupAddon>
              <Button className="py-6 mr-3 lg:mr-6 cursor-pointer px-10 rounded-full bg-[#565E74]">
                Search
              </Button>
            </InputGroup>
          </Field>
          <HeroCategories />
        </div>
      </div>
    </div>
  );
};

export default Hero;
