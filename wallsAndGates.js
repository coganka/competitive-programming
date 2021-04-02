const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const wallsGates = function(rooms) {
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === 0) {
                dfs(rooms, row, col, 0);
            }
        }
    }
    return rooms;
}

const dfs = function(rooms, currentRow, currentCol, count) {
    if (currentRow < 0 || currentRow >= rooms.length || currentCol < 0 || currentCol >= rooms[0].length || count > rooms[currentRow][currentCol]) {
        return;
    }
    rooms[currentRow][currentCol] = count;
    for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(rooms, currentRow + currentDir[0], currentCol + currentDir[1], count + 1);
    }
}