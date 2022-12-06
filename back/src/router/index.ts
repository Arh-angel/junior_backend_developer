import * as hapi from '@hapi/hapi';
import * as joi from 'joi';
import standartController from '../controllers/Standart/standart-controller';

export default [
  {
    method: 'POST',
    path: '/createStandart',
    options: {
      description: 'create standart',
      notes: 'Router for create standart',
      tags: ['api', 'standart'],
      validate: {
        payload: joi.object({
          designer: joi.number().required(),
          title: joi.string().required()
        }),
      },
      plugins: {
        'hapi-swagger': {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    handler: (req:hapi.Request, h) => {
      return standartController.create(req.payload, h);
    }
  },
  // {
  //   method: 'GET',
  //   path: '/standarts',
  //   options: {
  //     description: 'get table standarts',
  //       notes: 'Router for table standarts',
  //       tags: ['api', 'user'],
  //       plugins: {
  //         'hapi-swagger': {
  //           '200': {
  //             description: 'OK',
  //           },
  //         },
  //       },
  //   },
  //   handler: (req: hapi.Request, h) => {
  //     return standartController.getUser(req, h);
  //   }
  // },
]
