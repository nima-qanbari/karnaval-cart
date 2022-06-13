import { useState } from "react"

export const useDetails = () => {
    const [activeDetails, setActiveDetails] = useState(null)
    return [
        activeDetails,
        setActiveDetails
    ]
}