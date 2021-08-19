import { commandState } from "../businesslogic/CommandState";
import { commandStatus } from "../businesslogic/CommandStatus";
import { CommandPost } from "../businesslogic/gateways/CommandPost";
import { CommandQuery } from "../businesslogic/gateways/CommandQuery";
import { PizzaCommand } from "../businesslogic/gateways/PizzaCommand";
import { Command } from "../businesslogic/models/Command";
import { CommandItem } from "../businesslogic/models/CommandItem";
import { CommandLine } from "../businesslogic/models/CommandLine";
import { Pizza } from "../businesslogic/models/Pizza";

export class CommandRepository implements PizzaCommand, CommandQuery, CommandPost {
    
    command(pizza: Pizza): void {
        commandState.commandPizza(pizza);
    }


    find(): Command {
        const commandItems = commandState.commandItems as CommandItem[];
        const commandLines = this.decor(commandItems) as CommandLine[];
        const command: Command = {
            commandLines: commandLines as CommandLine[],
            numberOfItems: commandState.countNumberOfItems(),
            total: commandState.countTotal()
        }
        return command;
    };

    private decor(commandItems: CommandItem[]) : CommandLine[] {
        const commandLines: CommandLine[] = [];
        commandItems.forEach(commandItem => {
            const commandLine: CommandLine = {
                commandItem: commandItem,
                total: commandState.countTotalOfCommandItem(commandItem)
            }
            commandLines.push(commandLine);
        });
        return commandLines;
    }

    sendCommand(commandItems: CommandItem[]): void {
        
        // TODO With API
        // TODO if Success
        commandState.commandStatus = commandStatus.SENT;
    }
    
}