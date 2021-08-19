import { Pizza } from "../models/Pizza";

export interface PizzaQuery {
    getPizzas(): Pizza[] 
}

