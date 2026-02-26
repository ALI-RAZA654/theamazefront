$files = @("about.html", "contact.html", "archive.html", "index_backup.html")
$basePath = "C:\Users\Admin\OneDrive\Desktop\my website"

$favDrawerHtml = @"
    <!-- Favorites Sidebar -->
    <div id="favModal" class="fixed inset-0 z-[200] hidden">
        <div id="favOverlay" class="absolute inset-0 bg-black/95 backdrop-blur-3xl transition-opacity duration-700">
        </div>
        <div id="favPanel"
            class="absolute right-0 top-0 h-full w-full max-w-2xl bg-black border-l border-white/5 translate-x-full transition-transform duration-700">
            <div class="flex flex-col h-full p-16">
                <div class="flex justify-between items-center mb-16">
                    <h3 class="text-4xl font-black tracking-tighter text-white uppercase">Private Collection<span
                            class="text-[var(--accent-cyan)]">.</span></h3>
                    <button id="closeFav" class="text-white/20 hover:text-white transition-colors">
                        <i class="fas fa-times text-2xl"></i>
                    </button>
                </div>
                <!-- Favorites Items Container -->
                <div id="favItems" class="flex-1 overflow-y-auto pr-6 custom-scrollbar"></div>
                
                <div class="pt-12 border-t border-white/10">
                    <p class="text-[9px] font-bold text-white/20 uppercase tracking-widest text-center">
                        These items are reserved in your local protocol.
                    </p>
                </div>
            </div>
        </div>
    </div>
"@

foreach ($file in $files) {
    $path = Join-Path $basePath $file
    if (Test-Path $path) {
        Write-Host "Processing: $file"
        $content = [System.IO.File]::ReadAllText($path)
        
        if ($content -notlike "*id=`"favModal`"*") {
            # Inject before Cart Modal if present, else before body end
            if ($content -match '<div id="cartModal"') {
                $content = $content.Replace('<div id="cartModal"', "$favDrawerHtml`n    <div id=`"cartModal`"")
                [System.IO.File]::WriteAllText($path, $content)
                Write-Host "Injected Favorites Drawer into: $file"
            } else {
                Write-Host "Warning: Could not find cartModal in $file"
            }
        } else {
             Write-Host "Already has Favorites Drawer: $file"
        }
    }
}
