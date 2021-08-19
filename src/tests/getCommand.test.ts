import { CommandRepository } from "../adapters/CommandRepository";
import { Pizza } from "../businesslogic/models/Pizza";
import { commandPizza } from "../businesslogic/usecases/commandPizza";
import { getCommand } from "../businesslogic/usecases/getCommand";

const marguerita: Pizza = {
    name: "Marguerita",
    price: 12
  }; 

test('should get 1 command when 1 is created', () => {
    
    commandPizza(marguerita);
    
    expect(getCommand().commandLines.length).toBe(1);
    expect(getCommand().commandLines[0].commandItem.pizza).toBe(marguerita);
    expect(getCommand().commandLines[0].total).toBe(12);
    expect(getCommand().numberOfItems).toBe(1);
    expect(getCommand().total).toBe(12);
});
