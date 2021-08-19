import React from "react";
import { CommandRepository } from "../adapters/CommandRepository";
import { commandState } from "../businesslogic/CommandState";
import { commandStatus } from "../businesslogic/CommandStatus";
import { Command } from "../businesslogic/models/Command";
import { CommandItem } from "../businesslogic/models/CommandItem";
import { getCommand } from "../businesslogic/usecases/getCommand";
import { SuiviDeLaCommande } from "./SuiviDeLaCommande";

interface Props {
    
}
interface State {
    command: Command
    commandStatus: string | undefined
}

const COMMAND_STATUS_SENT: string = commandStatus.SENT;

export class LaCommande extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            command: getCommand(),
            commandStatus: commandState.commandStatus        
        }
    }

    showCommandTable() {
        return(
            <div className="App-table App-command">
                <div>
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
                            <h4 className="App-cell right">Qté</h4>
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
                            <h4 className="App-cell right">P.U.</h4>
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
                        <div >
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
                    </div>
                    <button className="button" onClick={() => this.send()}>Envoyer la commande</button>
                </div>
        );
    }
    
    send() {
        // ToDoInRepoIfPostToServerSuccess
        new CommandRepository().sendCommand(commandState.commandItems);
    }

    render() {
        return (
            <div>
                {
                    this.state.commandStatus === COMMAND_STATUS_SENT ? 
                    (<SuiviDeLaCommande/>) : (this.showCommandTable())
                }
            </div>
        );
    }
    
}

