/**
 * Channel information which is returned from ThingSpeak JSON API
 */
export class ThingSpeakChannel {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  created_at: Date;
  updated_at: Date;
  last_entry_id: number;

  // TODO metadata : any
}
