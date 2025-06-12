import { Score } from '../types';
import { CONSTANTS } from './constants';

export const getRandomDelay = () =>
  Math.random() * (CONSTANTS.TIMING.MAX_WAIT_TIME - CONSTANTS.TIMING.MIN_WAIT_TIME) +
  CONSTANTS.TIMING.MIN_WAIT_TIME;

export const updateHighScores = (scores: Score[], newTime: number): Score[] => {
  const newScore = { time: newTime, timestamp: Date.now() };
  const newScores = [...scores, newScore]
    .sort((a, b) => a.time - b.time)
    .slice(0, CONSTANTS.SCORES.MAX_SCORES);
  return newScores;
};
