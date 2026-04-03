# Portfolio Visibility Worker

Tiny Cloudflare Worker that stores and serves the global audience visibility
config for the portfolio.

## Endpoints

- `GET /visibility-config`
- `POST /visibility-config`

## Setup

1. Create a Cloudflare KV namespace.
2. Put the namespace ID into `wrangler.toml` for the `VISIBILITY_CONFIG` binding.
3. Set the worker secret:

```bash
wrangler secret put ADMIN_PASSCODE
```

4. Optionally adjust `ALLOWED_ORIGINS` in `wrangler.toml`.
5. Deploy:

```bash
pnpm --filter @workspace/visibility-worker run deploy
```

## Portfolio wiring

Set `VITE_VISIBILITY_API_URL` in the portfolio build environment to the deployed
worker URL, for example:

```text
https://portfolio-visibility-api.<your-subdomain>.workers.dev
```

For GitHub Pages, add that value as the repository secret
`VITE_VISIBILITY_API_URL`.
