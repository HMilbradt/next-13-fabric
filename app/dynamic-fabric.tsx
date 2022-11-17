'use client';
import { useEffect } from 'react';

const DynamicFabric = () => {
  useEffect(() => {
    import('fabric').then(console.log);
  });

  return <></>;
};

export default DynamicFabric;
