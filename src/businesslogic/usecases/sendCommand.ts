import { CommandPost } from "../gateways/CommandPost";

import { CommandItem } from "../models/CommandItem";

export function sendCommand(commandPost: CommandPost, commandItems: CommandItem[]) {

    commandPost.sendCommand(commandItems);

}