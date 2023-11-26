import React from "react";
import Optic from "./index";

describe("<Optic />", () => {
  beforeEach(() => {
    cy.mount(<Optic />);
  });

  it("will be optic classes name", () => {
    cy.get("div").eq(1).get("div h3").should("have.text", "Türkçe");
  });

  it("will be check optic items", () => {
    cy.get("div")
      .eq(1)
      .get(
        "div[class='bg-[#03A9F1] bg-opacity-10 rounded-md p-2 flex items-center gap-2']"
      )
      .should("have.length", 10);
  });
});
