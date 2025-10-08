import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post('/subscription', {
    schema: {
      summary: 'Subscribes someone to an event.',
      tags: ['event'],
      body: z.object({
        name: z.string(),
        email: z.email(),
      }),
      response: {
        201: z.object({
          name: z.string(),
          email: z.email(),
        })
      }
    }
  }, async (request, reply) => {
    const { email, name } = request.body;

    return reply.status(201).send({ email, name })
  });
};