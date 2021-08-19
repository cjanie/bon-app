import { Command }from '../models/Command'
export interface CommandQuery {

    find: () => Command
    
}