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
