import Nav from "../components/navbar.js"
import Box from "../components/box.js"

export default function Home() {
    return (
        <div className="content">
            <Nav />
        <section className="section">
            <h1 className="title is-1">HooHacks2021!</h1>
            <h3 className="title is-3">About</h3>
            <p>ToBeNamed is a service that helps users save money with 
                charging their Electric Vehicle(EV). ToBeNamed uses Artificial Intelligence(AI) 
                to forecast solar energy production. The prediction is used with local energy prices
                 to generate prices for charging your EV. ToBeNamed helps users lower their energy
                  bill and encourages users to be conscious about their energy consumption.
                  </p>
            <Box />
        </section>
        </div>

    )
}