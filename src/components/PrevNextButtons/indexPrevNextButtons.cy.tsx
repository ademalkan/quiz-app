import React from "react";
import PrevNextButtons from "./index";

describe("<PrevNextButtons />", () => {
  beforeEach(() => {
    cy.mount(<PrevNextButtons />);
  });

  it("will be prev next buttons classes", () => {
    cy.get("div[class='mt-3 w-full  flex items-center justify-between']");
  });

  it("will be handle prev next buttons", () => {
    cy.get("div[class='mt-3 w-full  flex items-center justify-between'] button")
      .eq(0)
      .click();
    cy.get("div[class='mt-3 w-full  flex items-center justify-between'] button")
      .eq(1)
      .click();
  });
  it("will be buttons style check", () => {
    cy.get("div[class='mt-3 w-full  flex items-center justify-between'] button")
      .eq(0)
      .should(
        "have.class",
        "bg-[#EDF2F4] p-3 rounded-md min-w-[60px] md:min-w-[140px] flex items-center gap-1 font-semibold"
      );
    cy.get("div[class='mt-3 w-full  flex items-center justify-between'] button")
      .eq(1)
      .should(
        "have.class",
        "bg-[#EDF2F4] p-3 rounded-md min-w-[60px] md:min-w-[140px] flex items-center gap-1 font-semibold"
      );
  });
});
