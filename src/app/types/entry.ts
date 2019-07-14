/**
 * Holds data of a single entry of a field from ThingSpeak
 */
export class Entry {
  constructor(
    public id: number,
    public value: number,
    public timeStamp: Date
  ) {}
}
