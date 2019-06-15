import * as React from "react";

interface HelloProps { 
    value: string
}

interface HelloState {
    value: String
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
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