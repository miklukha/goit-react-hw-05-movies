import { lazy } from 'react';

export const createAsyncComponent = (folder, componentName) => {
  return lazy(() =>
    import(`../${folder}/${componentName}`).then(module => ({
      ...module,
      default: module[componentName],
    }))
  );
};
