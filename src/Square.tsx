import React from 'react';


export function Square(props: { value?: string, onClick: Function }) {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button >
  );
}
