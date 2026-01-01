import jwt, { Secret } from "jsonwebtoken";
import { ACCESS_SECRET, REFRESH_SECRET } from "../config/env.config.js";

if (!ACCESS_SECRET || !REFRESH_SECRET) {
  const error = new Error("Access or Refresh secret not provided");
  throw error;
}

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, ACCESS_SECRET as Secret, {
    expiresIn: "15m",
  });

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, REFRESH_SECRET as Secret, {
    expiresIn: "7d",
  });
