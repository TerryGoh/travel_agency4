import React, {  Component  } from 'react';

import Alert from 'react-bootstrap/Alert'

export class ModalPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.showPanel,
        }
    }

    
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
        console.log('props.displayError == ', this.props.showPanel)
        console.log('show == ', this.state.show)
        console.log(newProps.showPanel)
        this.setState({ show: newProps.showPanel })
    }

    componentDidMount() {
        console.log('props.displayError == ', this.props.showPanel)
        console.log('show == ', this.state.show)
        if(this.state.show){
            document.body.style.overflow = 'hidden';
          }    
    }


    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }
    
    render() {

        const modalPanel = (
            this.state.show &&
            <Alert style={{ backgroundColor: this.props.backgroundColor,  zIndex: 10, position: "absolute" }} variant="danger" onClose={() => this.setState({ show: false })} dismissible >
                <Alert.Heading>{this.props.title}</Alert.Heading>
                <p>
                    {this.props.msg}
                </p>
            </Alert >)
        return (
            modalPanel
        )
    }
}
