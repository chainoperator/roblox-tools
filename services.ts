/**
 * Service for managing player data.
 * Contains methods to get and update player information.
 */
export interface PlayerData {
    id: string;
    name: string;
    score: number;
}

/**
 * Class responsible for player data operations.
 */
export class PlayerService {
    private players: Map<string, PlayerData> = new Map();

    /**
     * Adds a new player to the service.
     * @param player - The player data to add.
     */
    public addPlayer(player: PlayerData): void {
        this.players.set(player.id, player);
    }

    /**
     * Retrieves player data by ID.
     * @param playerId - The ID of the player.
     * @returns The player data if found, otherwise undefined.
     */
    public getPlayer(playerId: string): PlayerData | undefined {
        return this.players.get(playerId);
    }

    /**
     * Updates the score of an existing player.
     * @param playerId - The ID of the player to update.
     * @param newScore - The new score to set for the player.
     */
    public updatePlayerScore(playerId: string, newScore: number): void {
        const player = this.getPlayer(playerId);
        if (player) {
            player.score = newScore;
            this.players.set(playerId, player);
        }
    }
}
