
# Features
1. The goal of the game is two create a column  of blocks of the same color. If the column has all of the same colors, the entire grid should shift and delete the vertical column.

2. The player forms the grids by completing transitions
	* **Transition**: Made when two blocks are switched.
	* The transition can only be between a block and another block that is above, right, left or below it

3. The goal is to eventually make an AI that can play the game and minimize the amount of transitions needed.
	* Could use minimaxing and visualize the game tree

# To Do

1. Switch blocks positions when selected

2. Create rules for transition
	* Valid if transition can be made. If the block selected is above, below or to the right or left, it should allow the swap to happen
	* Account for transitions that happen on the edge. Create exception for when one side might be blank

3. Create a count of all the colors that have been collected
	* Display the block to the side with a counter
