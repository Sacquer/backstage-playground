import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * carmenPlugin backend plugin
 *
 * @public
 */
export const carmenPlugin = createBackendPlugin({
  pluginId: 'carmenPlugin',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        identity: coreServices.identity,
        database: coreServices.database,
        permissions: coreServices.permissions,
        logger: coreServices.logger,
      },
      async init({ httpRouter, permissions, identity, database, logger }) {
        httpRouter.use(await createRouter({ identity, permissions, database, logger }));
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
