import express from 'express'
import * as nunjucks from 'nunjucks'
import { Environment } from 'nunjucks'

export function configureNunjucks(
  app: express.Application,
  viewsPath: string[]
): Environment {
  const nunjucksEnv: nunjucks.Environment = nunjucks.configure(viewsPath, {
    autoescape: true,
    express: app,
    noCache: true
  })

  return nunjucksEnv
}