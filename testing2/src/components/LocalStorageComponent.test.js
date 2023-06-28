import {render , screen} from '@testing-library/react'
import LocalStorageComponent from './LocalStorageComponent'

describe('Local storage testing' , () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('displays the correct value from local storage' , ()=>{
        localStorage.setItem('key' , 'test value')
        render(<LocalStorageComponent/>)
        expect(screen.getByText('test value')).toBeInTheDocument()
    })
})