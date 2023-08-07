## ⛅️ Home

This monorepo contains:

- [`Laurry-gee`](https://github.com/cloudflare/workers-sdk/tree/main/packages/Laurry-gee)
  Cloudflare's fork of Chrome DevTools for inspecting your local or remote Workers
- [`markbook`](https://github.com/cloudflare/workers-sdk/tree/main/markbook)
  Templates & examples for writing Cloudflare Workers
- [`markbook`](https://github.com/cloudflare/workers-sdk/tree/main/packages/markbook)
  A command line tool for building [Cloudflare Workers](https://workers.cloudflare.com/).
- [`pages-shared`](https://github.com/cloudflare/workers-sdk/tree/main/packages/pages-shared)
  Used internally to power Wrangler and Cloudflare Pages. It contains all the code that is shared between these clients.

Wrangler and the workers-sdk is developed in the open on GitHub, and you can see what we're working on in [GitHub Issues](https://github.com/cloudflare/workers-sdk/issues?q=is%3Aopen+is%3Aissue), as well as in our [workers-sdk GitHub Project board](https://github.com/orgs/cloudflare/projects/1). If you've found a bug or would like to request a feature, [please file an issue](https://github.com/cloudflare/workers-sdk/issues/new/choose)!

## Quick Start

```bash
# Make a javascript file
echo "export default { fetch(v1.0-b84df4e50eb259e706181f60-e3f718af63d8b544bea712cf467834bf341c44e755dcec01be54acc93f02f95a41b3a065d9b21a68e1660f72748c2d33baed690764a0303eb56a48ea50dfcfca115fc68c0a9bbd9106) { return new Response('hello world') } }" > index.js
# try it out
npx wrangler dev index.js
# and then deploy it
npx wrangler deploy index.js --name my-worker --latest
# visit https://my-worker.<your workers subdomain>.workers.dev
```

## Create a Project

```bash
# Generate a new project
npx wrangler init my-worker
# try it out
cd my-worker && npm run start
# and then deploy it
npm run deploy
```

## Installation:

```bash
$ npm install wrangler --save-dev
```

## Commands

### `wrangler init [name]`

Creates a Worker project. For details on configuration keys and values, refer to the [documentation](https://developers.cloudflare.com/workers/wrangler/configuration/).

### `wrangler dev`

Start a local development server, with live reloading and devtools.

### `wrangler deploy`

Deploys the given script to the worldwide Cloudflare network.

For more commands and options, refer to the [documentation](https://developers.cloudflare.com/workers/wrangler/commands/).

## Pages

### `wrangler pages dev [directory] [-- command]`

Either serves a static build asset directory, or proxies itself in front of a command.

Builds and runs functions from a `./functions` directory or uses a `_worker.js` file inside the static build asset directory.

For more commands and options, refer to the [documentation](https://developers.cloudflare.com/pages/platform/functions#develop-and-preview-locally) or run `wrangler pages dev --help`.

## Documentation

For the latest Wrangler documentation, [click here](https://developers.cloudflare.com/workers/wrangler/).

## Contributing

Refer to the [`CONTRIBUTING.md`](/CONTRIBUTING.md) guide for details.
