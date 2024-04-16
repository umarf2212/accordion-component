import React from 'react'
import styles from './AccordionHeader.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface AccordionHeaderProps {
    picture: string
    fullName: string
    showBody: boolean
    toggleAccordionBody: () => void
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
    picture,
    fullName,
    showBody,
    toggleAccordionBody,
}) => {
    return (
        <div className={styles.row}>
            <div className={styles.accordion_user_image}>
                <img
                    src={picture}
                    width={72}
                    height={72}
                    alt="User Thumbnail"
                />
            </div>
            <div className={styles.accordion_title}>{fullName}</div>
            <div
                className={styles.accordion_toggle}
                onClick={toggleAccordionBody}
            >
                {showBody ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                )}
            </div>
        </div>
    )
}
export default AccordionHeader
