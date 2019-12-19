import React from 'react'

export default props => (
    <table className ="table">
         <p>location /{props.data1}; </p>
          <p>proxy_pass {props.data2}; </p>
          <p> proxy_set_header Accept-Encoding "";</p>
    </table>    
)