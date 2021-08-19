import { CommandItem } from "./models/CommandItem";
import { Pizza } from "./models/Pizza";

export interface CommandState {
    commandItems: CommandItem[]
    commandPizza: (pizza: Pizza) => void
    countNumberOfItems: () => number
    countTotalOfCommandItem: (commandItem: CommandItem) => number
    countTotal: () => number
    commandStatus: string | undefined
}

export const commandState: CommandState = {

    commandItems: [] as CommandItem[],

    commandPizza: (pizza: Pizza) => {

        let found: CommandItem = commandState.commandItems.find(commandItem => commandItem.pizza.name === pizza.name)!;
        if(found === undefined) {
            commandState.commandItems.push({
                pizza: pizza,
                quantity: 1
            });
        } else {
            found.quantity += 1; 
        }
    },

    countNumberOfItems: (): number => {
         let totalOfItems = 0
         commandState.commandItems.forEach((commandItem) => {
            totalOfItems += commandItem.quantity
         });
         return totalOfItems;
    },

    countTotalOfCommandItem: (commandItem: CommandItem): number => {
        return commandItem.pizza.price * commandItem.quantity;
    },

    countTotal: (): number => {
        let total = 0;
        commandState.commandItems.forEach((commandItem: CommandItem) => {
            total += commandState.countTotalOfCommandItem(commandItem);
        }); 
        return total;
    },

    commandStatus: undefined  
    
}