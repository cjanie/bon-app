import { PizzaQuery } from "../gateways/PizzaQuery";
import { Pizza } from "../models/Pizza";

export function getPizzas(pizzaQuery: PizzaQuery): Pizza[] {
    return pizzaQuery.getPizzas();
}