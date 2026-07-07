# Deployment Guide - Kiria Arts Gallery

## 📦 Step 1: Push to GitHub

### Option A: Using the Script
1. Create a new repository on GitHub: https://github.com/new
   - Name: `kiria-art-gallery`
   - Don't initialize with README
2. Run the script:
   ```powershell
   .\push-to-github.ps1
   ```
3. Enter your GitHub username when prompted

### Option B: Manual Push
1. Create a new repository on GitHub
2. Run these commands:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/kiria-art-gallery.git
   git branch -M main
   git push -u origin main
   ```

---

## 🚀 Step 2: Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: https://vercel.com/
2. **Sign in** with your GitHub account
3. **Click "Add New"** → **"Project"**
4. **Import your GitHub repository**: `kiria-art-gallery`
5. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
6. **Environment Variables** (Optional):
   - Add `GEMINI_API_KEY` if needed for AI features
7. **Click "Deploy"**

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to existing project or create new
   - Confirm settings

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## 🔧 Build Configuration

The project is already configured for Vercel deployment:

- ✅ **Build Command**: `npm run build` (defined in package.json)
- ✅ **Output Directory**: `dist` (Vite default)
- ✅ **Framework**: Vite + React
- ✅ **Node Version**: Auto-detected from package.json

---

## 🌍 Environment Variables (Optional)

If you plan to use Gemini AI features, add this in Vercel:

```
GEMINI_API_KEY=your_actual_api_key_here
```

**How to add in Vercel:**
1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Add `GEMINI_API_KEY`
4. Redeploy the project

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Gallery page displays all artworks
- [ ] Images load properly
- [ ] WhatsApp links work
- [ ] Contact form/map loads
- [ ] Classes page displays correctly
- [ ] Cart functionality works
- [ ] Mobile responsiveness

---

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds automatically

---

## 📱 Custom Domain (Optional)

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain (e.g., kiriaarts.com)
3. Update DNS records as instructed
4. Wait for DNS propagation (5-48 hours)

---

## 🆘 Troubleshooting

### Build Fails
- Check Node version compatibility
- Verify all dependencies are in package.json
- Check build logs in Vercel dashboard

### Images Not Loading
- Ensure images are in `src/assets/`
- Check import paths in data.ts
- Verify images are committed to git

### WhatsApp Links Not Working
- Verify phone number format: 918951223940
- Check URL encoding in links

---

## 📞 Support

For issues with:
- **GitHub**: Check git status and remote URL
- **Vercel**: View deployment logs in dashboard
- **Build Errors**: Check the Vercel build logs

---

## 🎉 Success!

Your Kiria Arts Gallery will be live at:
- Production URL: `https://your-project-name.vercel.app`
- Custom Domain: `https://your-domain.com` (if configured)

**Expected Deploy Time**: 1-3 minutes
