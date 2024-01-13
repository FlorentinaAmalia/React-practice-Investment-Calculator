import "./ResultTable.css"
import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function ResultTable({initialInv, annualInv, expectedReturn, duration}) {

    const investmentResult = calculateInvestmentResults({
        initialInvestment: initialInv,
        annualInvestment: annualInv,
        expectedReturn: expectedReturn,
        duration: duration,
    });

    const results = <div className={"ResultTable"}>
        <table>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intereset (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {investmentResult.map((row, idx) => {
                const prevInterest = investmentResult[idx - 1] ? investmentResult[idx - 1].interest : 0;
                return <tr key={`${idx}`}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(row.interest + prevInterest)}</td>
                    <td>{formatter.format(initialInv + annualInv * (idx + 1))}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
console.log(results)
    return (
        <>
            {results}
        </>
    )
}