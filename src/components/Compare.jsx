"use client";
import React from "react";
import CompareTable from "./CompareTable";
import { Field } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Addi, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

const Compare = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl/tight font-bold text-[#003265] tracking-tight sm:text-4xl/tight lg:text-7xl/tight">
          Compare Medicines
        </h1>
        <p className="mb-16 text-[#4A5167] text-xl/8 ">
          Compare medicines side by side to understand differences in <br />
          composition, price, and potential side effects.
        </p>
      </div>
      <Field className="mb-16 mx-auto w-[95%] lg:max-w-2xl">
        <InputGroup className="h-18 lg:h-22 rounded-full w-2xl shadow-lg text-3xl border border-[#49535B] ">
          <InputGroupInput
            id="inline-start-input"
            placeholder="Add medicine to compare"
            className="text-2xl h-16 pl-8"
            style={{ fontSize: "18px" }}
          />
          <InputGroupAddon align="inline-start" className="pl-8 pr-4 ">
            <PlusCircle className="text-muted-foreground w-8 h-8" size={32} />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <div className="">
        <CompareTable />
      </div>
    </div>
  );
};

export default Compare;
