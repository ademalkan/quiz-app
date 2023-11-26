import React from "react";
import QuestionCard from "./index";

describe("<QuestionCard />", () => {
  beforeEach(() => {
    cy.mount(<QuestionCard />);
  });

  it("will be render check classes", () => {
    cy.get(
      "div[class='w-full px-4 py-6 bg-white rounded-md shadow-sm max-h-full md:max-h-[480px] overflow-y-auto']"
    );
  });

  it("will be render check QuestionCardTopbar", () => {
    cy.get("div[class='flex items-start justify-between']");
  });
  it("will be render check Question", () => {
    cy.get("div[class='text-[#2C3E50] flex flex-col gap-6 mt-3 mb-12']");
  });
  it("will be render check Options", () => {
    cy.get("div[class='w-full']");
  });
});
