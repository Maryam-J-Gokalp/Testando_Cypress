///<reference types="cypress" />

describe("Locators",()=>{

    beforeEach(()=> {

        cy.visit("/elements")  //localhost sonuna end point sayfasını yazarız

    })

    it("locating elements with get",()=> {
        
        //get all of the elements by tag name
        //but its not good way because its not specific 
        //14 tane button döndürüyor.
        //specific butonu döndüren element lazım
        cy.get("button")

        //get element by classname
        
        cy.get(".btn-with-class")

        //get all elements with specific classes

        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")


        cy.get("[class='Elements-btn btn-with-class']")

        //get all elements by id

        cy.get("[id='btn-with-id']")
        cy.get("#btn-with-id")


        //get all elements by specific attribute

        cy.get("[type='submit']")

        //get all elements by tag name and class

        cy.get("button.Elements-btn")


        //get all elements by tagname and by id

        cy.get("button.Elements-btn#btn-with-id")

        //get all elements by tagname and class and type attribute

        cy.get("button.Elements-btn[type='submit']")

        //get all elements with specific data test id

        cy.get("[data-cy='btn-id-1']")

        //we can call on commands.js under the support folder like findBy() page object model style

        cy.getByTestId("btn-id-1")
    

    })

    it("locating element with contains",()=> {

        // get elements by text
        cy.contains("Unique Text")

        //get element by text but text is not unique (just matches first element !!!!!)
        cy.contains("Not Unique Text")

        // get elements with selector
        cy.contains("[type='submit']","Not Unique Text")

        //get elements inside the form tags
        cy.contains("form","Not Unique Text")

        cy.get("[type='submit']").contains("Not Unique Text")

    })

    it("locating element with find", ()=> {

        cy.get("#form-1").find(".btn-1")

        cy.get("#form-1").find(".btn-2")

    })

})