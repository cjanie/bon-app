import { Pizza } from "../models/Pizza";

export interface PizzaCommand {

    command(pizza: Pizza): void;
    

}