import React from 'react'
import { Grid } from '../rendering/Grid';

export const BoardProvider = () => {

    type Props = {
        tiles: TileMeta[];
        tileCountPerRow: number;
    };

    const Board = ({ tiles, tileCountPerRow = 4 }: Props) => {
        const containerWidth = tileTotalWidth * tileCountPerRow;
        const boardWidth = containerWidth + boardMargin;

        const tileList = tiles.map(({ id, ...restProps }) => (
            <Tile key={`tile-${id}`} {} zIndex={id} />
        ));
    }

  return (
    <div className='board' style={{ width: boardWidth }}>
        <BoardProvider containerWidth={containerWidth} 
            tileCountPerRow={tileCountPerRow}>
                <div className='tile-container'>{tileList}</div>
                <Grid />
        </BoardProvider>
    </div>
  );

}

