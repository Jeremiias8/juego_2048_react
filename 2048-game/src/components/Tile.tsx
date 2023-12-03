import React, { useState, useEffect } from 'react'
import '../App.css'
import { usePrevProps } from '../hooks/usePrevProps';
import { useBoard } from '../hooks/useBoard';

export const Tile = ({value, position, zIndex}: Props) => {

  const [boardWidthInPixels, tileCount] = useBoard();

  const [scale, setScale] = useState(1);

  const prevValue = usePrevProps<number>(value);

  const isNew = prevCoords === undefined;
  const hasChanged = prevValue !== value;
  const shallAnimate = isNew || hasChanged;

  useEffect(() => {

    if (shallAnimate) {
      setScale(1.1);
      setTimeout(() => setScale(1), 100);
    }

  }, [shallAnimate, scale]);

  const positionToPixels = (position: number) => {
    return (position / tileCount) * (boardWidthInPixels as number);
  };

  const style = {
    top: positionToPixels(position[1]),
    left: positionToPixels(position[0]),
    transform: `scale(${scale})`,
    zIndex
  };

  return (
    <div className={`tile tile-${value}`} style={style}>
      {value}
    </div>
  );

}
