import React from 'react';
import Grid from './Grid';
import RightPanel from './RightPanel';
import GameModal from './GameModal';
import useGame from '../hooks/useGame';
import catImage from '../assets/Cat.png';

export default function JustDivide(){
  const api = useGame();

  return (
    <div 
      className="min-h-screen flex justify-center items-start p-6 bg-pink-50 overflow-y-auto"
    >
      <div className="w-full max-w-[1200px] flex justify-center min-h-[690px] relative">
        <div className="rounded-xl overflow-visible p-6 stage-bg" style={{ borderRadius: '18px' }}>
          <header className="flex items-center justify-center relative mb-2">
            <button
                className="absolute left-[-4px] top-[-4px] w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                aria-label="pause"
                onClick={() => {
                if (api.isPaused) api.resume();
                else api.pause();
            }}>
            {api.isPaused ? '▶' : '⏸'}
            </button>

            <h1 className="text-2xl " style={{ fontFamily: 'Luckiest Guy, cursive' }}>JUST DIVIDE</h1>
            <button className="absolute right-[-4px] top-[-4px] w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center" aria-label="help">?</button>
          </header>

{/* PAUSE OVERLAY */}
{api.isPaused && (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md bg-black/50">
    <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-md">PAUSED</h1>

    <button
      onClick={api.resume}
      className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-xl font-bold shadow-lg"
    >
      RESUME
    </button>
  </div>
)}



          <div className="text-center mb-2">
            <div className="text-xl font-bold">⏳ {api.formattedTime}</div>
            <div className="instruction text-center mt-2">
            DIVIDE WITH THE NUMBERS TO SOLVE THE ROWS AND COLUMNS.
            </div>

          </div>

          <div className="board-and-panel mt-10 mx-auto w-full max-w-[1100px]">
            <div className="left-stage flex flex-col items-center">
              <div className="relative w-full h-[180px] flex items-start justify-center mb-[-175px]">
                <img src={catImage} alt="cat" className="pointer-events-none w-[420px] absolute -top-20 left-1/2 transform -translate-x-1/2 cat-desktop" />
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex gap-4 z-20 badges-desktop">
                  <div className="badge-card">LEVEL {api.level}</div>
                  <div className="badge-card">SCORE {api.score}</div>
                </div>
              </div>

              <div className="game-board mt-12">
                <Grid
                  grid={api.grid}
                  onCellDrop={api.onCellDrop}
                  onTilePointerDown={api.startPointerDrag}
                  onTileDragStart={api.handleDragStartFallback}
                />
              </div>
            </div>

<RightPanel
  queue={api.queue}
  keepValue={api.keepValue}
  trashCount={api.trashCount}
  onKeepClick={api.onKeepClick}
  onQueuePointerDown={api.startPointerDrag}
  onQueueDragStart={api.handleDragStartFallback}
  onKeepPointerDown={api.onKeepPointerDown}
  onKeepDragStart={api.onKeepDragStart}
  onKeepDrop={api.handleKeepDrop}      // <-- pass this
  onTrashDrop={api.handleTrashDrop}    // <-- pass this
/>


          </div>

          <GameModal open={api.gameOver} score={api.score} bestScore={api.bestScore} onRestart={api.restart} />
        </div>
      </div>
    </div>
  );
}
