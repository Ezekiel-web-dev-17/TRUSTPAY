import dotenv from "dotenv";
dotenv.config({
  path: `.env.${process.env.NODE_ENV === "development" ? "development" : "production"}.local`,
});

export const { PORT, ACCESS_SECRET, REFRESH_SECRET } = process.env;
