# 🎨 Interactive Artwork Addition Script
# This script helps you add new artworks step-by-step

Write-Host "`n🎨 Kiria Arts - Add New Artwork" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Step 1: Get artwork details
Write-Host "📝 Step 1: Artwork Information" -ForegroundColor Yellow
Write-Host "------------------------------`n" -ForegroundColor Yellow

$artworkName = Read-Host "Artwork Title (e.g., Divine Lotus)"
$artist = Read-Host "Artist Name (default: Kiria Arts)"
if ([string]::IsNullOrWhiteSpace($artist)) { $artist = "Kiria Arts" }

$price = Read-Host "Price in Rupees (e.g., 15000)"
while ($price -notmatch '^\d+$') {
    Write-Host "Please enter a valid number" -ForegroundColor Red
    $price = Read-Host "Price in Rupees"
}

Write-Host "`nCategory Options:" -ForegroundColor Gray
Write-Host "1. Traditional" -ForegroundColor White
Write-Host "2. Abstract" -ForegroundColor White
Write-Host "3. Landscape" -ForegroundColor White
Write-Host "4. Portrait" -ForegroundColor White
Write-Host "5. Still Life" -ForegroundColor White
Write-Host "6. Urban" -ForegroundColor White
Write-Host "7. Crafts" -ForegroundColor White
$categoryChoice = Read-Host "`nSelect category (1-7)"
$categories = @("Traditional", "Abstract", "Landscape", "Portrait", "Still Life", "Urban", "Crafts")
$category = $categories[[int]$categoryChoice - 1]

Write-Host "`nMedium Options:" -ForegroundColor Gray
Write-Host "1. Tanjore Painting" -ForegroundColor White
Write-Host "2. Oil" -ForegroundColor White
Write-Host "3. Acrylic" -ForegroundColor White
Write-Host "4. Watercolor" -ForegroundColor White
Write-Host "5. Mixed Media" -ForegroundColor White
Write-Host "6. Digital" -ForegroundColor White
Write-Host "7. Clay" -ForegroundColor White
$mediumChoice = Read-Host "`nSelect medium (1-7)"
$mediums = @("Tanjore Painting", "Oil", "Acrylic", "Watercolor", "Mixed Media", "Digital", "Clay")
$medium = $mediums[[int]$mediumChoice - 1]

$description = Read-Host "`nDescription (detailed)"
$isNew = Read-Host "Mark as 'New'? (y/n, default: y)"
$isNewBool = if ($isNew -eq 'n' -or $isNew -eq 'N') { 'false' } else { 'true' }

# Step 2: Image file
Write-Host "`n`n📷 Step 2: Image File" -ForegroundColor Yellow
Write-Host "---------------------`n" -ForegroundColor Yellow

Write-Host "Please place your image in: " -NoNewline -ForegroundColor White
Write-Host "src/assets/" -ForegroundColor Cyan
$imageFileName = Read-Host "`nImage filename (e.g., divine_lotus.jpeg)"

# Verify image exists
$imagePath = "src/assets/$imageFileName"
if (-not (Test-Path $imagePath)) {
    Write-Host "`n⚠️  Image not found at: $imagePath" -ForegroundColor Red
    Write-Host "Please copy your image there first, then run this script again." -ForegroundColor Yellow
    exit
}

# Generate variable name from filename
$varName = $imageFileName -replace '\.(jpeg|jpg|png)$', '' -replace '-', '_'
$varNameCamel = ($varName.Split('_') | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ''
$varNameCamel = $varNameCamel.Substring(0,1).ToLower() + $varNameCamel.Substring(1)

# Step 3: Get next ID
Write-Host "`n`n🔢 Step 3: Generating Data" -ForegroundColor Yellow
Write-Host "--------------------------`n" -ForegroundColor Yellow

# Read current data.ts to find last ID
$dataContent = Get-Content "src/data.ts" -Raw
if ($dataContent -match "id: '(\d+)'") {
    $lastId = [int]$Matches[1]
    $nextId = $lastId + 1
} else {
    $nextId = 12
}

Write-Host "Next available ID: $nextId" -ForegroundColor Green

# Step 4: Generate code
Write-Host "`n`n📋 Step 4: Code Generation" -ForegroundColor Yellow
Write-Host "-------------------------`n" -ForegroundColor Yellow

$importLine = "import $varNameCamel from './assets/$imageFileName';"

$artworkCode = @"
  {
    id: '$nextId',
    title: '$artworkName',
    artist: '$artist',
    price: $price,
    category: '$category',
    medium: '$medium',
    image: $varNameCamel,
    description: '$description',
    isNew: $isNewBool,
    isSold: false
  },
"@

# Display preview
Write-Host "`n✨ Preview of what will be added:" -ForegroundColor Cyan
Write-Host "`n--- Import (add to top of data.ts) ---" -ForegroundColor Gray
Write-Host $importLine -ForegroundColor White
Write-Host "`n--- Artwork Data (add to artworks array) ---" -ForegroundColor Gray
Write-Host $artworkCode -ForegroundColor White

# Confirm
Write-Host "`n"
$confirm = Read-Host "Add this artwork to data.ts? (y/n)"
if ($confirm -ne 'y' -and $confirm -ne 'Y') {
    Write-Host "`n❌ Cancelled. No changes made." -ForegroundColor Red
    exit
}

# Step 5: Update data.ts
Write-Host "`n`n🔧 Step 5: Updating Files" -ForegroundColor Yellow
Write-Host "------------------------`n" -ForegroundColor Yellow

try {
    # Backup original file
    Copy-Item "src/data.ts" "src/data.ts.backup"
    
    # Read file
    $dataContent = Get-Content "src/data.ts" -Raw
    
    # Add import
    $lastImportIndex = $dataContent.LastIndexOf("import")
    $lineEnd = $dataContent.IndexOf(";", $lastImportIndex) + 1
    $beforeImports = $dataContent.Substring(0, $lineEnd)
    $afterImports = $dataContent.Substring($lineEnd)
    $dataContent = $beforeImports + "`n" + $importLine + $afterImports
    
    # Add artwork (after the first artwork in the array)
    $arrayStart = $dataContent.IndexOf("export const artworks: Artwork[] = [")
    $firstArtworkStart = $dataContent.IndexOf("{", $arrayStart)
    $firstArtworkEnd = $dataContent.IndexOf("},", $firstArtworkStart) + 2
    
    $beforeArtwork = $dataContent.Substring(0, $firstArtworkEnd)
    $afterArtwork = $dataContent.Substring($firstArtworkEnd)
    $dataContent = $beforeArtwork + "`n" + $artworkCode + $afterArtwork
    
    # Save file
    Set-Content "src/data.ts" $dataContent -NoNewline
    
    Write-Host "✅ data.ts updated successfully!" -ForegroundColor Green
    
} catch {
    Write-Host "❌ Error updating file: $_" -ForegroundColor Red
    # Restore backup
    if (Test-Path "src/data.ts.backup") {
        Copy-Item "src/data.ts.backup" "src/data.ts" -Force
        Write-Host "Backup restored." -ForegroundColor Yellow
    }
    exit
}

# Step 6: Git commit
Write-Host "`n`n📤 Step 6: Git Commit" -ForegroundColor Yellow
Write-Host "--------------------`n" -ForegroundColor Yellow

$gitCommit = Read-Host "Commit and push to GitHub? (y/n)"
if ($gitCommit -eq 'y' -or $gitCommit -eq 'Y') {
    try {
        git add $imagePath
        git add "src/data.ts"
        git commit -m "Add new artwork: $artworkName"
        
        Write-Host "`n✅ Committed locally!" -ForegroundColor Green
        
        $gitPush = Read-Host "`nPush to GitHub now? (y/n)"
        if ($gitPush -eq 'y' -or $gitPush -eq 'Y') {
            git push origin main
            Write-Host "`n🚀 Pushed to GitHub! Deploying to Vercel..." -ForegroundColor Green
            Write-Host "Your artwork will be live in 2-3 minutes!" -ForegroundColor Cyan
        } else {
            Write-Host "`nCommitted locally. Push manually with: git push origin main" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "`n⚠️  Git operation failed: $_" -ForegroundColor Red
        Write-Host "You can commit manually later." -ForegroundColor Yellow
    }
}

# Cleanup backup
if (Test-Path "src/data.ts.backup") {
    Remove-Item "src/data.ts.backup"
}

Write-Host "`n`n🎉 Done! Artwork added successfully!" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Cyan

Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Test locally: npm run dev" -ForegroundColor White
Write-Host "2. View at: http://localhost:3000/" -ForegroundColor White
Write-Host "3. If not pushed, run: git push origin main`n" -ForegroundColor White
