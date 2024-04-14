import React from 'react';
import {
  Content,
  ContentHeader,
  PageWithHeader,
} from '@backstage/core-components';
import { SearchBar, SearchResult, SearchContextProvider } from '@backstage/plugin-search-react';
import { CustomChipFilter } from '../custom-chip';

export const ManageMyWidgets = () => {
  // const { primaryTeam } = useProfile();
  // In this example, note how we are pre-filtering results down to a specific
  // owner field value (the currently logged-in user's team), but allowing the
  // search term to be controlled by the user via the <SearchBar /> component.
  const preFiltered = {
    types: ['software-catalog', 'techdocs'],
    term: '',
    filters: {},
    // filters: {
    //   owner: 'guests',
    // },
  };

  return (
    <PageWithHeader title="Widgets Home" type='' themeId=''>
      <Content>
        <ContentHeader title="All your Widgets and More" />
        <SearchContextProvider initialState={preFiltered}>
          <CustomChipFilter name='name' />
          <SearchBar />
          <SearchResult>
            {/* Render results here, just like above */}
          </SearchResult>
        </SearchContextProvider>
      </Content>
    </PageWithHeader>
  );
};
