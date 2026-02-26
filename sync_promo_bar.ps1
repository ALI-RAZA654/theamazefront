$files = @("about.html", "contact.html", "archive.html", "index_backup.html")
$basePath = "C:\Users\Admin\OneDrive\Desktop\my website"

$cssBlock = @"

        /* Promotional Bar Marquee */
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
        }

        .promo-bar {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(6, 182, 212, 0.2);
            height: 36px;
            display: flex;
            align-items: center;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.8);
            z-index: 200;
        }

        .promo-item {
            padding: 0 4rem;
            white-space: nowrap;
        }

        .promo-highlight {
            color: #06b6d4;
            font-weight: 900;
        }
"@

$htmlBlock = @"

    <!-- Promotional Announcement Bar -->
    <div class="fixed top-0 w-full promo-bar">
        <div class="animate-marquee">
            <div class="promo-item">Free Global Delivery on orders above <span class="promo-highlight">Rs. 5,999</span></div>
            <div class="promo-item">Exclusive 20% OFF — Use Code: <span class="promo-highlight">AMAZE20</span></div>
            <div class="promo-item">Elite Protocol: <span class="promo-highlight">Limited Stock Available</span></div>
            <!-- Duplicate for seamless loop -->
            <div class="promo-item">Free Global Delivery on orders above <span class="promo-highlight">Rs. 5,999</span></div>
            <div class="promo-item">Exclusive 20% OFF — Use Code: <span class="promo-highlight">AMAZE20</span></div>
            <div class="promo-item">Elite Protocol: <span class="promo-highlight">Limited Stock Available</span></div>
        </div>
    </div>
"@

foreach ($file in $files) {
    $path = Join-Path $basePath $file
    if (Test-Path $path) {
        Write-Host "Processing: $file"
        $content = [System.IO.File]::ReadAllText($path)
        
        # Inject CSS
        if ($content -notlike "*promo-bar*") {
            $content = $content.Replace("</style>", "$cssBlock`n    </style>")
        }
        
        # Inject HTML
        if ($content -notlike "*Promotional Announcement Bar*") {
            if ($content -match '<body[^>]*>') {
                $bodyTag = $matches[0]
                $content = $content.Replace($bodyTag, "$bodyTag`n$htmlBlock")
            }
        }
        
        # Offset Nav
        $content = $content.Replace('fixed top-0 w-full z-[150]', 'fixed top-[36px] w-full z-[150]')
        
        [System.IO.File]::WriteAllText($path, $content)
        Write-Host "Synced: $file"
    }
}
