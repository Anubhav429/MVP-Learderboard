import { Event, Player, PlayerWithScore } from '../types';

export const calculateMVPScore = (players: Player[], events: Event[]): PlayerWithScore[] => {
  const scoreMap: Record<number, number> = {};

  events.forEach(({ playerId, action }) => {
    switch (action) {
      case 'TAKE_WICKET':
        scoreMap[playerId] = (scoreMap[playerId] || 0) + 20;
        break;
      case '50_RUNS_MILESTONE':
        scoreMap[playerId] = (scoreMap[playerId] || 0) + 15;
        break;
      case 'HIT_SIX':
        scoreMap[playerId] = (scoreMap[playerId] || 0) + 2;
        break;
      case 'HIT_FOUR':
        scoreMap[playerId] = (scoreMap[playerId] || 0) + 1;
        break;
    }
  });

  return players
    .map((player) => ({
      ...player,
      mvpScore: scoreMap[player.id] || 0,
    }))
    .sort((a, b) => b.mvpScore - a.mvpScore);
};
