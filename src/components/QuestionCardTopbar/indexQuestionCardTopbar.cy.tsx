import React from "react";
import QuestionCardTopbar from "./index";

describe("<QuestionCardTopbar />", () => {
  beforeEach(() => {
    cy.mount(<QuestionCardTopbar />);
  });

  it("will be render check classes", () => {
    cy.get("div[class='flex items-start justify-between']");
  });

  it("will be check span text", () => {
    cy.get("div span").should("have.text", "Soru: Türkçe #1");
  });

  it("will be check option buttons", () => {
    cy.get(
      "div[class='hidden md:flex'] div[class='bg-[#EDF2F4] w-12 h-12 flex items-center justify-center rounded-md hover:cursor-pointer']"
    ).should("have.length", 4);
  });
});
