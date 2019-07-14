import { Field } from "./field";

/**
 * Holds data of a ThingSpeak channel
 */
export class Channel {
  id: number;
  name: string;
  description: string;
  fields: Field[];
}
