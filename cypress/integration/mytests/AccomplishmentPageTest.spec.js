///<reference types="cypress" />

describe("Accomplishment Dashboard",()=>{

    beforeEach(()=>{

        cy.visit("/accomplishments")

    })


    it("should showcase error if information is missing",()=>{


        cy.get("[class='Accomplishment-input']").type("My basketball accomplishment\n")
        cy.get("[data-cy='accomplishment-input']").type("Ten threes in a row")

        cy.get("[class='Accomplishment-btn']").click().should("be.visible","[class='Accomplishment-error-container']")
    })



    it("should display validation componenet if all information is input",()=>{


        cy.get("[class='Accomplishment-input']").type("My basketball accomplishment\n")
        cy.get("[data-cy='accomplishment-input']").type("Ten threes in a row")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.get("[class='Accomplishment-btn']").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")


    })

})