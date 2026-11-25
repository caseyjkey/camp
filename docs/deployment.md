# Deployment and DNS

## Recommended hosting

The first release is a static Astro site, so a VPS is unnecessary. GitHub Pages, Cloudflare Pages, Netlify, or Vercel can host the generated `dist/` directory. GitHub Pages is sufficient if the repository is public and the deployment workflow is acceptable; Cloudflare Pages is also a good fit if DNS is already managed through Cloudflare.

Do not expose Raspberry Pis or student infrastructure to the public internet for this site. Those are separate learning environments; the public curriculum should remain a static deployment.

## DNS for `camp.keycasey.com`

The exact record depends on the chosen host:

### GitHub Pages (recommended for this first release)

Add a custom domain in the repository's Pages settings, then create:

```text
Type: CNAME
Name: camp
Target: caseyjkey.github.io
```

Create the DNS record at the provider currently authoritative for `keycasey.com`. The repository already contains `public/CNAME` with `camp.keycasey.com`. In the GitHub repository settings, enable Pages with **GitHub Actions** as the source and set the custom domain to `camp.keycasey.com`.

GitHub may request an additional verification TXT record. If it does, add that record exactly as shown in the Pages settings.

### Cloudflare Pages, Netlify, or Vercel

Add `camp.keycasey.com` in that provider's project settings first. The provider will display the authoritative target, usually a CNAME. Create the record exactly as shown there and enable HTTPS in the provider dashboard.

## Existing portfolio site

The portfolio repository currently builds with Astro but is a Gatsby-named GitHub repository and has uncommitted work. The Key Camp portfolio card and hidden blog post should be added there as a separate, carefully isolated change after the camp site has a working URL.
