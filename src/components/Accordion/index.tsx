import React, { useState, useRef } from 'react'
import styles from './Accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronUp,
    faChevronDown,
    faTrashCan,
    faPencil,
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import AccordionHeader from '../AccordionHeader/AccordionHeader'

interface AccordionProps {
    data: {
        id: number
        first: string
        last: string
        dob: string
        gender: string
        email: string
        picture: string
        country: string
        description: string
    }
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const accordionBodyRef = useRef<HTMLDivElement>(null)
    const [showBody, setShowBody] = useState<boolean>(false)

    const toggleAccordionBody = (): void => {
        setShowBody((showBody) => !showBody)
    }

    return (
        <div className={styles.accordion}>
            <div className={styles.row}>
                <AccordionHeader
                    picture={data.picture}
                    fullName={`${data.first} ${data.last}`}
                    showBody={showBody}
                    toggleAccordionBody={toggleAccordionBody}
                />
            </div>

            {showBody && (
                <div className={styles.accordion_body} ref={accordionBodyRef}>
                    <div className={styles.row}>
                        <div
                            className={classnames(
                                styles.user_data,
                                styles.w_33
                            )}
                        >
                            <div className={styles.data_title}>Age</div>
                            <div className={styles.data}>19 Years</div>
                        </div>
                        <div
                            className={classnames(
                                styles.user_data,
                                styles.w_33
                            )}
                        >
                            <div className={styles.data_title}>Gender</div>
                            <div className={styles.data}>{data.gender}</div>
                        </div>
                        <div
                            className={classnames(
                                styles.user_data,
                                styles.w_33
                            )}
                        >
                            <div className={styles.data_title}>Country</div>
                            <div className={styles.data}>{data.country}</div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.user_data}>
                            <div className={styles.data_title}>Description</div>
                            <div className={styles.data}>
                                {data.description}
                            </div>
                        </div>
                    </div>

                    <div
                        className={classnames(
                            styles.row,
                            styles.accordion_actions
                        )}
                    >
                        <div>
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                className={styles.icon}
                            />
                            <FontAwesomeIcon
                                icon={faPencil}
                                className={styles.icon}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Accordion
