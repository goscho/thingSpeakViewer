import { TestBed } from "@angular/core/testing";

import { ThingSpeakService } from "./thing-speak.service";

describe("ThingSpeakService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ThingSpeakService = TestBed.get(ThingSpeakService);
    expect(service).toBeTruthy();
  });
});
