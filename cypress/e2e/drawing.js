class Drawobjects {
    drawHouse() {
        return cy.get('#canvas').trigger('mousedown', 'center')
            .trigger('mousemove', 495, 305)
            .trigger('mousemove')
            .trigger('mousemove', 710, 303, { force: true })
            .trigger('mousemove', 716, 438, { force: true })
            .trigger('mousemove', 503, 442, { force: true })
            .trigger('mousemove', 488, 299, { force: true })
            .trigger('mouseup')
            .trigger('mousedown', 488, 299, { force: true })
            .trigger('mousemove', 488, 299, { force: true })
            .trigger('mousemove', 589, 166, { force: true })
            .trigger('mousemove', 706, 303, { force: true })
            .trigger('mouseup')
            .trigger('mousedown', 579, 437, { force: true })
            .trigger('mousemove', 579, 437, { force: true })
            .trigger('mousemove', 573, 386, { force: true })
            .trigger('mousemove', 619, 384, { force: true })
            .trigger('mousemove', 621, 435, { force: true })
            .trigger('mouseup')
    }
    eraseHouse() {
        return cy.get('#canvas').trigger('mousedown', 'center')
            .trigger('mousemove', 495, 305)
            .trigger('mousemove')
            .trigger('mousemove', 710, 303, { force: true })
            .trigger('mousemove', 716, 438, { force: true })
            .trigger('mousemove', 503, 442, { force: true })
            .trigger('mousemove', 488, 299, { force: true })
            .trigger('mouseup')
            .trigger('mousedown', 488, 299, { force: true })
            .trigger('mousemove', 488, 299, { force: true })
            .trigger('mousemove', 589, 166, { force: true })
            .trigger('mousemove', 706, 303, { force: true })
            .trigger('mouseup')
            .trigger('mousedown', 579, 437, { force: true })
            .trigger('mousemove', 579, 437, { force: true })
            .trigger('mousemove', 573, 386, { force: true })
            .trigger('mousemove', 619, 384, { force: true })
            .trigger('mousemove', 621, 435, { force: true })
            .trigger('mouseup')
    }
}


export default Drawobjects