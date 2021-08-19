
import { CommandRepository } from "../../adapters/CommandRepository";
import { PizzaCommand } from "../gateways/PizzaCommand";
import { Pizza } from "../models/Pizza";

export function commandPizza(pizza: Pizza): void {
    const pizzaCommand: PizzaCommand = new CommandRepository();
    pizzaCommand.command(pizza);
}