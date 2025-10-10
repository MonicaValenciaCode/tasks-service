/**
 * Integration tests - to test real requests hitting the Express app.
 */
import { get } from "../../../utils/requestHelper";

describe("Integration Tests - Express App", () => {
  it("should return testing route message", async () => {
    const res = await get("/api");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Tasks service API" });
  });

  it("should return error from not existing route /api/v1/notExisting", async () => {
    const res = await get("/api/v1/notExisting");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "not found" });
  });

  it("should return error from not prefixed route /notPrefixed", async () => {
    const res = await get("/notPrefixed");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "not found" });
  });
});
