import { FC } from 'react'

export interface CongratsMessageProps {
    isSuccess: boolean
}

export const CongratsMessage: FC<CongratsMessageProps> = ({ isSuccess }) => {
    if (!isSuccess) {
        return null
    }
    return (
        <div className="congrate-message">
            <h1>{'message'}</h1>
        </div>
    )
}
