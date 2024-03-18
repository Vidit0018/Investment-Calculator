import { calculateInvestmentResults ,formatter } from "../util/investment";

export default function Result({input}) {
    
    const resultsData= calculateInvestmentResults(input);
    console.log(resultsData);
    return(

        <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest =yearData.valueEndOfYear -yearData.annualInvestment* yearData.year- input.initialInvestment ;
                    const totalAmtInvested = yearData.valueEndOfYear -totalInterest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmtInvested)}</td>
                    </tr>
                })}
            </tbody>
        
        </table>
    );
};
