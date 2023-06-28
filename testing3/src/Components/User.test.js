import {render , screen , waitFor} from '@testing-library/react'
import User from './User'
import fetchMock from 'jest-fetch-mock'

// enable fetch mocks
fetchMock.enableMocks()

describe('User', () => {

    beforeEach(() => {
        fetch.resetMocks()
    })

    it('renders user data after a succesfull api call', async() => {
        fetch.mockResponseOnce(JSON.stringify({
            name : 'John Doe'
        }))
        render(<User userId={1}/>)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
        const userName = await screen.findByText('John Doe')
        // const userName = await waitFor(() => screen.getByText('John Doe'))
        expect(userName).toBeInTheDocument()
    })
})
