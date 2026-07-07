# 🚀 Quick Push to GitHub - 3 Methods

## ⚡ Method 1: Personal Access Token (Fastest)

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens/new
2. Token name: `Kiria Arts Deployment`
3. Expiration: `90 days`
4. Scopes: Check **`repo`** (Full control)
5. Click **Generate token**
6. **COPY THE TOKEN** (starts with `ghp_...`)

### Step 2: Push with Token
```bash
git push https://YOUR_TOKEN@github.com/red-1165/kiria-arts-.git main
```

Replace `YOUR_TOKEN` with your actual token.

---

## 🔐 Method 2: GitHub CLI (Recommended)

### Install GitHub CLI:
```powershell
winget install GitHub.cli
```

### Authenticate & Push:
```bash
gh auth login
git push -u origin main
```

---

## 🌐 Method 3: Browser Authentication

### Clear cached credentials:
```powershell
.\fix-github-auth.ps1
```
Choose option 2, then:

```bash
git push -u origin main
```

You'll see a browser popup to authenticate.

---

## ✅ After Successful Push

Your code will be at: https://github.com/red-1165/kiria-arts-

Then proceed to **Vercel Deployment**:
1. Go to: https://vercel.com/new
2. Sign in with GitHub
3. Import: `red-1165/kiria-arts-`
4. Click **Deploy**

---

## 🆘 Still Having Issues?

Run the fix script:
```powershell
.\fix-github-auth.ps1
```

Or manually change to SSH:
```bash
git remote set-url origin git@github.com:red-1165/kiria-arts-.git
git push -u origin main
```

Make sure SSH key is added to GitHub:
https://github.com/settings/keys
