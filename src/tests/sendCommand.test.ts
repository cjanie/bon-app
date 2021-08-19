import { CommandRepository } from "../adapters/CommandRepository";
import { commandState } from "../businesslogic/CommandState";
import { commandStatus } from "../businesslogic/CommandStatus";
import { Command } from "../businesslogic/models/Command";
import { CommandItem } from "../businesslogic/models/CommandItem";
import { CommandLine } from "../businesslogic/models/CommandLine";
import { sendCommand } from "../businesslogic/usecases/sendCommand";

test('command status is SENT when sent with success', () => {
    
    const commandItems = [] as CommandItem[];
    sendCommand(new CommandRepository, commandItems);
    expect(commandState.commandStatus).toBe(commandStatus.SENT);
});