import { ThingSpeakChannel } from "./thing-speak-channel";
import { ThingSpeakEntry } from "./thing-speak-entry";

/**
 * Is returned when ThingSpeak JSON API is called.<br/>
 * See https://de.mathworks.com/help/thingspeak/readdata.html for details
 */
export class ThingSpeakDataResponse {
  channel: ThingSpeakChannel;
  feeds: ThingSpeakEntry[];
}
