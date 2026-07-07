# Complete Deployment Script for Kiria Arts Gallery
# This script will push to GitHub and deploy to Vercel

Write-Host "🎨 Kiria Arts Gallery - Deployment Script" -ForegroundColor Cyan
Write-Host "=========================================`n" -ForegroundColor Cyan

# Step 1: Get GitHub Username
Write-Host "📦 STEP 1: Push to GitHub" -ForegroundColor Yellow
$GITHUB_USERNAME = Read-Host "Enter your GitHub username"
$REPO_NAME = "kiria-art-gallery"

# Check if remote already exists
$remoteExists = git remote | Select-String -Pattern "origin"

if ($remoteExists) {
    Write-Host "✓ Remote 'origin' already exists" -ForegroundColor Green
} else {
    Write-Host "Adding remote origin..." -ForegroundColor Gray
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
}

# Rename branch to main
Write-Host "Renaming branch to main..." -ForegroundColor Gray
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Gray
try {
    git push -u origin main
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME`n" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Failed to push to GitHub. Please check:" -ForegroundColor Red
    Write-Host "   - GitHub repository exists" -ForegroundColor Red
    Write-Host "   - You have push access" -ForegroundColor Red
    Write-Host "   - Your GitHub credentials are configured`n" -ForegroundColor Red
    exit 1
}

# Step 2: Deploy to Vercel
Write-Host "`n🚀 STEP 2: Deploy to Vercel" -ForegroundColor Yellow

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "⚠️  Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
    Write-Host "✓ Vercel CLI installed`n" -ForegroundColor Green
}

Write-Host "Choose deployment method:" -ForegroundColor Cyan
Write-Host "1. Deploy via Vercel CLI (automatic)" -ForegroundColor White
Write-Host "2. Deploy manually via Vercel Dashboard (recommended for first time)" -ForegroundColor White
$choice = Read-Host "Enter choice (1 or 2)"

if ($choice -eq "1") {
    Write-Host "`nDeploying to Vercel..." -ForegroundColor Gray
    Write-Host "You may need to login to Vercel if this is your first time.`n" -ForegroundColor Yellow
    
    # Run Vercel deploy
    vercel --prod
    
    Write-Host "`n✅ Deployment complete!" -ForegroundColor Green
} else {
    Write-Host "`n📋 Manual Deployment Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://vercel.com/new" -ForegroundColor White
    Write-Host "2. Sign in with GitHub" -ForegroundColor White
    Write-Host "3. Import repository: $GITHUB_USERNAME/$REPO_NAME" -ForegroundColor White
    Write-Host "4. Click 'Deploy'" -ForegroundColor White
    Write-Host "`n⏱️  Deployment typically takes 1-3 minutes`n" -ForegroundColor Yellow
    
    $openBrowser = Read-Host "Open Vercel in browser? (y/n)"
    if ($openBrowser -eq "y" -or $openBrowser -eq "Y") {
        Start-Process "https://vercel.com/new"
    }
}

Write-Host "`n🎉 All Done!" -ForegroundColor Green
Write-Host "Your Kiria Arts Gallery is ready!" -ForegroundColor Cyan
Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "• View your GitHub repo: https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor White
Write-Host "• Check deployment status in Vercel Dashboard" -ForegroundColor White
Write-Host "• Your site will be live at: https://$REPO_NAME.vercel.app`n" -ForegroundColor White
