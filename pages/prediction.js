import Nav from "../components/navbar.js"
import Forms from "../components/forms.js"
import Table from "../components/table.js"
import React from "React"

class Home extends React.Component {
    state = {
      tbl: null,
      bat: 0,
      t: 0
    }
  
    handleChangeB = (event) => {this.setState({bat: event.target.value})};
    handleChangeT = (event) => {this.setState({t: event.target.value})};

    renderTbl = () => {
      this.setState({
        tbl : <Table battery={this.state.bat} time={this.state.t}/>
      })
    }
      render() {
      return (
        <div className="content">
            <Nav />
        <section className="section">
            
            <div class="columns">

                <div class="column">

                    <h1 className="title is-1">Prediction</h1>
                    <h3 className="title is-3">How to Use</h3>
                    <p>The prediction of the energy prices will depend on the current battery percentage and the time of day based on the day selected. 
                        Enter a battery percentage value from 0 to 100.
                        Enter a day value based on [insert how to use the day part].
                        Once both fields are filled in, then hit the GENERATE button below.
                        You will get a table of predicted prices for each battery percent value higher than what you typed in up to 100%.
                    </p>
                    <form className="box">
                                    <div className="field">
                            <label className="label">Battery Percentage (%)</label>
                     <div className="control">
                      <input className="input" type="number" value={this.state.bat} onChange={this.handleChangeB}/>
                      </div>
                     </div>

                         <div className="field">
                        <label className="label">Predict/Select Time</label>
                 <div className="control">
                          <input className="input" type="number" value={this.state.t} onChange={this.handleChangeT}/>
                     </div>
                         </div>
                </form>
                    <button className="button is-primary" onClick={this.renderTbl}>GENERATE</button>

                </div>

                <div class="column">
                
                    {this.state.tbl}

                </div>


            </div>

        </section>
        </div>
    )
}
}

export default Home 