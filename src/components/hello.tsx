import * as React from "react";

interface HelloProps { 
    value: string
}

interface HelloState {
    value: String
}

export class Hello extends React.Component<HelloProps, HelloState> {

    public state: HelloState = {
        value: 'myState'
    }
    
    render() {
        return (<div>
                  <h1>props: {this.props.value}</h1>
                  <h1>state: {this.state.value}</h1>
               </div>);
    }
}