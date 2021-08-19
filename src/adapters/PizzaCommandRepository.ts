import { commandState } from "../businesslogic/CommandState";
import { PizzaCommand } from "../businesslogic/gateways/PizzaCommand";
import { CommandItem } from "../businesslogic/models/CommandItem";
import { Pizza } from "../businesslogic/models/Pizza";

export class PizzaCommandRepository implements PizzaCommand {

    private commandItems: CommandItem[] = [];
    private commandState = commandState;

    command(pizza: Pizza): void {
        this.commandItems.push({
            pizza: pizza, 
            quantity: 1
        } as CommandItem);
        this.commandState.commandItems = this.commandItems;
    }

    getCommand(): CommandItem[] {
        return this.commandState.commandItems;
    }

}