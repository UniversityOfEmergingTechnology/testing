import {render , fireEvent , screen} from '@testing-library/react'
import TodoList from './TodoList'

describe('TodoList' , () => {
    it('should allow users to add and remove a todo',() => {
        render(<TodoList/>)
        const input = screen.getByTestId('add-input')
        const addButton = screen.getByRole('button' , {name : /add todo/i})

        // add a todo
        fireEvent.change(input, {
            target :{
                value : 'Go Grocery shopping'
            }
        })
        fireEvent.click(addButton)
        expect(screen.getByText('Go Grocery shopping')).toBeInTheDocument()

        // removing a todo
        const removeButton = screen.getByRole('button' , {name : /remove/i})
        fireEvent.click(removeButton)
        expect(screen.queryByText('Go Grocery shopping')).not.toBeInTheDocument()

    })
})
