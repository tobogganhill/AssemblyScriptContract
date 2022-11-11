import {storage, Context, logging} from "near-sdk-as";

export class Greeting {

    getGreeting(accountId: string): string|null {
        logging.log("Retrieving greeting for " + accountId);
        return storage.get<string>(accountId,"Greeting not available");
    }

    setGreeting(greeting: string): void {
        logging.log("Setting greeting for " + Context.sender);
        logging.log("Setting greeting to " + greeting);
        storage.set(Context.sender, greeting);
    }
}