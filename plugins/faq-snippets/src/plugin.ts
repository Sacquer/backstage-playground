import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const faqSnippetsPlugin = createPlugin({
  id: 'faq-snippets',
  routes: {
    root: rootRouteRef,
  },
});

export const FaqSnippetsPage = faqSnippetsPlugin.provide(
  createRoutableExtension({
    name: 'FaqSnippetsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
