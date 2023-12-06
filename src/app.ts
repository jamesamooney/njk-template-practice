import express, { Request, Response } from 'express';
import dotenv from "dotenv"
import * as path from "path"
import { configureNunjucks } from './config/nunjucks';

dotenv.config()

async function createApp(): Promise<express.Application> {
  const app: express.Application = express()

  const APP_VIEWS = [
    path.join(__dirname, "../src/views"),
    path.join(__dirname, "../src/views/journeys/prod"),
    path.resolve("node_modules/govuk-frontend/")
  ]

  app.use(express.static(path.join(__dirname, "public")))
  app.use("/public", express.static(path.join(__dirname, "public")))
  app.set("view engine", configureNunjucks(app, APP_VIEWS))

  return app
}

export { createApp }