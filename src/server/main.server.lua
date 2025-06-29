-- Main server script for Roblox Mapper
local ropeColor = BrickColor.new("Bright red") -- Rope color constant (BrickColor)
print("🗺️ Roblox Mapper server started!")

-- Import our modules
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Constants = require(ReplicatedStorage.Constants)
local BlockManager = require(ReplicatedStorage.BlockManager)




-- Utility: Get all attachments in workspace.MyStuff
local function getAllAttachments()
    local attachments = {}
    for _, descendant in ipairs(workspace.MyStuff:GetDescendants()) do
        if descendant:IsA("Attachment") then
            table.insert(attachments, descendant)
        end
    end
    return attachments
end

-- Utility: Create a RopeConstraint between two attachments
local function createRopeBetweenAttachmentsInstances(att0, att1)
    if att0 and att1 then
        local rope = Instance.new("RopeConstraint")
        rope.Name = "zzz"
        rope.Attachment0 = att0
        rope.Attachment1 = att1
        rope.Length = (att0.WorldPosition - att1.WorldPosition).Magnitude
        rope.Visible = true
        rope.Color = ropeColor -- Set the rope color (BrickColor)
        rope.Parent = workspace.MyStuff
        print("Created RopeConstraint between", att0.Name, "and", att1.Name)
        return rope
    else
        warn("Could not find both attachments (instances)")
        return nil
    end
end


-- Example usage: connect ten random pairs of attachments with ropes
local allAttachments = getAllAttachments()
if #allAttachments >= 2 then
    local usedPairs = {}
    local attempts = 0
    local ropesCreated = 0
    while ropesCreated < 10 and attempts < 100 do
        local i = math.random(1, #allAttachments)
        local j = math.random(1, #allAttachments)
        if i ~= j then
            local key = tostring(math.min(i, j)) .. "," .. tostring(math.max(i, j))
            if not usedPairs[key] then
                createRopeBetweenAttachmentsInstances(allAttachments[i], allAttachments[j])
                usedPairs[key] = true
                ropesCreated = ropesCreated + 1
            end
        end
        attempts = attempts + 1
    end
    if ropesCreated < 10 then
        warn("Could only create " .. ropesCreated .. " unique ropes.")
    end
else
    warn("Not enough attachments to connect.")
end

-- Example: Simple player join handler
local Players = game:GetService("Players")

-- Players.PlayerAdded:Connect(function(player)
--     print("Player joined:", player.Name)
    
--     -- Create a block using our constants
--     BlockManager.createGreenBlock()
--     print("Created green block with size:", table.unpack(Constants.BLOCK_SIZE))
    
--     -- Create a welcome part when player joins
--     -- createColoredPart()
    
--     -- You can add your mapping logic here
--     -- For example: teleport player to spawn, set up UI, etc.
-- end)

Players.PlayerRemoving:Connect(function(player)
    print("Player left:", player.Name)
end)


