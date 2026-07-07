# 🎨 How to Add New Artworks to Your Gallery

**Quick Guide**: Update your gallery in 3 simple steps!

---

## 📋 Quick Overview

To add a new artwork, you need to:
1. **Add the image** to the `src/assets/` folder
2. **Update the data** in `src/data.ts`
3. **Push to GitHub** (auto-deploys to Vercel!)

**Time Required**: 5 minutes per artwork

---

## 📝 Step-by-Step Guide

### Step 1: Add the Artwork Image

1. **Prepare your image**:
   - Format: JPEG or PNG (JPEG recommended)
   - Size: Recommended max 500KB (for fast loading)
   - Resolution: 1200x1200px or similar

2. **Copy the image**:
   - Place your image file in: `src/assets/`
   - Example: `src/assets/my_new_artwork.jpeg`

3. **Name it clearly**:
   - Use lowercase
   - Use underscores for spaces
   - Examples: `ganesha_painting.jpeg`, `lotus_resin.jpeg`

---

### Step 2: Update the Data File

Open `src/data.ts` and follow these instructions:

#### A. Import the Image (at the top of the file)

Add your import with the other images:

```typescript
// ADD YOUR NEW IMPORT HERE
import myNewArtwork from './assets/my_new_artwork.jpeg';

// Existing imports
import lyingGanesha1 from './assets/lying_ganesha1.jpeg';
// ... rest of imports
```

#### B. Add the Artwork Data

Scroll down to the `artworks` array and add your new artwork:

```typescript
export const artworks: Artwork[] = [
  // ADD YOUR NEW ARTWORK HERE (copy this template)
  {
    id: '12',  // Change this to next number (was 11, so now 12)
    title: 'Your Artwork Title',
    artist: 'Kiria Arts',  // or 'Pavithra S' or 'Kalavathi G'
    price: 15000,  // Price in rupees
    category: 'Traditional',  // Options: Traditional, Abstract, Landscape, Portrait, Still Life, Urban, Crafts
    medium: 'Tanjore Painting',  // Options: Oil, Acrylic, Watercolor, Mixed Media, Digital, Clay, Tanjore Painting
    image: myNewArtwork,  // Use the import name you created above
    description: 'Write a detailed description of your artwork here. Describe the style, colors, symbolism, and what makes it special.',
    isNew: true,  // Set to true for "New" badge, false to remove
    isSold: false  // Set to true if sold, false if available
  },
  
  // Existing artworks below...
  {
    id: '1',
    title: 'Bala Ganesha (without gold work)',
    // ... rest of existing data
  },
  // ... more artworks
];
```

---

### Step 3: Test Locally (Optional but Recommended)

Before pushing to GitHub, test locally:

```bash
npm run dev
```

Open http://localhost:3000/ and check:
- ✅ Image loads correctly
- ✅ Title and description appear
- ✅ Price shows properly
- ✅ Add to cart works

---

### Step 4: Push to GitHub (Auto-Deploys!)

```bash
# Add your changes
git add src/assets/my_new_artwork.jpeg
git add src/data.ts

# Commit with a clear message
git commit -m "Add new artwork: [Your Artwork Name]"

# Push to GitHub
git push origin main
```

**That's it!** Vercel will automatically:
- Detect the change
- Build your site
- Deploy the update
- Your new artwork is live in 2-3 minutes!

---

## 📋 Complete Template

Here's a copy-paste template for adding artwork:

### Image Import (add to top of `src/data.ts`):
```typescript
import myArtworkName from './assets/my_artwork_name.jpeg';
```

### Artwork Data (add to `artworks` array):
```typescript
{
  id: 'NEXT_NUMBER',
  title: 'Artwork Title',
  artist: 'Kiria Arts',
  price: 15000,
  category: 'Traditional',
  medium: 'Tanjore Painting',
  image: myArtworkName,
  description: 'Detailed description here...',
  isNew: true,
  isSold: false
},
```

---

## 🎯 Field Explanations

### Required Fields:

| Field | Description | Example |
|-------|-------------|---------|
| **id** | Unique number (string) | `'12'`, `'13'`, `'14'` |
| **title** | Artwork name | `'Divine Lotus'` |
| **artist** | Creator name | `'Kiria Arts'` or `'Pavithra S'` |
| **price** | Price in rupees (number) | `15000` (no commas) |
| **category** | Art category | See categories below |
| **medium** | Art medium | See mediums below |
| **image** | Image import variable | `myArtwork` |
| **description** | Detailed description | Full paragraph |

### Optional Badges:

| Field | Options | Effect |
|-------|---------|--------|
| **isNew** | `true` or `false` | Shows "New" badge |
| **isSold** | `true` or `false` | Shows "Sold" badge |

### Category Options:
- `'Traditional'` - For Tanjore, traditional Indian art
- `'Abstract'` - Modern abstract pieces
- `'Landscape'` - Scenic paintings
- `'Portrait'` - People/faces
- `'Still Life'` - Objects, flowers
- `'Urban'` - City scenes
- `'Crafts'` - Resin art, handmade items

### Medium Options:
- `'Tanjore Painting'` - Traditional Tanjore
- `'Oil'` - Oil paintings
- `'Acrylic'` - Acrylic paintings
- `'Watercolor'` - Watercolor art
- `'Mixed Media'` - Multiple techniques
- `'Digital'` - Digital art
- `'Clay'` - Clay crafts

---

## 🔄 How to Update Existing Artworks

### Change Price:
```typescript
{
  id: '5',
  // ... other fields
  price: 20000,  // Changed from 22000 to 20000
}
```

### Mark as Sold:
```typescript
{
  id: '3',
  // ... other fields
  isSold: true,  // Changed from false to true
}
```

### Remove "New" Badge:
```typescript
{
  id: '6',
  // ... other fields
  isNew: false,  // Changed from true to false
}
```

### Update Description:
```typescript
{
  id: '8',
  // ... other fields
  description: 'Updated description with more details...',
}
```

---

## 🗑️ How to Delete an Artwork

1. Open `src/data.ts`
2. Find the artwork in the `artworks` array
3. Delete the entire artwork object (including the comma)
4. **Optional**: Delete the image from `src/assets/` folder
5. **Optional**: Remove the import at the top (if not used elsewhere)
6. Commit and push:
   ```bash
   git add src/data.ts
   git commit -m "Remove artwork: [Artwork Name]"
   git push origin main
   ```

---

## 💡 Pro Tips

### 1. **Image Optimization**
Before adding images, compress them:
- Use online tools: TinyPNG, Squoosh, or Compressor.io
- Target: Under 300KB per image
- Quality: 85-90% is perfect

### 2. **Batch Adding Multiple Artworks**
Add multiple artworks in one commit:
```bash
git add src/assets/*.jpeg
git add src/data.ts
git commit -m "Add 5 new artworks: Ganesha series"
git push origin main
```

### 3. **Quick ID Numbers**
To find the next ID number, look at the last artwork in the array:
```typescript
// Last artwork has id: '11'
// Your new artwork should be id: '12'
```

### 4. **Preview Changes**
Always test locally before pushing:
```bash
npm run dev
# Check at http://localhost:3000/
```

### 5. **Revert Mistakes**
If you made a mistake:
```bash
# Undo last commit (keeps your changes)
git reset --soft HEAD~1

# Or discard all changes
git checkout -- src/data.ts
```

---

## 📱 Mobile Workflow (Optional)

### Using GitHub Web Editor:

1. Go to: https://github.com/red-1165/kiria-arts-
2. Navigate to `src/data.ts`
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click **Commit changes**

**For images**: You'll need to use desktop or the GitHub CLI

---

## 🚀 Automatic Deployment

Every time you push to GitHub:
- ✅ Vercel detects the change
- ✅ Runs `npm run build`
- ✅ Deploys automatically
- ✅ Takes 2-3 minutes
- ✅ No action needed!

You can watch the deployment at: https://vercel.com/dashboard

---

## ⚠️ Common Mistakes to Avoid

### ❌ Wrong:
```typescript
// Forgot to import image
{
  image: './assets/my_art.jpeg',  // ❌ This won't work!
}

// Missing comma
{
  id: '12',
  title: 'Art'  // ❌ Missing comma here
}
{
  id: '13',
  // ...
}

// Wrong ID format
{
  id: 12,  // ❌ Should be '12' (string, not number)
}
```

### ✅ Correct:
```typescript
// Import at top
import myArt from './assets/my_art.jpeg';

// Use import name
{
  image: myArt,  // ✅ Correct!
}

// Include comma
{
  id: '12',
  title: 'Art',  // ✅ Comma added
}

// String ID
{
  id: '12',  // ✅ String format
}
```

---

## 📞 Need Help?

If you get stuck:
1. Check the error message in terminal
2. Compare your code with existing artworks
3. Test locally with `npm run dev`
4. Make sure all commas are in place
5. Verify the image import name matches

---

## ✅ Quick Checklist

Before pushing:
- [ ] Image added to `src/assets/`
- [ ] Image imported at top of `src/data.ts`
- [ ] Artwork data added to array
- [ ] Unique ID number used
- [ ] All required fields filled
- [ ] Tested locally (optional)
- [ ] Committed with clear message
- [ ] Pushed to GitHub

---

## 🎉 Example: Complete Workflow

Let's add "Divine Lotus" painting:

### 1. Add image:
- Copy `divine_lotus.jpeg` to `src/assets/`

### 2. Open `src/data.ts` and add import:
```typescript
import divineLotus from './assets/divine_lotus.jpeg';
```

### 3. Add to artworks array:
```typescript
{
  id: '12',
  title: 'Divine Lotus',
  artist: 'Pavithra S',
  price: 18000,
  category: 'Traditional',
  medium: 'Tanjore Painting',
  image: divineLotus,
  description: 'A beautiful Tanjore painting featuring a sacred lotus flower, symbolizing purity and enlightenment. Adorned with 22-carat gold work.',
  isNew: true,
  isSold: false
},
```

### 4. Push to GitHub:
```bash
git add src/assets/divine_lotus.jpeg src/data.ts
git commit -m "Add new artwork: Divine Lotus"
git push origin main
```

### 5. Wait 2-3 minutes - Done! 🎉

---

**That's it! You can now easily manage your gallery!** 🎨✨
