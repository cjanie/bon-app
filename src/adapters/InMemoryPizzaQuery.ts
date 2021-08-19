import { PizzaQuery } from "../businesslogic/gateways/PizzaQuery";
import { Pizza } from "../businesslogic/models/Pizza";


export class InMemoryPizzaQuery implements PizzaQuery {

    protected pizzas: Pizza[] = [];
    
    setPizzas(pizzas: Pizza[]) {
        this.pizzas = pizzas;
    }

    getPizzas(): Pizza[] {
        return this.pizzas;
    }

}
