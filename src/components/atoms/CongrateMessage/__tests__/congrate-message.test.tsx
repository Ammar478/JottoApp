import { CongratsMessage } from '../congrate-message'
import { render } from '@testing-library/react'

it('should render the component if isSuccess is true', () => {
    const { debug } = render(<CongratsMessage isSuccess={true} />)
    debug()
})
