import React from 'react';
import { useSearch } from '@backstage/plugin-search-react';
import ChipInput from 'material-ui-chip-input';

export const CustomChipFilter = ({ name }) => {
  const { filters, setFilters } = useSearch();
  const chipValues = filters[name] || [];

  // When a chip value is changed, update the filters value by calling the
  // setFilters function from the search context.
  const handleChipChange = (chip, index) => {
    // There may be filters set for other fields. Be sure to maintain them.
    setFilters(prevState => {
      const { [name]: filter = [], ...others } = prevState;

      if (index === undefined) {
        filter.push(chip);
      } else {
        filter.splice(index, 1);
      }

      return { ...others, [name]: filter };
    });
  };

  return (
    <ChipInput
      value={chipValues}
      onAdd={handleChipChange}
      onDelete={handleChipChange}
    />
  );
};
