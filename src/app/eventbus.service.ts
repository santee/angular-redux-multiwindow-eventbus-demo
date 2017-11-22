import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import uuidv1 from 'uuid/v1';

const key = 'eventbus-key';

interface Message {
  id: string;
  sender: string;
  payload: any;
}

// Do not ever use this class, it's buggy! Multiple subscriptions/unsubscriptons to allMessages might lead to fantastic results
@Injectable()
export class EventbusService {

  private lastProcessedMessageId = null;

  private myself: string = uuidv1();

  constructor() { }

  public send(message: any) {
    const stack = this.getStack();
    const messageWithPayload: Message = { id: uuidv1(), sender: this.myself, payload: message };
    this.saveStack([...stack, messageWithPayload]);
  }

  public get allMessages() {
    let lastProcessedMessageId: string = null;

    return Observable
      .timer(0, 200)
      .map(() =>  this.getStack())
      .flatMap((stack) => {
        const tailIndex = stack.findIndex(x => x.id === lastProcessedMessageId);
        const tail = stack.filter((v, i) => i > tailIndex && this.myself !== v.sender);
        return Observable.from(tail);
      })
      .do(x => lastProcessedMessageId = x.id )
      .map(x => x.payload);
  }

  private getStack(): Message[] {
    return JSON.parse(localStorage[key] || '[]');
  }

  private saveStack(messages: any[]) {
    localStorage.setItem(key, JSON.stringify(messages));
  }
}
