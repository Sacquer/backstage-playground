import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myPluginSoftwareCatalogPlugin = createPlugin({
  id: 'my-plugin-software-catalog',
  routes: {
    root: rootRouteRef,
  },
});

export const MyPluginSoftwareCatalogPage = myPluginSoftwareCatalogPlugin.provide(
  createRoutableExtension({
    name: 'MyPluginSoftwareCatalogPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
