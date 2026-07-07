# Push to GitHub Script
# Replace YOUR_USERNAME with your actual GitHub username
# Run this after creating the repository on GitHub

$GITHUB_USERNAME = Read-Host "Enter your GitHub username"
$REPO_NAME = "kiria-art-gallery"

# Add remote
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main

Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor Cyan
