import React from "react";
import { ArrowLeft } from "@/components/icons";

const Breadcrumb = ({ title }: { title: string }): React.ReactNode => {
  return (
    <div className="flex flex-col gap-4 mb-7 mt-6">
      <div>
        <ArrowLeft />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
