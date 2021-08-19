import { Command } from "../models/Command";
import { CommandItem } from "../models/CommandItem";

export interface CommandPost {

    sendCommand(commandItems: CommandItem[]): void;

}