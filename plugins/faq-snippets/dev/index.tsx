import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { faqSnippetsPlugin, FaqSnippetsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(faqSnippetsPlugin)
  .addPage({
    element: <FaqSnippetsPage />,
    title: 'Root Page',
    path: '/faq-snippets',
  })
  .render();
