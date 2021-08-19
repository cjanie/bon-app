import { Pizza } from "../businesslogic/models/Pizza";
import { InMemoryPizzaQuery } from "./InMemoryPizzaQuery";

export class FakePizzaQuery extends InMemoryPizzaQuery {

    constructor() {
        super();
        this.setPizzas([
            {
                name: "Pizza Marguerita",
                price: 10.5
            },
            {
                name: "Pizza aux anchoix",
                price: 11.9
            },
            {
                name: "Pizza végétarienne",
                price: 12
            },
            {
                name: "Pizza Else",
                price: 10.5
            },
            {
                name: "Pizza au choix",
                price: 11.9
            },
            {
                name: "Pizza Lulu",
                price: 12
            },
            {
                name: "Pizza é",
                price: 10.5
            },
            {
                name: "Pizza ouaou",
                price: 11.9
            },
            {
                name: "Pizza ohoh",
                price: 12
            },
            {
                name: "Pizza topla",
                price: 10.5
            },
            {
                name: "Pizza tohfa",
                price: 11.9
            },
            {
                name: "Pizza italia",
                price: 12
            }
        ] as Pizza[]);
    }
    
}