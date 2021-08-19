import React from "react";
import { commandState } from "../businesslogic/CommandState";
import { Command } from "../businesslogic/models/Command";
import { CommandItem } from "../businesslogic/models/CommandItem";
import { getCommand } from "../businesslogic/usecases/getCommand";

interface Props {
    
}
interface State {
    command: Command
    commandItems: CommandItem[]
}

export class LaCommande extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            command: getCommand(),
            commandItems: commandState.commandItems
        }
    }
    


    render() {
        return (
            <div className="App-table App-command">
               
                <div className="App-columns-container">
                    <div>
                        <h4 className="App-cell left">Item</h4>
                        {
                            this.state.command.commandLines.map(commandLine => 
                                (
                                    <p className="App-cell left" 
                                    key={commandLine.commandItem.pizza.name}>
                                        {commandLine.commandItem.pizza.name}
                                    </p>
                                )
                            )
                        }
                    </div>
                    <div>
                        <h4 className="App-cell right">Qty</h4>
                        {
                            this.state.command.commandLines.map(commandLine =>
                                (
                                    <p className="App-cell right"
                                    key={commandLine.commandItem.pizza.name}>
                                        {commandLine.commandItem.quantity}
                                    </p>
                                )
                            )
                            
                        }
                    </div>
                    <div>
                        <h4 className="App-cell right">U.P</h4>
                        {
                            this.state.command.commandLines.map(commandLine =>
                                (
                                    <p className="App-cell right"
                                    key={commandLine.commandItem.pizza.name}>
                                        {commandLine.commandItem.pizza.price}
                                    </p>
                                )
                            )
                        }
                    </div>
                    <div>
                        <h4 className="App-cell right">Total</h4>
                        {
                            this.state.command.commandLines.map(commandLine => 
                                (<p className="App-cell right"
                                key={commandLine.commandItem.pizza.name}>
                                    {commandLine.total}
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div className="App-cell left">
                    <div>
                        <h4>Nombre d'items: {this.state.command.numberOfItems}</h4>
                    </div>
                    <div>
                        <h4>Total: {this.state.command.total}</h4>
                    </div>
                    
                    
                </div>
                <button className="button">Envoyer la commande</button>
            </div>
        );
    }
    
}

