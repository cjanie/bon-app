import { CommandItem } from "./CommandItem";
import { CommandLine } from "./CommandLine";

export interface Command {
    commandLines: CommandLine[]
    numberOfItems: number | undefined
    total: number | undefined
}