// tests/utils/requestHelper.ts
import request from "supertest";
import app from "../../src/app";

export const get = (endpoint: string) => request(app).get(endpoint);
