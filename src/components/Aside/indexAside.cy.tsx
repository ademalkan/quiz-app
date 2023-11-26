import React from "react";
import Aside from "./index";

describe("<Aside />", () => {
  beforeEach(() => {
    cy.mount(<Aside />);
  });

  it("will be check Cevapları Göster", () => {
    cy.get("aside div div p").should("have.text", "Cevapları Göster");
  });

  it("will be check button", () => {
    cy.get("aside div div button");
  });
  it("will be check Testi Bitir", () => {
    cy.get("aside div button").should("have.text", "Testi Bitir");
  });
  it("will be check classes svg", () => {
    cy.get("aside div div").eq(1).get("svg");
  });
  it("will be optic classes name", () => {
    cy.get("aside div div").eq(1).get("div h3").should("have.text", "Türkçe");
  });

  it("will be check optic items", () => {
    cy.get("aside div div")
      .eq(1)
      .get("div")
      .eq(1)
      .get(
        "div[class='bg-[#03A9F1] bg-opacity-10 rounded-md p-2 flex items-center gap-2']"
      )
      .should("have.length", 10);
  });
  it("will be check click Testi Bitir and show modal", () => {
    cy.get("aside div button").should("have.text", "Testi Bitir").eq(1).click();
  });
  it("will be check Testi Bitir modal", () => {
    cy.get("aside div button").should("have.text", "Testi Bitir").eq(1).click();
    cy.get("div").should("include.text", "Ayrılmak istediğine emin misin?");
    cy.get("div").should(
      "include.text",
      "Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin."
    );
  });
});
