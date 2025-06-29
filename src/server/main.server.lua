-- Main server script for Roblox Mapper
local ropeColor = BrickColor.new("Bright red") -- Rope color constant (BrickColor)
print("🗺️ Roblox Mapper server started!")

-- Import our modules
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Constants = require(ReplicatedStorage.Constants)
local BlockManager = require(ReplicatedStorage.BlockManager)

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

-- Utility: Create a RopeConstraint between two named attachments in workspace.MyStuff
local function createRopeBetweenAttachments(attachName0, attachName1)
    local att0 = nil
    local att1 = nil
    -- Search for attachments by name in Workspace.MyStuff
    for _, descendant in ipairs(workspace.MyStuff:GetDescendants()) do
        if descendant:IsA("Attachment") then
            if descendant.Name == attachName0 then
                att0 = descendant
            elseif descendant.Name == attachName1 then
                att1 = descendant
            end
        end
    end
    if att0 and att1 then
        local rope = Instance.new("RopeConstraint")
        rope.Name = "zzz"
        rope.Attachment0 = att0
        rope.Attachment1 = att1
        rope.Length = (att0.WorldPosition - att1.WorldPosition).Magnitude
        rope.Visible = true
        rope.Color = ropeColor -- Set the rope color
        rope.Parent = workspace.MyStuff
        print("Created RopeConstraint between", attachName0, "and", attachName1)
        return rope
    else
        warn("Could not find both attachments:", attachName0, attachName1)
        return nil
    end
end

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

-- Example usage: create a rope between two specific attachments
createRopeBetweenAttachments(
    "RectangleteamsStack1_level1_bar1_FrontAttachment",
    "RectanglenationsStack1_level1_bar2_FrontAttachment"
)

-- Example usage: connect two random attachments with a rope
local allAttachments = getAllAttachments()
if #allAttachments >= 2 then
    -- Pick two random, different attachments
    local i = math.random(1, #allAttachments)
    local j = i
    while j == i do
        j = math.random(1, #allAttachments)
    end
    createRopeBetweenAttachmentsInstances(allAttachments[i], allAttachments[j])
else
    warn("Not enough attachments to connect.")
end

-- Example: Simple player join handler
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print("Player joined:", player.Name)
    
    -- Create a block using our constants
    BlockManager.createGreenBlock()
    print("Created green block with size:", table.unpack(Constants.BLOCK_SIZE))
    
    -- Create a welcome part when player joins
    -- createColoredPart()
    
    -- You can add your mapping logic here
    -- For example: teleport player to spawn, set up UI, etc.
end)

Players.PlayerRemoving:Connect(function(player)
    print("Player left:", player.Name)
end)


