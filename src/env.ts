import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  POSTGRES_URL: z.string(),
  REDIS_URL: z.string(),
});

export const env = envSchema.parse(process.env);