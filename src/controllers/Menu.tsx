import React from "react";
import { FakePizzaQuery } from "../adapters/FakePizzaQuery";
import { LaCarte } from "./LaCarte";
import { LaCommande } from "./LaCommande";

interface Props {

}

interface State {
    option: string
}

const LA_CARTE: string = "@La carte";
const LA_COMMAND: string = "@La command";

export class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            option: LA_CARTE
        }
    }

    onSelectLaCarte() {
        this.setState({option: LA_CARTE});
    }

    onSelectLaCommand() {
        this.setState({option: LA_COMMAND});
    }
    
    render() {
        return (

            <div>
                <header className="App-header">
                    <button className="button" onClick={() => this.onSelectLaCarte()}>La carte</button>
                    <button className="button" onClick={() => this.onSelectLaCommand()}>La commande</button>
                </header>
                <div className="App-main">
                    {
                        this.state.option === LA_CARTE ? 
                        (<LaCarte pizzaQuery={ new FakePizzaQuery()}/>) : (<LaCommande/>)
                    }
                </div>
            </div>
        );
    }
}