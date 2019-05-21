import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, CardContent } from '@material-ui/core';

import { RootState } from '../store';
import { increment, decrement } from '../store/reducers/counter-actions';


const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setIncrement: increment,
  setDecrement: decrement,
}, dispatch);

export interface CounterProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function CounterBase({ count, setIncrement, setDecrement }: CounterProps) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return () => {
      document.title = 'Counter unmounted';
    }
  }, [count]);

  return (
    <CardContent>
      <p>You clicked {count} times</p>
      <Button variant="contained" color="primary" onClick={() => setIncrement(1)}>+</Button>
      <Button variant="contained" color="primary" onClick={() => setDecrement(1)}>-</Button>
    </CardContent>
  )
}

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterBase)
