import { MESSAGES } from '../mocks/mock.messages';

export class MessageGenerator {
    message: string;

    constructor(message: string) {
        this.createMessage(message);
    }

    public createMessage(message: string): void {
        switch (message) {
            case 'Privet': {
                this.message = 'Privet';
                break;
            }
            case 'Привет': {
                this.message = 'Привет';
                break;
            }
            case 'Idi nahuy': {
                this.message = 'Sosi pistrun';
                break;
            }
            case 'Иди нахуй': {
                this.message = 'Иди нахуй';
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
