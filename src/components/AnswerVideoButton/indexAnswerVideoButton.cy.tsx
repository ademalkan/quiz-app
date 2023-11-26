import React from "react";
import AnswerVideoButton from "./index";

describe("<AnswerVideoButton />", () => {
  beforeEach(() => {
    cy.mount(<AnswerVideoButton />);
  });

  it("will be check button contains text", () => {
    cy.get("button svg");
    cy.get("button").should("contains.text", "Çözüm Videosu");
  });
  it("will be check class names", () => {
    cy.get("button").should("have.class", "bg-[#1ABC9C] rounded-md flex items-center justify-center p-2 gap-2 text-white font-bold");
  });
});
