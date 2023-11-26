import React from "react";
import Question from "./index";

describe("<Question />", () => {
  beforeEach(() => {
    cy.mount(<Question />);
  });

  it("will be check classes", () => {
    cy.get("div[class='text-[#2C3E50] flex flex-col gap-6 mt-3 mb-12']");
  });
  it("will be check first question content", () => {
    cy.get("div p")
      .eq(0)
      .should(
        "have.text",
        "Şair, her kelimenin altını doldurarak, şiirlerinde adeta bir ressam gibi her detayı işliyor. Her mısra bir tuval, her kelime bir fırça darbesi gibi. Bu özen, okuyucuyu adeta bir başka dünyaya taşıyor."
      );
    cy.get("div p")
      .eq(1)
      .should(
        "have.text",
        "Parçada geçen 'hava alacak boşluk bırakmamak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?"
      );
  });
});
