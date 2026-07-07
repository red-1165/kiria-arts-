# GitHub Authentication Fix Script
Write-Host "🔐 GitHub Authentication Fix" -ForegroundColor Cyan
Write-Host "============================`n" -ForegroundColor Cyan

Write-Host "It looks like Git is using cached credentials from a different account." -ForegroundColor Yellow
Write-Host "Let's fix this!`n" -ForegroundColor Yellow

Write-Host "Choose a method to authenticate:" -ForegroundColor Cyan
Write-Host "1. Use Personal Access Token (Recommended)" -ForegroundColor White
Write-Host "2. Clear cached credentials and retry" -ForegroundColor White
Write-Host "3. Use SSH instead of HTTPS`n" -ForegroundColor White

$choice = Read-Host "Enter choice (1, 2, or 3)"

switch ($choice) {
    "1" {
        Write-Host "`n📝 Using Personal Access Token" -ForegroundColor Green
        Write-Host "`nSteps to create a token:" -ForegroundColor Yellow
        Write-Host "1. Go to: https://github.com/settings/tokens/new" -ForegroundColor White
        Write-Host "2. Give it a name: 'Kiria Arts Deployment'" -ForegroundColor White
        Write-Host "3. Select expiration: 90 days (or custom)" -ForegroundColor White
        Write-Host "4. Check scope: 'repo' (Full control of private repositories)" -ForegroundColor White
        Write-Host "5. Click 'Generate token'" -ForegroundColor White
        Write-Host "6. Copy the token (starts with ghp_...)`n" -ForegroundColor White
        
        $openBrowser = Read-Host "Open GitHub token page in browser? (y/n)"
        if ($openBrowser -eq "y" -or $openBrowser -eq "Y") {
            Start-Process "https://github.com/settings/tokens/new"
        }
        
        Write-Host "`nOnce you have your token, push with this command:" -ForegroundColor Yellow
        Write-Host "git push https://YOUR_TOKEN@github.com/red-1165/kiria-arts-.git main`n" -ForegroundColor Cyan
    }
    "2" {
        Write-Host "`n🗑️ Clearing cached credentials..." -ForegroundColor Green
        
        # Clear Windows Credential Manager
        cmdkey /list | Select-String "git:" | ForEach-Object {
            $target = $_ -replace ".*Target: (.*)$", '$1'
            cmdkey /delete:$target
        }
        
        Write-Host "✓ Cached credentials cleared" -ForegroundColor Green
        Write-Host "`nNow try pushing again:" -ForegroundColor Yellow
        Write-Host "git push -u origin main`n" -ForegroundColor Cyan
        Write-Host "You'll be prompted to enter your GitHub credentials." -ForegroundColor White
    }
    "3" {
        Write-Host "`n🔑 Using SSH" -ForegroundColor Green
        Write-Host "`nFirst, we need to change the remote URL:" -ForegroundColor Yellow
        git remote set-url origin git@github.com:red-1165/kiria-arts-.git
        Write-Host "✓ Remote URL changed to SSH" -ForegroundColor Green
        
        Write-Host "`nMake sure you have SSH keys set up:" -ForegroundColor Yellow
        Write-Host "1. Check for existing keys: ls ~/.ssh" -ForegroundColor White
        Write-Host "2. If none exist, create one: ssh-keygen -t ed25519 -C 'your@email.com'" -ForegroundColor White
        Write-Host "3. Add to GitHub: https://github.com/settings/keys" -ForegroundColor White
        Write-Host "`nThen push: git push -u origin main`n" -ForegroundColor Cyan
    }
}

Write-Host "Need more help? Check the documentation:" -ForegroundColor Yellow
Write-Host "https://docs.github.com/en/authentication`n" -ForegroundColor Cyan
