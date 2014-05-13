#TODO: extract directories as parameters


#Start MongoDB
$mongoTab = $psISE.PowerShellTabs.Add()
$mongoTab.DisplayName = "Mongod";

# Wait for the new tab to be ready to run more commands.
While (-not $mongoTab.CanInvoke) {
    Start-Sleep -m 100
}

$mongoTab.Invoke({ cd "C:\Program Files\MongoDB 2.6 Standard\bin\";  ./mongod.exe --dbpath "C:\projects\mongo\data"})


#Start Node
$nodeTab = $psISE.PowerShellTabs.Add()
$nodeTab.DisplayName = "Node.js"
While (-not $nodeTab.CanInvoke) {
    Start-Sleep -m 100
}
$nodeTab.Invoke({cd C:\projects\sync\node ; node server.js})