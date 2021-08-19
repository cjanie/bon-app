import React from "react";
import { Pizza } from "../businesslogic/models/Pizza";
import { commandPizza } from "../businesslogic/usecases/commandPizza";

type Props = {
    pizza: Pizza
}
export class LaCartePizzaItem extends React.Component<Props> {

    selectPizza(pizza: Pizza) {
        commandPizza(pizza);
    }

    render() {
        return (
            <div className="App-card" onClick={(event) => this.selectPizza(this.props.pizza)}>
                <div className="float-right">{this.props.pizza.price}</div>
                <div className="float-left">{this.props.pizza.name}</div>
            </div>
        );
    }
}