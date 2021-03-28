import Nav from "../components/navbar.js"
import Box from "../components/box.js"

export default function Home() {
    return (
        <div className="content">
            <Nav />
        <section className="section">
            <h1 className="title is-1">HooHacks2021!</h1>
            
            
            <h3 className="title is-3">About</h3>
            <p>WHALE Saving is a service that helps users save money with 
                charging their Electric Vehicle(EV). This application uses Artificial Intelligence(AI) 
                to forecast solar energy production. The prediction is used with local energy prices
                 to generate prices for charging your EV. This helps users lower their energy
                  bill and encourages users to be conscious about their energy consumption.
                  </p>
            <Box />
            <h2 className="title is-2">You are currently spending <span class="tag is-large is-danger">$111</span> per month :( </h2>
            <h3 className="title is-3">Electricity Price</h3>

            <div className="columns">
                <div className="column is-one-quarter">
                     </div>  
                     <div className="column">
                    <img width="900px" height="600px" src="https://images.ctfassets.net/rfejulty1aaf/6KzhnEvqYMDUqs8yFJLYFO/7be1376b857bc6d6c1d06130bf190db2/w4yqfvgnvbpdyh7mtegq.png"/>
                    </div>
                    <div className="column is-one-quarter">
                     </div>  
            </div> 

            <h3 className="title is-3">Your Weekly Profile</h3>

            <div className="columns">
                <div className="column is-one-quarter">
                     </div>  
                     <div className="column">
                     <img width="600px" height="400px" src="https://media.discordapp.net/attachments/823685093850873966/825743172000153690/sample.jpg?width=643&height=587" alt="Time Series Graph"/>
                    </div>
                    <div className="column is-one-quarter">
                     </div>  
            </div> 

            <h2 className="title is-2"> Use your solar </h2>
            <h3 className="title is-3">Your estimated solar forecast for next 5 days</h3>

            <div className="columns">
                <div className="column is-one-quarter">
                     </div>  
                     <div className="column">
                     <img width="900px" height="600px" src="https://media.discordapp.net/attachments/823685093850873966/825748238878769182/forecasted.jpg?width=1173&height=586" alt="Time Series Graph"/>
                    </div>
                    <div className="column is-one-quarter">
                     </div>  
            </div> 




        </section>
        </div>

    )
}