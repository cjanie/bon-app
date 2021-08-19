import { CommandRepository } from "../../adapters/CommandRepository";
import { CommandQuery } from "../gateways/CommandQuery";
import { Command } from "../models/Command";

export function getCommand(): Command {
    const commandQuery: CommandQuery = new CommandRepository();
    return commandQuery.find();
}