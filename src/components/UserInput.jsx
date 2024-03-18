export default function UserInput({input,amtchange ,annualchange,returnchange, durationchange}) {
    return(
        <>
        <section id="user-input" >
            <div className="input-group">
            <p>
            <label>INITIAL INVESTMENT</label>
            <input type="number"  value={input.initialInvestment} onChange={amtchange} />
            </p>
            </div>
            
            <div className="input-group">
            <p>
            <label>Annual INVESTMENT </label>
            <input type="number"  value={input.annualInvestment} onChange={annualchange} />
            </p>
            </div>
            
            <div className="input-group">
            <p>
            <label>Expected Return</label>
            <input type="number" value={input.expectedReturn}  onChange={returnchange} />
            </p>
            </div>
                
            <div className="input-group">
            <p>
            <label>Duration</label>
            <input type="number" value={input.duration}  onChange={durationchange} />
            </p>
            </div>
           
        </section>
        </>
    );
};
