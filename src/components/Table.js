import React from 'react'

export default props => (
    <table className ="table">
        <thead>
            <tr>
                <th>location</th>
                <th>proxy_pass</th>
                <th>proxy_set_header</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.lc}>
                    <td>{item.pth}</td>
                </tr>
            ))}
        </tbody>
    </table>
 /*   <p><div>{props.data1}</div>
    <div>{props.data2}</div>
    <div>Accept-Encoding "";</div>
    </p>*/
)