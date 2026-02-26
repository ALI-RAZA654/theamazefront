$files = @("about.html", "contact.html", "archive.html", "index_backup.html")
$basePath = "C:\Users\Admin\OneDrive\Desktop\my website"

$favButtonHtml = @"
                <!-- Favorites Trigger -->
                <button id="favBtn" class="flex items-center space-x-4 opacity-70 hover:opacity-100 transition-all group">
                    <i class="fas fa-heart text-white group-hover:text-[var(--accent-cyan)] transition-colors"></i>
                    <span id="favCount"
                        class="w-4 h-4 flex items-center justify-center rounded-full bg-[var(--accent-cyan)] text-[8px] font-black text-black opacity-0 transition-opacity">0</span>
                </button>

"@

foreach ($file in $files) {
    $path = Join-Path $basePath $file
    if (Test-Path $path) {
        Write-Host "Processing: $file"
        $content = [System.IO.File]::ReadAllText($path)
        
        if ($content -notlike "*id=`"favBtn`"*") {
            # Find the insertion point before cartBtn
            if ($content -match '<button id="cartBtn"') {
                $content = $content.Replace('<button id="cartBtn"', "$favButtonHtml`n                <button id=`"cartBtn`"")
                [System.IO.File]::WriteAllText($path, $content)
                Write-Host "Synced Favorites to: $file"
            } else {
                Write-Host "Warning: Could not find cartBtn in $file"
            }
        } else {
             Write-Host "Already has Favorites: $file"
        }
    }
}
