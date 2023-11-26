import React from "react";
import Breadcrumb from "./index";

describe("<Breadcrumb />", () => {
  beforeEach(() => {
    cy.mount(<Breadcrumb title="Breadcrumb Test" />);
  });

  it("will be check svg", () => {
    cy.get("div svg");
  });
  it("will be check h1 title", () => {
    cy.get("div h1").should("have.text", "Breadcrumb Test");
  });
  it("will be check h1 title class", () => {
    cy.get("div h1").should("have.class", "text-2xl font-bold");
  });
  it("will be check class", () => {
    cy.get("div[class='flex flex-col gap-4 mb-7 mt-6']")
  });
});
