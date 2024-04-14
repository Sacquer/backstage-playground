import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myPluginSoftwareCatalogPlugin, MyPluginSoftwareCatalogPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myPluginSoftwareCatalogPlugin)
  .addPage({
    element: <MyPluginSoftwareCatalogPage />,
    title: 'Root Page',
    path: '/my-plugin-software-catalog',
  })
  .render();
