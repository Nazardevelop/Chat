import { MESSAGES } from '../mocks/mock.messages';

export class MessageGenerator {
    message: string;

    constructor(message: string) {
        this.createMessage(message);
    }

    public createMessage(message: string): void {
        switch (message) {
            case 'Hello': {
                this.message = 'Whats up';
                break;
            }
            case 'I am sory': {
                this.message = 'Not a big deal';
                break;
            }
            case 'You are the best': {
                this.message = 'thanks)';
                break;
            }
            case 'You are bot': {
                this.message = 'Yes I am';
                break;
            }
            default: {
                const randomeMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
                this.message = randomeMessage;
                break;
             }
        }
    }
}
