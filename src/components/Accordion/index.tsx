import React, { MouseEventHandler, useState } from 'react'
import styles from './Accordion.module.css'
import AccordionHeader from '../AccordionHeader'
import AccordionBody from '../AccordionBody'

interface UserData {
    id: number
    picture: string
    first: string
    last: string
    dob: string
    gender: string
    email: string
    country: string
    description: string
}
interface AccordionProps {
    userData: UserData
}

const Accordion: React.FC<AccordionProps> = ({ userData }) => {
    const [showBody, setShowBody] = useState<boolean>(false)

    // Storing props data in the state so that it can be edited
    // and updated data can be sent back to the original source
    // (either the NoSQL API or to the originally fetched array)
    const [userDataState, setUserDataState] = useState(userData)

    const toggleAccordionBody: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowBody((showBody) => !showBody)
    }

    return (
        <div className={styles.accordion}>
            <AccordionHeader
                picture={userDataState.picture}
                firstName={userDataState.first}
                lastName={userDataState.last}
                showBody={showBody}
                toggleAccordionBody={toggleAccordionBody}
            />

            {showBody && (
                <AccordionBody
                    dob={userDataState.dob}
                    gender={userDataState.gender}
                    country={userDataState.country}
                    description={userDataState.description}
                />
            )}
        </div>
    )
}
export default Accordion
