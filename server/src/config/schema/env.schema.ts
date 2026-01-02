import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),

  PORT: z.coerce.number().int().positive().default(3000),

  DATABASE_URL: z.string().url(),

  ACCESS_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 chars"),

  REFRESH_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 chars"),

  //   IOTA_NODE_URL: z.string().url(),

  //   LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});
