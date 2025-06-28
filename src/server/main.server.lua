-- Main server script for Roblox Mapper
print("🗺️ Roblox Mapper server started!")

-- Example: Creating a part with Enums in Lua code
local function createColoredPart()
    local part = Instance.new("Part")
    part.Size = Vector3.new(4, 1, 4)
    part.Position = Vector3.new(0, 5, 0)
    part.Anchored = true
    
    -- Use Enums in Lua code:
    part.BrickColor = BrickColor.new("Bright red")
    part.Material = Enum.Material.Neon
    part.Shape = Enum.PartType.Block
    part.TopSurface = Enum.SurfaceType.Smooth
    
    part.Parent = workspace
    return part
end

-- Example: Simple player join handler
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print("Player joined:", player.Name)
    
    -- Create a welcome part when player joins
    createColoredPart()
    
    -- You can add your mapping logic here
    -- For example: teleport player to spawn, set up UI, etc.
end)

Players.PlayerRemoving:Connect(function(player)
    print("Player left:", player.Name)
end)
