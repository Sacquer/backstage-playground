import { errorHandler } from '@backstage/backend-common';
import { getBearerTokenFromAuthorizationHeader } from '@backstage/plugin-auth-node';
import { IdentityService, LoggerService, PermissionsService, DatabaseService as PluginDatabaseManager } from '@backstage/backend-plugin-api';
import express from 'express';
import Router from 'express-promise-router';

export interface RouterOptions {
  logger: LoggerService;
  identity: IdentityService;
  database: PluginDatabaseManager;
  permissions: PermissionsService;
}

export const getBearerToken = (header?: string): string | undefined => {
  return header?.match(/Bearer\s+(\S+)/i)?.[1];
};

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (req, response) => {
    logger.info('PONG!');

    const token = getBearerTokenFromAuthorizationHeader(req.headers.authorization);
    console.info('-------------------------------------\n');
    console.info({ token });
    console.info('-------------------------------------\n');

    response.json({ status: 'ok' });
  });

  router.use(errorHandler());
  return router;
}
