import { rest } from 'msw'

export const handlers = [
  rest.get('*years*', (req, res, ctx) => {
    return res(ctx.json({"data":["one","two","three","four"]}))
  }),
  rest.get('*makes*', (req, res, ctx) => {
    return res(ctx.json({"data":["Make 1","Make 2","Make 3","Make 4"]}))
  }),
  rest.get('*models*', (req, res, ctx) => {
    return res(ctx.json({"data":["Model A","Model B","Model C","Model D"]}))
  }),
]