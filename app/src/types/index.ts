// Player type
export interface Player {
  id: number;
  name: string;
}

// Event type
export interface Event {
  playerId: number;
  action: 'TAKE_WICKET' | '50_RUNS_MILESTONE' | 'HIT_SIX' | 'HIT_FOUR';
}

// Player with calculated MVP score in this we take plyer props also by using extends keyword
export interface PlayerWithScore extends Player {
  mvpScore: number;
}
