import React from 'react'
import './App.css'
import Accordion from './components/Accordion'
import celebData from '../public/celebrities.json'

// const sampleData = celebData[0]

const App: React.FC = () => {
    // const [count, setCount] = useState(0)

    return (
        <>
            <h1>Accordion</h1>
            {/* <Accordion data={sampleData} /> */}

            {celebData.map((data) => (
                <Accordion data={data} key={`accordion_item_${data.id}`} />
            ))}
        </>
    )
}

export default App
