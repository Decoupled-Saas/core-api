import express from 'express';
import { StatusCodes } from 'http-status-codes';
const createServer = (): express.Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.disable('x-powered-by');

  app.get('/health', (_req, res) => {
    res.json({status: 'up', version: process.env.npm_package_version}).status(StatusCodes.OK);
  });

  return app;
};

export { createServer };
