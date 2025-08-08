# Next.js + TailwindCSS File Browser

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/pages/new)

A modern file browser application built with Next.js and TailwindCSS, ready to deploy on Cloudflare Pages.

## Features

- 🖥️ Clean, responsive UI with TailwindCSS
- 📂 Directory navigation
- 🔄 Upstream sync configuration for forks
- ☁️ Ready for Cloudflare Pages deployment

## Getting Started

### Prerequisites

- Node.js 16.14 or later
- npm or yarn
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/haoqi75/nextjs-file-browser.git
   cd nextjs-file-browser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Cloudflare Pages

1. Push your code to a GitHub repository
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
5. Click "Save and Deploy"

## Upstream Sync Configuration

If you've forked this repository, you can keep your fork updated with these steps:

1. Add the original repository as upstream:
   ```bash
   git remote add upstream https://github.com/<original-username>/nextjs-file-browser.git
   ```

2. Fetch updates from upstream:
   ```bash
   git fetch upstream
   ```

3. Merge updates into your local branch:
   ```bash
   git merge upstream/main
   ```

4. Push updates to your fork:
   ```bash
   git push origin main
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
