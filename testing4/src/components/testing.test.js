import {screen , render , waitFor} from '@testing-library/react'
import AsyncComponent from './AsyncComponent'

test('displays loading first then fetched data' , async() => {
    const fakeData = {title : 'Test post'}
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json : () => Promise.resolve(fakeData)
    }))
    render(<AsyncComponent/>)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
    await waitFor(() => expect(screen.getByTestId('data')).toBeInTheDocument())
    expect(screen.getByTestId('data')).toHaveTextContent('Test post')


})