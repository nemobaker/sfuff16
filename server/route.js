import renderIndex from './requestHandler';

export default (app) => {
  app.get('/', renderIndex);
};

