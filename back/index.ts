import * as hapi from '@hapi/hapi';
import * as inert from '@hapi/inert';
import * as vision from '@hapi/vision';
import * as dotenv from 'dotenv';
import dataSource from './ormconfig';
import * as HapiSwagger from 'hapi-swagger';

import routes from './src/router';

dotenv.config()

const srv = hapi.server({
  port: process.env.PORT || 4000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true,
    },
    files: {
      relativeTo: './data'
    }
  }
});

const plugins: any[] = [
  vision,
  inert,
];

srv.register(plugins).then(() => {
  srv.route(routes);

  srv.start().then(async () => {
    try {
      await dataSource.initialize();
      await dataSource.runMigrations();

      console.log(`server started on PORT ${process.env.PORT}`);
    } catch (e) {
      console.log(e.message)
    }
  });
});

srv.register({
  plugin: HapiSwagger,
  options: {
    info: {
      title: 'API Documentation',
      description: 'API Documentation',
    },
    jsonPath: '/documentation.json',
    documentationPath: '/documentation',
    schemes: ['http', 'https'],
    debug: true,
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
      },
    },
  },
});
