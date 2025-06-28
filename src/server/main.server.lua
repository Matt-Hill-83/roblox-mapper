-- Main server script for Roblox Mapper
print("🗺️ Roblox Mapper server started!")

-- Example: Simple player join handler
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print("Player joined:", player.Name)
    
    -- You can add your mapping logic here
    -- For example: teleport player to spawn, set up UI, etc.
end)

Players.PlayerRemoving:Connect(function(player)
    print("Player left:", player.Name)
end)
