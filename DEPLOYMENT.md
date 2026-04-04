# Free secure deployment (temporary)

This repository now includes a GitHub Pages workflow at:

- `.github/workflows/deploy-github-pages.yml`

## Steps to publish

1. Push this branch to GitHub.
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Merge this PR into `main` (or push directly to `main`).
5. Wait for the **Deploy portfolio to GitHub Pages** workflow to finish.

Your site will be available at:

- `https://<your-github-username>.github.io/<repository-name>/`

## Notes

- GitHub Pages provides HTTPS by default.
- This is free and works well until you buy a domain/hosting.
- Once you buy a domain, you can point DNS to GitHub Pages or migrate to another host.

## Cloudflare Web Analytics

The portfolio now supports Cloudflare Web Analytics when a token is present at
build time.

1. Create a Web Analytics site in Cloudflare for `mueeznarejo.github.io`.
2. Copy the site token from the generated beacon snippet.
3. In GitHub, add a repository secret named `VITE_CLOUDFLARE_ANALYTICS_TOKEN`.
4. Re-run the GitHub Pages deployment workflow.

If the secret is missing, the site still builds normally and simply skips
loading the analytics beacon.
