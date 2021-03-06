import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ThingSpeakChannel } from "./types/thing-speak-channel";
import { Observable, from } from "rxjs";
import { map, tap, switchMap, toArray } from "rxjs/operators";
import { ThingSpeakDataResponse } from "./types/thing-speak-data-response";
import { Entry } from "./types/entry";
import { Channel } from "./types/channel";
import { Field } from "./types/field";
import { DataOptions } from "./types/data-options";

const baseUrl = "https://api.thingspeak.com/channels/";

@Injectable({
  providedIn: "root"
})
export class ThingSpeakService {
  constructor(private http: HttpClient) {}

  getChanelInfo(channelId: number): Observable<Channel> {
    const dataUrl = this.getDataUrl(channelId);
    const options = { params: { results: "0" } };
    return this.http.get<ThingSpeakDataResponse>(dataUrl, options).pipe(
      tap(res => console.log(`getChanelInfo ${channelId}`, res)),
      map(res => this.convertToChannel(res.channel))
    );
  }

  getFieldValues(
    channelId: number,
    fieldIndex: number,
    dataOptions: DataOptions
  ): Observable<Entry[]> {
    const fieldUrl = this.getFieldUrl(channelId, fieldIndex);
    const params = this.convertToHttpParams(dataOptions);
    const options = { params: params };
    return this.http.get<ThingSpeakDataResponse>(fieldUrl, options).pipe(
      tap(res =>
        console.log(`getFieldValues ${channelId} - ${fieldIndex}`, res)
      ),
      switchMap(res => from(res.feeds)),
      map(
        entry =>
          new Entry(
            entry.entry_id,
            entry[`field${fieldIndex}`],
            entry.created_at
          )
      ),
      toArray()
    );
  }

  private getFieldUrl(channelId: number, fieldIndex: number): string {
    return `${baseUrl}${channelId}/fields/${fieldIndex}.json`;
  }

  private getDataUrl(channelId: number): string {
    return `${baseUrl}${channelId}/feeds.json`;
  }

  private convertToChannel(thingSpeakChannel: ThingSpeakChannel): Channel {
    const channel = new Channel();
    channel.id = thingSpeakChannel.id;
    channel.name = thingSpeakChannel.name;
    channel.description = thingSpeakChannel.description;
    channel.fields = this.getAvailableFields(thingSpeakChannel);
    return channel;
  }

  private getAvailableFields(channel: ThingSpeakChannel): Field[] {
    return Object.keys(channel)
      .filter(fieldName => fieldName.startsWith("field"))
      .map(
        fieldName =>
          new Field(
            this.extractFieldIndex(fieldName),
            fieldName,
            channel[fieldName]
          )
      );
  }

  private extractFieldIndex(fieldName: string): number {
    return parseInt(fieldName.replace("field", ""));
  }

  private convertToHttpParams(dataOptions: DataOptions) {
    let params = new HttpParams();
    Object.keys(dataOptions)
      .filter(key => dataOptions[key])
      .forEach(key => (params = params.append(key, dataOptions[key])));
    return params;
  }
}
