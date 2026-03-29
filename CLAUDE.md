# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Kris Turk (kristurk.com) - a static website hosted on Azure Static Web Apps with serverless Azure Functions for API endpoints. The site positions Kris as an AI and cloud technology leader, showcasing content on AI adoption, Azure architecture, YouTube videos, blog posts, and professional information. kristurk.com is the personal brand site; hybrit.co.nz is the company service site.

## Architecture

**Static Site + Serverless Functions**
- Pure HTML/CSS/JavaScript (no build process required)
- Bootstrap 5 for UI framework
- Component-based architecture using vanilla JavaScript
- Azure Functions (Node.js) for API endpoints in `api/` directory
- Deployed via GitHub Actions to Azure Static Web Apps

**Component System**
The site uses a manual component system where shared UI elements are loaded via JavaScript:
- [components/head.js](components/head.js) - Common head content (meta tags, CSS links)
- [components/navbar.js](components/navbar.js) - Navigation bar with path-aware routing
- [components/footer.js](components/footer.js) - Footer with social links

Components are loaded into placeholder divs (`<div id="navbar-placeholder"></div>`) on each page. The navbar component handles relative paths automatically for subdirectories (e.g., blog-posts/).

## Local Development

**Running the site locally:**
```bash
# For static pages only - use any HTTP server
python -m http.server 8000
# or
npx http-server

# For testing Azure Functions locally
cd api
npm install
func start
```

The Azure Functions Core Tools (`func`) must be installed to run the API locally. The API endpoint `/api/config` returns YouTube API configuration from environment variables.

## Deployment

Deployment is fully automated via [GitHub Actions](.github/workflows/azure-static-web-apps-yellow-bush-036025e00.yml):
- Pushes to `main` trigger deployment
- No build step (`skip_app_build: true`) since files are static
- `app_location: "/"` - static content at root
- `api_location: "api"` - Azure Functions in api/ directory
- `output_location: "."` - no separate build output

## Configuration

**Environment Variables (Azure Functions)**
Stored in [local.settings.json](local.settings.json) for local development:
- `YOUTUBE_API_KEY` - YouTube Data API v3 key
- `CHANNEL_ID` - YouTube channel identifier

**IMPORTANT:** [local.settings.json](local.settings.json) contains actual API keys and is gitignored in production. In Azure, these are configured as application settings.

**Client Configuration**
[js/config.js](js/config.js) contains client-side configuration. Copy from [js/config.example.js](js/config.example.js) if missing. This file is gitignored.

## File Structure

```
.
├── api/                        # Azure Functions (serverless API)
│   ├── config/                 # Function: Returns YouTube API config
│   │   ├── function.json       # Function binding configuration
│   │   └── index.js            # Function handler
│   └── package.json
├── blog-posts/                 # Blog post HTML files
├── components/                 # Reusable UI components (JS)
│   ├── head.js
│   ├── navbar.js
│   └── footer.js
├── data/                       # Static JSON data
│   ├── videos.json             # YouTube video metadata
│   └── testimonials.json
├── images/                     # Image assets
├── js/                         # Client-side JavaScript
│   ├── config.js               # API keys (gitignored)
│   └── config.example.js
├── index.html                  # Homepage
├── youtube.html                # YouTube content page with search
├── blog.html                   # Blog listing page
├── contact.html                # Contact page
├── template.html               # Template for new pages
├── styles.css                  # Global styles
└── local.settings.json         # Azure Functions local config (gitignored)
```

## Key Patterns

**Creating a New Page**
1. Copy [template.html](template.html)
2. Update the title in the `<title>` tag
3. Add page-specific content between navbar and footer placeholders
4. Components (navbar, footer) load automatically via JavaScript

**Path Handling in Components**
[components/navbar.js](components/navbar.js) detects subdirectories and adjusts paths:
```javascript
const isInBlogPosts = window.location.pathname.includes('blog-posts');
const prefix = isInBlogPosts ? '../' : './';
```
When adding new subdirectories, ensure this pattern is extended if needed.

**YouTube Integration**
- [youtube.html](youtube.html) fetches API config from `/api/config`
- Falls back to [data/videos.json](data/videos.json) if API fails
- Includes search/filter functionality
- Videos loaded on-demand with Intersection Observer for performance

**Data Files**
JSON files in [data/](data/) directory contain static content that can be edited without changing HTML:
- [data/videos.json](data/videos.json) - YouTube video metadata with IDs, titles, descriptions
- [data/testimonials.json](data/testimonials.json) - Client testimonials

## Important Notes

- **No build process** - changes to HTML/CSS/JS are immediately deployable
- **API keys** - Never commit [local.settings.json](local.settings.json) or [js/config.js](js/config.js)
- **Bootstrap version** - Currently using Bootstrap 5.3.0 from CDN
- **Mobile responsiveness** - Navbar has custom mobile toggle styling with orange background
- **SEO** - Pages include Open Graph and Twitter Card meta tags
