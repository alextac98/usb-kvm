# NanoKVM-USB Browser

This is the NanoKVM-USB browser version project.

Online website: [usbkvm.sipeed.com](https://usbkvm.sipeed.com).

## Development

```shell
cd browser
pnpm install
pnpm dev
```

## Deployment

### GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

#### Setup Instructions

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", set:
     - Source: `GitHub Actions`

2. **Configure Custom Domain (DNS Setup):**
   - Add a `CNAME` record in your DNS provider:
     ```
     Type: CNAME
     Host: usbkvm (or the subdomain you want)
     Value: alextac98.github.io (or your GitHub username.github.io)
     TTL: 3600 (or default)
     ```
   - Wait for DNS propagation (can take up to 48 hours, usually faster)

3. **Automatic Deployment:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - View deployment status in the "Actions" tab

4. **Access Your Site:**
   - Once deployed: `https://usbkvm.alextac.com`
   - Or via GitHub Pages URL: `https://alextac98.github.io/USB-KVM/`

#### Manual Local Deployment

If you want to deploy manually or test locally:

1. Execute `pnpm build` to build the project.
2. Execute `npm install -g http-server` to install http-server.
3. Execute `http-server dist -p 8080 -a localhost` to run the service.
4. Open the Chrome browser and visit `http://localhost:8080`.

#### Files Created for GitHub Pages

- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment
- `browser/public/CNAME` - Custom domain configuration
- Updated `vite.config.ts` with proper base path configuration

