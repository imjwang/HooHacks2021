import Nav from "../components/navbar.js"
import Forms from "../components/forms.js"
import Table from "../components/table.js"

export default function Home() {
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
                    <Forms />

                </div>

                <div class="column">
                
                    <Table />

                </div>


            </div>

        </section>
        </div>
    )
}
