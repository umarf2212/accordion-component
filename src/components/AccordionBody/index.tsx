import React from 'react'
import styles from './AccordionBody.module.css'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

interface AccordionBodyProps {
    dob?: string
    gender: string
    country: string
    description: string
}

const AccordionBody: React.FC<AccordionBodyProps> = ({
    gender,
    country,
    description,
}) => {
    return (
        <div>
            <div className={styles.row}>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <span className={styles.data_title}>Age</span>
                    <span className={styles.data}>19 Years</span>
                </div>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <span className={styles.data_title}>Gender</span>
                    <span
                        className={classnames(styles.data, styles.capitalise)}
                    >
                        {gender}
                    </span>
                </div>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <span className={styles.data_title}>Country</span>
                    <span
                        className={classnames(styles.data, styles.capitalise)}
                    >
                        {country}
                    </span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.user_data}>
                    <span className={styles.data_title}>Description</span>
                    <span className={styles.data}>{description}</span>
                </div>
            </div>

            <div className={classnames(styles.row, styles.accordion_actions)}>
                <div>
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles.icon}
                    />
                    <FontAwesomeIcon icon={faPencil} className={styles.icon} />
                </div>
            </div>
        </div>
    )
}
export default AccordionBody
