export class DataOptions {
  public constructor(init?: Partial<DataOptions>) {
    Object.assign(this, init);
  }

  results: number;
  days: number;
  minutes: number;
  start: string;
  end: string;
  timezone: string;
  round: number;
  timescale: string | number;
  sum: string | number;
  average: string | number;
  median: string | number;
}
