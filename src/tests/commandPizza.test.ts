import { assert } from "console";
import { CommandRepository } from "../adapters/CommandRepository";
import { commandState } from "../businesslogic/CommandState";
import { CommandItem } from "../businesslogic/models/CommandItem";
import { Pizza } from "../businesslogic/models/Pizza";
import { commandPizza } from "../businesslogic/usecases/commandPizza";

const marguerita: Pizza = {
  name: "Marguerita",
  price: 12
};

const anchoix: Pizza = {
  name: "Anchoix",
  price: 12.5
};

const commandRepository: CommandRepository = new CommandRepository();

test('total of items is 1 when command  is 1 pizza', () => {
    commandState.commandItems = [] as CommandItem[];
    commandPizza(marguerita);
    expect(commandState.commandItems.length).toBe(1);
    expect(commandState.countNumberOfItems()).toBe(1);
  }
);


test('total of items is 2 when command is 2 Pizza', () => {
    commandState.commandItems = [] as CommandItem[];
    commandPizza(marguerita);
    commandPizza(anchoix);
    expect(commandState.commandItems.length).toBe(2);
  });

  test('only 1 command item for 2 Marguerita when Marguerita is twice ordered', () => {
    commandState.commandItems = [];
    commandPizza(marguerita);
    commandPizza(marguerita);
    expect(commandState.commandItems.length).toBe(1);
    expect(commandState.commandItems[0].quantity).toBe(2);
    expect(commandState.countNumberOfItems()).toBe(2);
  });

  test('only 2 command item for 2 Marguerita and 3 anchoix', () => {
    commandState.commandItems = [];
    commandPizza(marguerita);
    commandPizza(marguerita);
    expect(commandState.commandItems.length).toBe(1);
    commandPizza(anchoix);
    expect(commandState.commandItems.length).toBe(2);
    commandPizza(anchoix);
    commandPizza(anchoix);
    expect(commandState.commandItems.length).toBe(2);
    expect(commandState.commandItems[1].quantity).toBe(3);
    expect(commandState.countNumberOfItems()).toBe(5);
  });


  test('total is 24 euros for 2 marguerita at 12 euros', () => {
    commandState.commandItems = [] as CommandItem[];
    commandPizza(marguerita);
    commandPizza(marguerita);
    expect(commandState.commandItems.length).toBe(1);
    expect(commandState.commandItems[0].quantity).toBe(2);
    expect(commandState.countTotal()).toBe(24);
  });

  test('total is 36.5 euros for 2 marguerita at 12 plus anchoix at 12.5', () => {
    commandState.commandItems = [];
    commandPizza(marguerita);
    commandPizza(marguerita);
    commandPizza(anchoix);

    expect(commandState.countTotal()).toBe(36.5)
  });


