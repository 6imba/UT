const orderTotal = require('../src/1.orderTotal')

// it('case_1: ', () => {
//     expect(true).toBe(true)
//     expect(1).toBe(1)
//     expect(0).toBe(0)
//     expect(2+2).toBe(4)
//     expect('a'+10).toBe('a10')
// })

it('Quantity specified', () => {
    const order = {
        items: [
            { name: 'football', price: 1500, quantity: 6 }
        ]
    }
    expect(orderTotal(order)).toBe(9000)
})

it('No quantity specified', () => {
    const order = {
        items: [
            { name: 'football', price: 1500 }
        ]
    }
    expect(orderTotal(order)).toBe(1500)
})

it('Case_3', () => {
    const order = {
        items: [
            { name: 'football', price: 1500, quantity: 2 },
            { name: 'football', price: 1500, quantity: 6 }
        ]
    }
    expect(orderTotal(order)).toBe(12000)
})

it('Case_4', () => {
    const order = {
        items: [
            { name: 'football', price: 20, quantity: 1 },
            { name: 'football', price: 40, quantity: 1 }
        ]
    }
    expect(orderTotal(order)).toBe(60)
})
