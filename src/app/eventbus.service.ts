import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import uuidv1 from 'uuid/v1';
import { Effect } from '@ngrx/effects';

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

  private getMessagesSource(ignoreSelf: boolean) {
    let lastProcessedMessageId: string = null;
    return Observable
      .timer(0, 200)
      .map(() => this.getStack())
      .flatMap((stack) => {
        const tailIndex = stack.findIndex(x => x.id === lastProcessedMessageId);
        const tail = stack.filter((v, i) => i > tailIndex && (this.myself !== v.sender || !ignoreSelf ));
        return Observable.from(tail);
      })
      .do(x => lastProcessedMessageId = x.id)
      .map(x => x.payload)
      .filter(x => typeof (x.type) === 'string');
  }

  @Effect()
  public messages() {
    return this.getMessagesSource(true);
  }

  public get allMessages() {
    return this.getMessagesSource(false);
  }

  private getStack(): Message[] {
    return JSON.parse(localStorage[key] || '[]');
  }

  private saveStack(messages: any[]) {
    localStorage.setItem(key, JSON.stringify(messages));
  }
}
