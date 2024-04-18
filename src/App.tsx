import React, { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import celebData from '../public/celebrities.json'
import { IUserData } from './components/Interfaces'

const App: React.FC = () => {
    const [celebDataState, setCelebDataState] = useState<IUserData[]>(celebData)

    const updateCelebData = (newCelebData: IUserData) => {
        const updatedCelebData = celebDataState.map((dataObj: IUserData) => {
            if (dataObj.id === newCelebData.id) {
                return { ...dataObj, ...newCelebData }
            }
            return dataObj
        })
        setCelebDataState(updatedCelebData)
    }

    const deleteCelebData = (id: number) => {
        const updatedCelebData = celebDataState.filter(
            (dataObj) => dataObj.id !== id
        )
        setCelebDataState(updatedCelebData)
    }

    return (
        <>
            <h1>Accordion</h1>
            {/* <Accordion data={sampleData} /> */}

            {celebDataState &&
                celebDataState.map((data) => (
                    <Accordion
                        userData={data}
                        key={`accordion_item_${data.id}`}
                        updateCelebData={updateCelebData}
                        deleteCelebData={deleteCelebData}
                    />
                ))}
        </>
    )
}

export default App
