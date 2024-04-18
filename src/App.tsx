import React, { ChangeEvent, useState } from 'react'
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

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase()
        const newCelebDataState = celebDataState.filter(
            (celeb) =>
                celeb.first.toLowerCase().includes(query) ||
                celeb.last.toLowerCase().includes(query)
        )
        setCelebDataState(newCelebDataState)
    }
    const resetSearch = () => {
        setCelebDataState(celebData)
    }

    return (
        <div className="app_wrapper">
            <h1>Accordion</h1>

            <input
                type="text"
                placeholder="Search"
                className="accordion_search"
                onChange={handleSearchChange}
                onBlur={resetSearch}
            />

            {celebDataState &&
                celebDataState.map((data) => (
                    <Accordion
                        userData={data}
                        key={`accordion_item_${data.id}`}
                        updateCelebData={updateCelebData}
                        deleteCelebData={deleteCelebData}
                    />
                ))}
        </div>
    )
}

export default App
