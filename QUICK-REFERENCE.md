# 🚀 Quick Reference - Gallery Updates

## ⚡ 3-Step Process

### 1️⃣ Add Image
```
Copy your image → src/assets/my_artwork.jpeg
```

### 2️⃣ Update Data File
Open: `src/data.ts`

**Add import (top of file):**
```typescript
import myArtwork from './assets/my_artwork.jpeg';
```

**Add artwork data (in artworks array):**
```typescript
{
  id: '12',  // Next number
  title: 'Artwork Title',
  artist: 'Kiria Arts',
  price: 15000,
  category: 'Traditional',
  medium: 'Tanjore Painting',
  image: myArtwork,
  description: 'Full description here...',
  isNew: true,
  isSold: false
},
```

### 3️⃣ Push to GitHub
```bash
git add src/assets/my_artwork.jpeg src/data.ts
git commit -m "Add new artwork: [Name]"
git push origin main
```

**Done!** Auto-deploys in 2-3 minutes ✅

---

## 📋 Copy-Paste Template

```typescript
// 1. Add this import at the top
import artworkName from './assets/artwork_name.jpeg';

// 2. Add this to artworks array
{
  id: 'NEXT_NUMBER',
  title: 'Your Title',
  artist: 'Kiria Arts',
  price: 15000,
  category: 'Traditional',
  medium: 'Tanjore Painting',
  image: artworkName,
  description: 'Description...',
  isNew: true,
  isSold: false
},
```

---

## 🎯 Field Options

### Categories:
- `'Traditional'`
- `'Abstract'`
- `'Landscape'`
- `'Portrait'`
- `'Still Life'`
- `'Urban'`
- `'Crafts'`

### Mediums:
- `'Tanjore Painting'`
- `'Oil'`
- `'Acrylic'`
- `'Watercolor'`
- `'Mixed Media'`
- `'Digital'`
- `'Clay'`

### Artists:
- `'Kiria Arts'`
- `'Pavithra S'`
- `'Kalavathi G'`

---

## 🔄 Quick Updates

### Mark as Sold:
```typescript
isSold: true
```

### Change Price:
```typescript
price: 20000
```

### Remove "New" Badge:
```typescript
isNew: false
```

---

## 💻 Commands

### Test Locally:
```bash
npm run dev
```

### Build:
```bash
npm run build
```

### Check Status:
```bash
git status
```

### Push to GitHub:
```bash
git add .
git commit -m "Your message"
git push origin main
```

---

## 🔗 Quick Links

- **Local**: http://localhost:3000/
- **GitHub**: https://github.com/red-1165/kiria-arts-
- **Vercel**: https://vercel.com/dashboard
- **Data File**: `src/data.ts`
- **Assets Folder**: `src/assets/`

---

## ⚠️ Remember:

✅ Always use unique ID numbers  
✅ Import image before using it  
✅ Include commas between objects  
✅ Use string for ID: `'12'` not `12`  
✅ Test locally before pushing  

---

**See `HOW-TO-ADD-ARTWORKS.md` for detailed guide**
