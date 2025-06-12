import React, { memo } from 'react';
import { Instructions } from '../Instructions/Instructions';
import { Countdown } from '../Countdown/Countdown';
import { GameScreen } from '../GameScreen/GameScreen';
import { Result } from '../Result/Result';
import { useGame } from '../../hooks';

export const StateView = memo(() => {
  const { state } = useGame();

  switch (state) {
    case 'instruction':
      return <Instructions />;
    case 'countdown':
      return <Countdown />;
    case 'ready':
      return <GameScreen isReady={true} />;
    case 'result':
      return <Result />;
    default:
      return <GameScreen isReady={false} />;
  }
});

StateView.displayName = 'StateView';
