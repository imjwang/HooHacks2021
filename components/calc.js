import React from "React";

class Calc extends React.Component {
    render() {
        
        const aim = Math.ceil((100 - this.props.battery) / 5)
        console.log(aim)
        //const this.props.time
        const keys = Object.keys(this.props.json)
        const ret = []

        for (const p in keys) {
            const price = this.props.json[keys[p]]
            ret.push(   <tr>
                            <td>{(p*5)+5}</td>
                            <td>{price}</td>
                        </tr>)
          }

        return (
            <table className="table is-fullwidth">
            <thead>
            <tr>
              <th>Battery Percent</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {ret}
        </tbody>
          </table>
        )
    }
}

export { Calc }