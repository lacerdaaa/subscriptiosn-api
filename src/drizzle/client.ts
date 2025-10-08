import postgres from 'postgres';
import { } from 'drizzle-orm/postgres-js'
import { env } from '../env';
import { drizzle } from 'drizzle-orm/singlestore';
import { subscriptions } from './schema/subscriptions'

export const pg = postgres(env.POSTGRES_URL);
export const db = drizzle(pg, {
  schema: {
    subscriptions,
  }
});

