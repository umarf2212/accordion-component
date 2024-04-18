import React from 'react'
import styles from './AccordionBody.module.css'
import classnames from 'classnames'
import EditableCountryText from '../EditableFields/EditableCountryText'
import { IUserData } from '../Interfaces'
import EditableDOBText from '../EditableFields/EditableDOBText'
import EditableGenderDropdown from '../EditableFields/EditableGenderDropdown'
import EditableDescriptionText from '../EditableFields/EditableDescriptionText'

interface AccordionBodyProps {
    userDataState: IUserData
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
    editMode: boolean
}

const AccordionBody: React.FC<AccordionBodyProps> = ({
    userDataState,
    setUserDataState,
    editMode,
}) => {
    return (
        <div>
            <div className={styles.row}>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <span className={styles.data_title}>Age</span>
                    <span className={styles.data}>
                        {/* 19 Years */}
                        <EditableDOBText
                            userDataState={userDataState}
                            setUserDataState={setUserDataState}
                            editMode={editMode}
                        />
                    </span>
                </div>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <span className={styles.data_title}>Gender</span>
                    <span
                        className={classnames(styles.data, styles.capitalise)}
                    >
                        <EditableGenderDropdown
                            userDataState={userDataState}
                            setUserDataState={setUserDataState}
                            editMode={editMode}
                        />
                    </span>
                </div>
                <div className={classnames(styles.user_data, styles.w_33)}>
                    <span className={styles.data_title}>Country</span>
                    <span
                        className={classnames(styles.data, styles.capitalise)}
                    >
                        <EditableCountryText
                            userDataState={userDataState}
                            setUserDataState={setUserDataState}
                            editMode={editMode}
                        />
                    </span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.user_data}>
                    <span className={styles.data_title}>Description</span>
                    <span className={styles.data}>
                        <EditableDescriptionText
                            userDataState={userDataState}
                            setUserDataState={setUserDataState}
                            editMode={editMode}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default AccordionBody
