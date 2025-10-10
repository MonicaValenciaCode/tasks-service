import { Request, Response } from "express";

// Define a reusable mock for the Express Response object
export const mockResponse = () => {
  const res = {} as unknown as Response;
  res.status = jest.fn().mockReturnThis();
  res.json = jest.fn().mockReturnThis();
  res.send = jest.fn().mockReturnThis();
  return res;
};

// Define a reusable mock for the Express Request object
export const mockRequest = (body = {}, params = {}, query = {}) => {
  return {
    body,
    params,
    query,
  } as Request;
};
