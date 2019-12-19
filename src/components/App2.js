import React, { Component } from 'react'
import TextData from './TextData'
import Table from './Table'
import { pathToFileURL } from 'url';

export default class App extends Component {

    state = {
        pass: '',
        location: '',
        flag: false,
        proxyData:
            {
                lc: '',
                pth: ''
            }
    }

    constructor(props) {
        super(props);
        this.state = {value1: ''};
        this.state = {value2: ''};
    
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
  //      this.handleSubmitConvert = this.handleSubmitConvert.bind(this);
      }

    handleChangeLocation(event) {
        this.setState({value: event.target.value});
        this.state.location = event.target.value;
      }

    handleChangePass(event) {
        this.setState({value: event.target.value});
        this.state.pass = event.target.value;
    }

    handleSubmitAdd(event) {
        var joined = this.state.myArray.concat('new value');
        this.setState({ proxyData: joined })

        //this.state.proxyData.push('newValue')
        //this.setState({lc:this.state.pass,pth:this.state.location})
        event.preventDefault();
      }

    /*handleSubmitConvert(event) {
        this.state.flag = true;
        event.preventDefault();
    }*/

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

  
    render() {
        const body = this.state.isOpen && <TextData data={this.state.proxyData}/>
        const block = this.state.isAdd && <Table data={this.state.proxyData}/>
        const hasData = <TextData data />
    return(
       // <h1>Michael App</h1>
            <div>
           <label>
                Location:
                <input type="text1" value={this.state.location} onChange={this.handleChangeLocation} />
                Path:
                <input type="text2" value={this.state.pass} onChange={this.handleChangePass} />
            </label>

            <button value="+" onClick={this.handleSubmitAdd} > + </button>
            <button onClick={this.handleClick}>
            Конвентировать
          </button>

          {body}
          <table className ="table">
        <thead>
            <tr>
                <th>location</th>
                <th>proxy_pass</th>
                <th>proxy_set_header</th>
            </tr>
        </thead>
    </table>   
    {block}
            </div>

            
    );
}
}

//export default App  
//<textarea rows="10" cols="45" name="text" readonly="readonly" wrap="soft">
   //       1</textarea>