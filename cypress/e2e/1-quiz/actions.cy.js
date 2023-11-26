describe("Quiz Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.viewport(1440, 620);
  });

  const clickOption = (option) => {
    cy.get("input[value='" + option + "']")
      .click()
      .wait(1000);
  };

  const hoverOption = (option) => {
    cy.get("input[value='" + option + "']")
      .trigger("mouseover")
      .wait(1000)
      .trigger("mouseout");
  };

  const nextQuestion = () => {
    cy.get("button").contains("Sonraki Soru").click().wait(1000);
  };
  const prevQuestion = () => {
    cy.get("button").contains("Önceki Soru").click().wait(1000);
  };

  it("options hover effects", () => {
    hoverOption("A");
    hoverOption("B");
    hoverOption("C");
    nextQuestion();
    hoverOption("E");
    hoverOption("C");
    nextQuestion();
    hoverOption("D");
    hoverOption("C");
  });

  it("first question not see prev button", () => {
    cy.get("button").contains("Önceki Soru").should("not.exist").wait(1500);
  });
  it("last question not see next button", () => {
    nextQuestion();
    nextQuestion();
    nextQuestion();
    nextQuestion();
    nextQuestion();
    nextQuestion();
    nextQuestion();
    nextQuestion();
    nextQuestion();
    cy.get("button").contains("Sonraki Soru").should("not.exist").wait(1500);
  });

  it("solve all questions and after click see answers", () => {
    clickOption("A");
    nextQuestion();
    clickOption("B");
    nextQuestion();
    clickOption("C");
    nextQuestion();
    clickOption("D");
    nextQuestion();
    clickOption("E");
    nextQuestion();
    clickOption("A");
    nextQuestion();
    clickOption("B");
    nextQuestion();
    clickOption("C");
    nextQuestion();
    clickOption("D");
    nextQuestion();
    clickOption("E");
    prevQuestion();
    clickOption("A");
    cy.get(
      "div[class='bg-[#EDF2F4] w-8/12 font-semibold flex items-center justify-between gap-2 p-3.5 rounded-md text-xs'] button"
    )
      .eq(0)
      .click()
      .wait(1500);
    prevQuestion();
    clickOption("A");
    prevQuestion();
    prevQuestion();
    clickOption("A");
    prevQuestion();
    clickOption("A");
  });

  it("completed the quiz", () => {
    cy.get("button").contains("Testi Bitir").click().wait(3000);
    cy.get("div[class='ant-modal-content'] button")
      .contains("Testi Bitir")
      .click()
      .wait(3000);
  });
});
