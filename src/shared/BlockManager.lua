-- Block Manager - Creates blocks using constants
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Constants = require(ReplicatedStorage.Constants)

local BlockManager = {}

function BlockManager.createGreenBlock()
    local block = Instance.new("Part")
    
    -- Use constants for all properties
    block.Size = Vector3.new(table.unpack(Constants.BLOCK_SIZE))
    block.Position = Vector3.new(table.unpack(Constants.BLOCK_POSITION))
    block.Color = Color3.new(table.unpack(Constants.BLOCK_COLOR))
    
    block.Anchored = true
    block.Material = Enum.Material.Plastic
    block.Shape = Enum.PartType.Block
    block.TopSurface = Enum.SurfaceType.Smooth
    block.BottomSurface = Enum.SurfaceType.Smooth
    block.Name = "GreenBlock"
    
    block.Parent = workspace.MyStuff
    return block
end

function BlockManager.resetGreenBlock()
    -- Find existing green blocks and reset their position
    for _, block in pairs(workspace.MyStuff:GetChildren()) do
        if block.Name == "GreenBlock" and block:IsA("Part") then
            block.Position = Vector3.new(table.unpack(Constants.BLOCK_POSITION))
            block.Size = Vector3.new(table.unpack(Constants.BLOCK_SIZE))
            block.Color = Color3.new(table.unpack(Constants.BLOCK_COLOR))
            print("Reset GreenBlock to coded position:", table.unpack(Constants.BLOCK_POSITION))
        end
    end
end

function BlockManager.cleanupGreenBlocks()
    -- Remove all dynamically created green blocks
    for _, block in pairs(workspace.MyStuff:GetChildren()) do
        if block.Name == "GreenBlock" and block:IsA("Part") then
            block:Destroy()
            print("Removed dynamic GreenBlock")
        end
    end
end

return BlockManager
