-- Constants for RobloxMapper
-- This file contains all configurable values for the game

local Constants = {}

-- Block configurations
Constants.BLOCK_SIZE = {2, 3, 1}  -- Make it 2x3x1 instead of 1x1x1
Constants.BLOCK_POSITION = {1, 1, 1}  -- Position for the green block [X, Y, Z]
Constants.BLOCK_COLOR = {0.486275, 0.866667, 0.184314}  -- Bright green RGB

-- Other game constants
Constants.BASEPLATE_SIZE = {512, 20, 512}
Constants.SPAWN_HEIGHT = 5

-- Player settings
Constants.WALK_SPEED = 16
Constants.JUMP_POWER = 50

return Constants
