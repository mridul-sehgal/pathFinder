import { AlgorithmType } from "../utils/types"
import { MazeType } from "../utils/types"
interface PathFindingAlgorithmInterface{
    algorithm: AlgorithmType,
    setAlorithm: (algorithm: AlgorithmType)=>void,
    maze:MazeType,
    setMaze:( maze:MazeType)=>void,
}