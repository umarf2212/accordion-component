import React, { MouseEventHandler, useState } from 'react'
import styles from './Accordion.module.css'
import AccordionHeader from '../AccordionHeader'
import AccordionBody from '../AccordionBody'
import { IUserData } from '../Interfaces'

interface AccordionProps {
    userData: IUserData
}

const Accordion: React.FC<AccordionProps> = ({ userData }) => {
    const [showBody, setShowBody] = useState<boolean>(false)

    // Storing props data in the state so that it can be edited
    // and updated data can be sent back to the original source
    // (either the NoSQL API or to the originally fetched array)
    const [userDataState, setUserDataState] = useState<IUserData>(userData)

    const toggleAccordionBody: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowBody((showBody) => !showBody)
    }

    return (
        <div className={styles.accordion}>
            <AccordionHeader
                userDataState={userDataState}
                setUserDataState={setUserDataState}
                editMode={true}
                showBody={showBody}
                toggleAccordionBody={toggleAccordionBody}
            />

            {showBody && (
                <AccordionBody
                    userDataState={userDataState}
                    setUserDataState={setUserDataState}
                    editMode={true}
                />
            )}
        </div>
    )
}
export default Accordion
