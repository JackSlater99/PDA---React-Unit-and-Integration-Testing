import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let add;
  let subtract;
  let multiply;
  let divide;
  let equals;
  let clear;
  let total;

  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    button0 = container.getByTestId('number0');
    add = container.getByTestId('operator-add');
    subtract = container.getByTestId('operator-subtract');
    multiply = container.getByTestId('operator-multiply');
    divide = container.getByTestId('operator-divide');
    equals = container.getByTestId('operator-equals');
    clear = container.getByTestId('clear');
    total = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add numbers',() => {
    fireEvent.click(button1);
    fireEvent.click(add)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('5');
  })
  
  it('should be able to subtract numbers',() => {
    fireEvent.click(button7);
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('3');
  })

  it('should be able to multiply numbers',() => {
    fireEvent.click(button3);
    fireEvent.click(multiply)
    fireEvent.click(button5)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('15');
  })

  it('should be able to divide numbers',() => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('3');
  })

  it('should be able to concatenate multiple number',() => {
    fireEvent.click(button1);
    fireEvent.click(button0);
    fireEvent.click(button2);
    fireEvent.click(button4)
    expect(total.textContent).toEqual('1024');
  })

  it('should be able to chain multiple operations',() => {
    fireEvent.click(button5);
    fireEvent.click(multiply)
    fireEvent.click(button6)
    fireEvent.click(divide)
    fireEvent.click(button3)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('10');
  })

  it('should be able to clear the running total without affecting the calculation',() => {
    fireEvent.click(button5);
    fireEvent.click(multiply)
    fireEvent.click(button6)
    fireEvent.click(divide)
    fireEvent.click(button3)
    fireEvent.click(clear)
    fireEvent.click(button6)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('5');
  })
})

