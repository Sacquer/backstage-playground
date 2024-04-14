import { createRouteRef, createSubRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'my-plugin',
});
export const detailsRouteRef = createSubRouteRef({
  id: 'root-sub',
  parent: rootRouteRef,
  path: '/details',
});


