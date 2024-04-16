import React, { useState } from 'react'
import styles from './Accordion.module.css'
import AccordionHeader from '../AccordionHeader'
import AccordionBody from '../AccordionBody'

interface AccordionProps {
    data: {
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
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const [showBody, setShowBody] = useState<boolean>(false)

    const toggleAccordionBody = (): void => {
        setShowBody((showBody) => !showBody)
    }

    return (
        <div className={styles.accordion}>
            <AccordionHeader
                picture={data.picture}
                fullName={`${data.first} ${data.last}`}
                showBody={showBody}
                toggleAccordionBody={toggleAccordionBody}
            />

            {showBody && (
                <AccordionBody
                    dob={data.dob}
                    gender={data.gender}
                    country={data.country}
                    description={data.description}
                />
            )}
        </div>
    )
}
export default Accordion
