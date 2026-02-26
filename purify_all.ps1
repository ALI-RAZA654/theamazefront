$files = @("index.html", "about.html", "contact.html", "archive.html", "index_backup.html")
$basePath = "C:\Users\Admin\OneDrive\Desktop\my website"

foreach ($file in $files) {
    $path = Join-Path $basePath $file
    if (Test-Path $path) {
        Write-Host "Processing: $file"
        $content = [System.IO.File]::ReadAllText($path)
        $index = $content.IndexOf("<!DOCTYPE")
        if ($index -gt 0) {
            $cleanContent = $content.Substring($index)
            [System.IO.File]::WriteAllText($path, $cleanContent)
            Write-Host "Purified: $file"
        } elseif ($index -eq 0) {
            Write-Host "Already clean: $file"
        } else {
            Write-Host "Warning: Could not find <!DOCTYPE in $file"
        }
    }
}
