import { lazy } from 'react';

export const createAsyncComponent = componentName => {
  // const componentName = path.match(/[a-zA-Z]+$/)[0];
  return lazy(() =>
    import(`components/${componentName}`).then(module => ({
      ...module,
      default: module[componentName],
    }))
  );
};
