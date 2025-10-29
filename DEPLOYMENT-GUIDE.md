# 🚀 Portfolio Deployment Guide
**For Designers: Make Your Portfolio Live on the Internet!**

## What This Guide Does
This step-by-step guide will help you publish your portfolio website so anyone can visit it online. Think of it like moving your design from your computer to a public gallery where everyone can see it.

**You already have:**
- ✅ GitHub account
- ✅ Vercel account
- ✅ Your beautiful portfolio code

**After this guide:**
- 🌐 Your portfolio will be live on the internet
- 🔄 Updates will happen automatically when you make changes
- 📱 It will work perfectly on all devices

## ✅ Pre-Deployment Fixes Completed
- ✅ Added canonical URL and structured data for SEO
- ✅ Fixed accessibility issues (ARIA labels, skip navigation)
- ✅ Fixed footer navigation links
- ✅ Updated security dependencies (esbuild vulnerability)
- ✅ Added proper role attributes to decorative images
- ✅ 404 error page exists
- ✅ robots.txt and sitemap.xml configured

---

## Part 1: Push to GitHub

### Step 1: Initialize Git Repository
```bash
cd "/Users/karinhoffmann/Desktop/Portfolio September/Cursor Files/portfolio-design-light"
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Create Initial Commit
```bash
git commit -m "Initial portfolio launch - Fixed critical accessibility, SEO, and security issues

🚀 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 4: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** button (top right corner)
3. Select **"New repository"**
4. Repository settings:
   - **Name:** `portfolio-website` (or preferred name)
   - **Visibility:** Public ✅
   - **Initialize with README:** ❌ (DON'T check this)
   - **Add .gitignore:** None
   - **Choose a license:** None
5. Click **"Create repository"**

### Step 5: Connect Local to GitHub
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

**✅ Checkpoint:** Your code should now be visible on GitHub!

---

## Part 2: Deploy to Vercel

### Step 1: Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your repositories

### Step 2: Import Your Project
1. On Vercel dashboard: Click **"New Project"**
2. **Import Git Repository** section
3. Find your `portfolio-website` repository
4. Click **"Import"**

### Step 3: Configure Build Settings
**Critical Configuration (verify these settings):**

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node.js Version** | 18.x (recommended) |

### Step 4: Environment Variables (Optional)
- Most portfolios don't need environment variables
- If you have any API keys, add them here
- **Never commit API keys to GitHub!**

### Step 5: Deploy!
1. Click **"Deploy"**
2. ⏱️ Wait 2-4 minutes for build and deployment
3. 🎉 Get your live URL: `https://portfolio-website-xyz123.vercel.app`

**✅ Checkpoint:** Your portfolio should be live!

---

## Part 3: Custom Domain Setup (Optional but Recommended)

### Step 1: Purchase Domain
**Recommended Registrars:**
- **Namecheap** (budget-friendly)
- **Google Domains** (easy setup)
- **Cloudflare** (best performance)

**Suggested Domains:**
- `karinhoffmann.design`
- `karindesign.io`
- `yourname.design`

### Step 2: Add Domain to Vercel
1. In your Vercel project dashboard
2. **Settings** → **Domains**
3. **Add Domain**
4. Enter your domain (e.g., `karinhoffmann.design`)
5. Also add `www.karinhoffmann.design`

### Step 3: Configure DNS
Vercel will provide DNS instructions. Add these records to your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.19.61` |
| CNAME | www | `cname.vercel-dns.com` |

### Step 4: Update Your Site
Once domain is active, update your canonical URL in `index.html`:
```html
<link rel="canonical" href="https://karinhoffmann.design" />
```

Also update the structured data JSON-LD:
```json
"url": "https://karinhoffmann.design"
```

Then commit and push:
```bash
git add .
git commit -m "Update canonical URL to custom domain"
git push
```

---

## Part 4: Post-Launch Setup

### SEO & Analytics Setup

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. **Add Property** → **URL prefix**
3. Enter your domain: `https://karinhoffmann.design`
4. **Verify ownership** (multiple methods available)
5. **Submit sitemap:** `https://karinhoffmann.design/sitemap.xml`

#### Google Analytics (Optional)
1. Create [Google Analytics 4](https://analytics.google.com) account
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add to your `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Testing
Run these tests on your live site:

1. **Google PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev)
2. **GTmetrix:** [gtmetrix.com](https://gtmetrix.com)
3. **WebPageTest:** [webpagetest.org](https://webpagetest.org)

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## Part 5: Ongoing Maintenance

### Automatic Deployments
✅ **Automatic:** Every time you push to GitHub, Vercel automatically deploys!

### Development Workflow
```bash
# Make changes locally
npm run dev                    # Test changes

# When ready to deploy
git add .
git commit -m "Description of changes"
git push                       # Triggers automatic deployment
```

### Monitoring Your Site
1. **Vercel Dashboard:** Monitor deployments and performance
2. **Google Search Console:** Monitor SEO performance
3. **Google Analytics:** Track visitor behavior

---

## Part 6: Quick Reference Commands

### Local Development
```bash
npm run dev          # Start development server (http://localhost:8080)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Git Commands
```bash
git status           # Check what files have changed
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push            # Push to GitHub (triggers deployment)
```

### Troubleshooting
```bash
npm run build       # Test if build works locally
npm audit          # Check for security issues
npm update         # Update dependencies
```

---

## 📝 Important Files Checklist

Ensure these files exist and are configured:

- ✅ `index.html` - Has canonical URL and structured data
- ✅ `public/robots.txt` - SEO crawler instructions
- ✅ `public/sitemap.xml` - Site structure for search engines
- ✅ `src/pages/NotFound.tsx` - 404 error page
- ✅ `package.json` - Dependencies updated
- ✅ All images have proper alt text
- ✅ Footer links work correctly

---

## 🆘 Troubleshooting Common Issues

### Build Fails on Vercel
**Problem:** Build command fails
**Solution:**
1. Test locally: `npm run build`
2. Check Node.js version in Vercel settings
3. Ensure all dependencies are in `package.json`

### Custom Domain Not Working
**Problem:** Domain shows Vercel 404
**Solution:**
1. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
2. Wait 24-48 hours for full propagation
3. Verify DNS records match Vercel instructions

### Images Not Loading
**Problem:** Images work locally but not in production
**Solution:**
1. Ensure images are in `public/` folder
2. Use absolute paths: `/images/photo.jpg`
3. Check image file names (case-sensitive)

### Performance Issues
**Problem:** Low PageSpeed scores
**Solution:**
1. Optimize images (use WebP format)
2. Check bundle size: `npm run build`
3. Consider removing unused dependencies

---

## 🎉 Launch Checklist

Before announcing your portfolio:

### Technical Checks
- [ ] Site loads on desktop and mobile
- [ ] All navigation links work
- [ ] Contact email link works
- [ ] Project images load correctly
- [ ] Hover animations work
- [ ] 404 page displays correctly

### Content Checks
- [ ] Update LinkedIn URL in footer
- [ ] Add real resume PDF to `/public/resume.pdf`
- [ ] Proofread all text content
- [ ] Check project descriptions
- [ ] Verify contact information

### SEO Checks
- [ ] Google Search Console set up
- [ ] Sitemap submitted
- [ ] Meta descriptions accurate
- [ ] Image alt text descriptive

### Performance Checks
- [ ] PageSpeed Insights score 90+
- [ ] Site loads in under 3 seconds
- [ ] Mobile experience smooth

---

## 🔗 Useful Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Documentation:** [docs.github.com](https://docs.github.com)
- **Web.dev:** [web.dev](https://web.dev) - Performance guides
- **MDN Web Docs:** [developer.mozilla.org](https://developer.mozilla.org)

---

## 🎯 Success! Your Portfolio is Live

Congratulations! Your portfolio is now professionally deployed with:
- ✅ Production-ready build
- ✅ Automatic deployments
- ✅ SEO optimization
- ✅ Accessibility compliance
- ✅ Security best practices
- ✅ Custom domain capability
- ✅ Performance monitoring

**Share your portfolio with confidence! 🚀**

---

*Generated with Claude Code - Your AI coding assistant*