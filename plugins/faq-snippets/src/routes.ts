import { createExternalRouteRef, createRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'faq-snippets',
});

export const catalogIndexPageRef = createExternalRouteRef({
  id: 'catalog-index-page',
  optional: true,
});

