/// <reference types="cypress" />
import Drawobjects from './drawing.js'


describe('Paint Clone', () => {
    let drawings
    beforeEach(() => {
        drawings = new Drawobjects()
        cy.visit('http://127.0.0.1:5500/')

    })
    it('checks if brush functionalities work as required', () => {
        cy.get('#brush').click()
        cy.get('#active-tool').should('have.text', "Brush")
        cy.get('#brush-color').click()
        cy.get('[style="background: rgb(255, 255, 255); opacity: 0; position: absolute; left: 0px; top: 0px; width: 201px; height: 127px; cursor: crosshair;"]').click()
        cy.get('#brush-slider').invoke('val', '15').trigger('change')
        cy.get('#brush-size').should('have.text', '15')
        //drawing on canvas
        drawings.drawHouse()
    })
    it('checks if erase functionalities work as required', () => {
        cy.get('#brush-color').clear()
        cy.get('#brush-color').type('AB0000')
        cy.get('#brush').click()
        drawings.drawHouse()
        cy.get('#eraser').click()
        cy.get('#active-tool').should('have.text', "Eraser")
        drawings.eraseHouse()
    })
    it('checks the change of background color', () => {
        cy.get('#bucket-color').click()
        cy.get('[style="background: rgb(255, 255, 255); opacity: 0; position: absolute; left: 0px; top: 0px; width: 201px; height: 127px; cursor: crosshair;"]').click('bottomRight')
        cy.get('#canvas').click()
        cy.get('#canvas').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    })
    it('clears the canvas', () => {
        drawings.drawHouse()
        cy.get('#clear-canvas').click()
        cy.get('#active-tool').should('have.text', "Canvas Cleared")
    })
    it('checks if local storage gets saved after click on Save Local Storage', () => {
        drawings.drawHouse()
        cy.get('#save-storage').click().then(() => {
            expect(localStorage.getItem('savedCanvas')).to.exist
        })
    })
    it('checks if local storage loads after click on Load Local Storage', () => {
        drawings.drawHouse()
        cy.get('#save-storage').click()
        cy.get('#clear-canvas').click()
        cy.get('#load-storage').click()
        cy.get('#active-tool').should('have.text', "Canvas has been Loaded!")
    })
    it.skip('checks if save image file button saves the image file', () => {
        drawings.drawHouse()
        cy.get('.far').click()
        cy.readFile('cypress\\Downloads\\examplePainting.jpeg')
            .should('exist')
    })
    it('checks if mobile viewport gives "Please use site on larger screen" message ', () => {
        cy.viewport(390, 844)
        cy.get('h2').should('have.text', "Please use site on larger screen")
    })
})
