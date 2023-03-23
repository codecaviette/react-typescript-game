const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '100px',
      position: 'absolute',
      background: 'black',
      top: '120px',
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '10px',
      height: '60px',
      position: 'absolute',
      background: 'black',
      top: '110px',
      right: 0,
      rotate: '50deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '10px',
      height: '60px',
      position: 'absolute',
      background: 'black',
      top: '110px',
      right: 0,
      rotate: '-50deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '10px',
      height: '70px',
      position: 'absolute',
      background: 'black',
      top: '210px',
      right: 0,
      rotate: '-50deg',
      transformOrigin: 'right top',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '10px',
      height: '70px',
      position: 'absolute',
      background: 'black',
      top: '210px',
      right: 0,
      rotate: '50deg',
      transformOrigin: 'left top',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = { numOfGuesses: number };

export function HangmanDrawing({ numOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div 
        style={{ 
          height: '10px', 
          width: '250px', 
          background: 'black' 
        }} />
    </div>
  );
}
