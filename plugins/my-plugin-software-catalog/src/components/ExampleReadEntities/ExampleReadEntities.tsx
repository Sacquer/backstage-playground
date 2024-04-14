import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';

export const ExampleReadEntities = () => {
  const entity = useEntity();

  // eslint-disable-next-line no-console
  console.info({ entity });


  // Do something with the entity data...

  return (
    <>
      <h1>ExampleReadEntities</h1>
    </>
  )
}

