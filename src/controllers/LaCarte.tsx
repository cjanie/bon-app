
import React from "react";
import { FakePizzaQuery } from "../adapters/FakePizzaQuery"
import { PizzaQuery } from "../businesslogic/gateways/PizzaQuery"
import { Pizza } from "../businesslogic/models/Pizza";
import { getPizzas } from "../businesslogic/usecases/getPizzas"
import { LaCartePizzaItem } from "./LaCartePizzaItem";

type Props = {
    pizzaQuery: PizzaQuery;
}

export class LaCarte extends React.Component<Props> {
    private pizzas: Pizza[] = getPizzas(new FakePizzaQuery());

    render() {
        return (
            <div>
                <div className="App-main">
                    <div>
                        {this.pizzas.map(pizza => (<LaCartePizzaItem key={pizza.name} pizza={pizza}/>))}
                    </div>
                </div>
                
            </div>
        );
    }

}