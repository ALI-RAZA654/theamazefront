$files = @("index.html", "about.html", "contact.html", "archive.html", "index_backup.html")
$basePath = "C:\Users\Admin\OneDrive\Desktop\my website"

foreach ($file in $files) {
    $path = Join-Path $basePath $file
    if (Test-Path $path) {
        $content = [System.IO.File]::ReadAllText($path)
        # Fix the corrupted dash character
        if ($content -match "â€”") {
            $content = $content.Replace("â€”", "—")
            [System.IO.File]::WriteAllText($path, $content)
            Write-Host "Fixed encoding in: $file"
        }
    }
}
