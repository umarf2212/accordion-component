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
                    <div className={styles.data_title}>Age</div>
                    <div className={styles.data}>19 Years</div>
                </div>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <div className={styles.data_title}>Gender</div>
                    <div className={classnames(styles.data, styles.capitalise)}>
                        {gender}
                    </div>
                </div>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <div className={styles.data_title}>Country</div>
                    <div className={classnames(styles.data, styles.capitalise)}>
                        {country}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.user_data}>
                    <div className={styles.data_title}>Description</div>
                    <div className={styles.data}>{description}</div>
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
