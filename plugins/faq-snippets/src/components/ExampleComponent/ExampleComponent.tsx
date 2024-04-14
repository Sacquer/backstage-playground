import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
  Link,
} from '@backstage/core-components';
import { useRouteRef } from '@backstage/core-plugin-api';

import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { ManageMyWidgets } from '../simple-search';
import { catalogIndexPageRef } from '../../routes';
import { myPluginSoftwareCatalogPlugin } from '@internal/backstage-plugin-my-plugin-software-catalog';

export const ExampleComponent = () => {
  const { routes: { root: myPluginSoftwareCatalogPageRef } } = myPluginSoftwareCatalogPlugin

  const catalogIndexPage = useRouteRef(catalogIndexPageRef);
  const myExamplePluginTabContent = useRouteRef(myPluginSoftwareCatalogPageRef);

  return (
    <Page themeId="tool">
      <Header title="Welcome to faq-snippets!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
        {catalogIndexPage && <Link to={catalogIndexPage()}>Catalog Index Page</Link>}
        {myExamplePluginTabContent && <Link to={myExamplePluginTabContent()}>My Plugin Software Catalog Page</Link>}
      </Header>
      <Content>
        <ContentHeader title="Plugin title">
          <SupportButton>A description of your plugin goes here.</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard title="Information card">
              <Typography variant="body1">
                All content should be wrapped in a card like this.
              </Typography>
            </InfoCard>
          </Grid>
          <Grid item>
            <ManageMyWidgets />
          </Grid>
          <Grid item>
            <ExampleFetchComponent />
          </Grid>
        </Grid>
      </Content>
    </Page>
  )
};
