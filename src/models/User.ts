interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => void;

export class User {
  private events: { [key: string]: Array<Callback> }={};
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }
  on(name: string, cb: Callback):void {
      const handlers = this.events[name]||[];
      handlers.push(cb);
      this.events[name]=handlers;
  }
}
