import React from "react";
import Badge from "./index";

describe("<Badge />", () => {
  beforeEach(() => {
    cy.mount(<Badge text="Badge Test" />);
  });

  it("will be check span contains text", () => {
    cy.get("span").should("contains.text", "Badge Test");
  });
  it("will be check class names", () => {
    cy.get("span").should(
      "have.class",
      "bg-[#2C3E50] text-white px-3 py-2 rounded-lg text-xs font-bold"
    );
  });
});
