/**
 * Describes a field provided from ThingSpeak
 */
export class Field {
  constructor(
    public index: number,
    public name: string,
    public label: string
  ) {}
}
