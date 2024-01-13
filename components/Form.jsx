import "./Form.css"
export default function Form({initialInv, annualInv, expectedReturn, duration, onchange}) {

    const handleOnChange = (event) => {
        if (parseFloat(event.target.value) > 0) {
            onchange({[event.target.name]: parseFloat(event.target.value)})
        }
    }

    return (
        <form className={"FormInvestment"}>
            <div>
                <label htmlFor={"initial"}>Initial Investment</label>
                <input type={"number"} name={"initialInv"} id={"initial"} value={initialInv} onChange={handleOnChange}/>
            </div>

            <div>
                <label htmlFor={"annual"}>Anual Investment</label>
                <input type={"number"} name={"annualInv"} id={"annual"} value={annualInv} onChange={handleOnChange}/>
            </div>

            <div>
                <label htmlFor={"expected"}>Expected Return</label>
                <input type={"number"} name={"expectedReturn"} id={"expected"} value={expectedReturn} onChange={handleOnChange}/>
            </div>

            <div>
                <label htmlFor={"duration"}>Duration</label>
                <input type={"number"} name={"duration"} id={"duration"} value={duration} onChange={handleOnChange}/>
            </div>
        </form>
    )
}