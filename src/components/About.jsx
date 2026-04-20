import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-[#49535B] font-bold text-center">
        About Medixa
      </h1>
      <h1 className="text-lg text-[#003265] mt-8 font-semibold text-left ">
        What is Medixa?
      </h1>
      <p className="py-4 text-left text-[#49535B]">
        Medixa is a simple platform to help you understand medicines better.
      </p>
      <p className="py-1 text-left text-[#49535B]">
        You can search medicines, compare options, check side effects, and
        explore alternatives — all in one place. <br />
        <br />
        The goal is to make medicine-related information clear, accessible, and
        easy to understand for everyone.
      </p>
      <h1 className="text-lg text-[#003265] mt-8 font-semibold text-left ">
        What You Can Do
      </h1>
      <ul className="list-disc ml-8 text-left text-[#49535B] flex flex-col gap-2 mt-4 ">
        <li>Search medicines by name or condition</li>
        <li>Compare medicines by composition, price, and side effects</li>
        <li>View clear and structured medicine information</li>
        <li>Find alternative medicines</li>
        <li>Browse by common categories like fever, pain relief, cold, etc.</li>
      </ul>
      <h1 className="text-lg text-[#003265] mt-8 font-semibold text-left ">
        Why Medixa
      </h1>
      <p className="pt-4 text-left text-[#49535B]">
        Finding the right medicine information can be confusing, especially when
        there are multiple options.
        <br />
        <br />
        Medixa focuses on simplicity for Indian users by providing:
      </p>
      <ul className="list-disc ml-8 text-left text-[#49535B] flex flex-col gap-2 mt-4">
        <li>familiar medicine names</li>
        <li>relevant categories</li>
        <li>easy-to-read details</li>
      </ul>
      <p className="py-4 text-left text-[#49535B]">
        No unnecessary complexity — just clear information when you need it.
      </p>
      <h1 className="text-lg text-[#003265] mt-8 font-semibold text-left ">
        Important
      </h1>
      <p className="py-4 text-left text-[#49535B]">
        Medixa is <span className="font-bold ">not an online pharmacy</span> and
        does not sell medicines.
        <br />
        <br />
        All information is for educational purposes only and should not replace
        professional medical advice. <br />
        <br /> Always consult a doctor before taking any medicine.
      </p>
      <h1 className="text-lg text-[#003265] mt-8 font-semibold text-left ">
        About the Developer
      </h1>
      <p className="py-4 text-left text-[#49535B]">
        Medixa is built by{" "}
        <a
          href="https://kasimsaifi.in"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-[#49535B] text-[#49535B] hover:text-[#003265] transition-colors duration-300"
        >
          Kasim Saifi
        </a>
        , a full stack developer focused on building real-world products and
        solving practical problems. <br />
        <br /> This project is part of a broader effort to create simple, useful
        tools that solve real user problems.
      </p>
      <h1 className="text-lg lg:text-xl text-[#003265] mt-16 font-extrabold text-center ">
        Better information leads to better decisions.
      </h1>
      <h1 className="text-lg lg:text-xl text-[#003265] mt-1 font-extrabold text-center ">
        Medixa helps you get there.
      </h1>
    </div>
  );
};

export default About;
