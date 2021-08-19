import { assert } from 'console';
import { InMemoryPizzaQuery } from '../adapters/InMemoryPizzaQuery';
import { Pizza } from '../businesslogic/models/Pizza';
import { getPizzas } from '../businesslogic/usecases/getPizzas';

test('retrieve 1 pizza when there is 1 avaible', () => {
    // Arrange
    const pizza = {} as Pizza;
    const pizzaQuery = new InMemoryPizzaQuery();
    pizzaQuery.setPizzas([pizza]);
    // Act
    const retrievedPizzas: Pizza[] = getPizzas(pizzaQuery);
    // Assert
    expect(retrievedPizzas.length).toBe(1);  
  }
);

test('retrieve 2 pizzas when there are 2 available', () => {
    // Arrange
    const pizza1 = {} as Pizza;
    const pizza2 = {} as Pizza;
    const pizzas = [pizza1, pizza2] as Pizza[];
    const pizzaQuery = new InMemoryPizzaQuery();
    pizzaQuery.setPizzas(pizzas);
    // Act
    const retrievedPizzas: Pizza[] = getPizzas(pizzaQuery);
    // Assert
    expect(retrievedPizzas.length).toBe(2);
  }
)