import { mount } from '@vue/test-utils';
import TodoApp from '../../src/components/TodoApp.vue';


// describe("TodoApp.vue", () => {
//     it("render state data if exist: ", () => {
//         
//         const todo = wrapper.get('[data-todo="todo"]')
//         expect(todo.text()).toBe("Vue component crach course.")
//     })
//     it("render all todos in state data: ", () => {
//         
//         const todos = wrapper.findAll('[data-todo="todo"]')
//         expect(todos).toHaveLength(2)
//     })
//     // it("add new todo: ", () => {
//     //     
//     //     const input = wrapper.get('[data-todo="new-todo"]')
//     //     input.setValue("Shopping.")
//     //     const form = wrapper.get('[data-todo="form"]')
//     //     form.trigger('submit')
//     //     const todos = wrapper.findAll('[data-todo="todo"]')
//     //     expect(todos).toHaveLength(3)
//     // })
//     it("add new todo: ", async () => {
//         
//         const input = wrapper.get('[data-todo="new-todo"]')
//         await input.setValue("Shopping.")
//         const form = wrapper.get('[data-todo="form"]')
//         await form.trigger('submit')
//         const todos = wrapper.findAll('[data-todo="todo"]')
//         expect(todos).toHaveLength(3)
//     })
//     it("complete todo status: ", async () => {
//         
//         const input = wrapper.get('[data-todo="new-todo"]')
//         await input.setValue("Shopping.")
//         const form = wrapper.get('[data-todo="form"]')
//         await form.trigger('submit')
//         const todos = wrapper.findAll('[data-todo="todo"]')
//         expect(todos).toHaveLength(3)
//     })
// })

// describe("TodoApp.vue", () => {
//     const wrapper = mount(TodoApp)
//     it("render state data if exist: ", () => {
//         const todo = wrapper.get('[data-todo="todo"]')
//         expect(todo.text()).toBe("Vue component crach course.")
//     })
//     it("render all todos in state data: ", () => {
//         const todos = wrapper.findAll('[data-todo="todo"]')
//         expect(todos).toHaveLength(2)
//     })
//     // it("add new todo: ", () => {
//     //     const input = wrapper.get('[data-todo="new-todo"]')
//     //     input.setValue("Shopping.")
//     //     const form = wrapper.get('[data-todo="form"]')
//     //     form.trigger('submit')
//     //     const todos = wrapper.findAll('[data-todo="todo"]')
//     //     expect(todos).toHaveLength(3)
//     // })
//     it("add new todo: ", async () => {
//         const input = wrapper.get('[data-todo="new-todo"]')
//         await input.setValue("Shopping.")
//         const form = wrapper.get('[data-todo="form"]')
//         await form.trigger('submit')
//         const todos = wrapper.findAll('[data-todo="todo"]')
//         expect(todos).toHaveLength(3)
//     })
//     // it("complete todo status: ", async () => {
//     //     const input = wrapper.get('[data-todo="new-todo"]')
//     //     await input.setValue("Shopping.")
//     //     const form = wrapper.get('[data-todo="form"]')
//     //     await form.trigger('submit')
//     //     const todos = wrapper.findAll('[data-todo="todo"]')
//     //     expect(todos).toHaveLength(3)
//     // })
// })

describe("TodoApp.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(TodoApp)
    })
    it("render state data if exist: ", () => {
        const todo = wrapper.get('[data-todo="todo"]')
        expect(todo.text()).toBe("Vue component crach course.")
    })
    it("render all todos in state data: ", () => {
        const todos = wrapper.findAll('[data-todo="todo"]')
        expect(todos).toHaveLength(2)
    })
    // it("add new todo: ", () => {
    //     const input = wrapper.get('[data-todo="new-todo"]')
    //     input.setValue("Shopping.")
    //     const form = wrapper.get('[data-todo="form"]')
    //     form.trigger('submit')
    //     const todos = wrapper.findAll('[data-todo="todo"]')
    //     expect(todos).toHaveLength(3)
    // })
    it("add new todo: ", async () => {
        const input = wrapper.get('[data-todo="new-todo"]')
        await input.setValue("Shopping.")
        const form = wrapper.get('[data-todo="form"]')
        await form.trigger('submit')
        const todos = wrapper.findAll('[data-todo="todo"]')
        expect(todos).toHaveLength(3)
    })
    // it("complete todo status: ", async () => {
    //     const input = wrapper.get('[data-todo="new-todo"]')
    //     await input.setValue("Shopping.")
    //     const form = wrapper.get('[data-todo="form"]')
    //     await form.trigger('submit')
    //     const todos = wrapper.findAll('[data-todo="todo"]')
    //     expect(todos).toHaveLength(3)
    // })
})