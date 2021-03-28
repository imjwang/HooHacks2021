import React from "React";

class Calc extends React.Component {
    render() {
        
        const aim = Math.ceil((100 - this.props.battery) / 5)

        const keys = Object.keys(this.props.json)
        const ret = []

        for (var i = 0; i < aim; i++) {
            const price = this.props.json[keys[i]]
            ret.push(   <tr>
                            <td>{(Number(i)*5)+Number(this.props.battery)+5}</td>
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