import Image from "next/image";
import Link from "next/link";
import React from "react";
import jayImg from "../public/assets/TheTeam/Jay.jpg";
import kristinaImg from "../public/assets/TheTeam/Kristina.jpg";
import TeamItem from "./TeamItem";

const TheTeam = () => {
  return (
    <div id="TheTeam" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1 className=" tracking-widest uppercase text-[#1acc89]">TheTeam</h1>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TeamItem
            title="Founder & CEO"
            backgroundImg={jayImg}
            tech="React JS"
          />
          <TeamItem
            title="Co Founder"
            backgroundImg={kristinaImg}
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
