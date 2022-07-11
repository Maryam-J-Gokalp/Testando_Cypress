///<reference types="cypress" />

describe("habit dashboard",()=>{

    beforeEach(()=>{

        cy.visit("/habits")

    })


    it("should display modal when add button is clicked",()=>{

        cy.get("#habit-add-btn").click()
        cy.contains("Add a new habit").should("be.visible")  // Add a new habit be visible assertions

        //cy.contains("button","Add")  //we can also called like this

    })


    it("should display habit card when new habbit is added",()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Hello World")
        cy.contains("Save Changes").click()
        cy.contains("Hello World")
                .should("be.visible")
                .should("have.class","HabitCard__habit-container")


    })

    it("should toggle icon when habit card is clicked",()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Hello World")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg']").should("be.visible")
        cy.contains("Hello World").click()
        cy.get("[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']").should("be.visible")






    })

   






})