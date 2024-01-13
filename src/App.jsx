import './App.css'
import {useState} from "react";
import Form from "../components/Form.jsx";
import ResultTable from "../components/ResultTable.jsx";

function App() {
    // const [investment, setInvestment] = useState({initialInv: "", annualInv: "", expectedReturn: "", duration: ""});
    const [investment, setInvestment] = useState({initialInv: 10000, annualInv: 1200, expectedReturn: 6, duration: 10});

    const handleInvestChange = (inp) => {
        setInvestment((prevState) => {
            console.log({...prevState, ...inp})
            return {...prevState, ...inp}
        })
    }

    return (
        <>
            <Form onchange={handleInvestChange} {...investment} />
          <ResultTable {...investment}/>
        </>
    )
}

export default App
