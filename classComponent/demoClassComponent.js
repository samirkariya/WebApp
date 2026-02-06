import { Component } from "react";

// mounting
// Updating
// unmounting
export default class Demo extends Component{
    constructor(props){
        super(props);           
        this.state = {
            count:0
        }
    }
    inc = ()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <><h1>Hello {this.props.name}
            <br/>Count: {this.state.count}    <button onClick={this.inc}>Increment</button>
                </h1>
            </>
        )
    }
}