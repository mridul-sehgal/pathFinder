
export type AlgorithmType= "DIJKSTRAS" | "BFS" | "DFS" | "A_STAR"
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSSIVE_DIVISION"
export type TileType={
    row:number,
    col:number,
    distance:number,
    isStart:boolean,
    isEnd:boolean,
    isWall:boolean,
    isPath:boolean,
    parent:TileType | null,
}
export type GridType= TileType[][];