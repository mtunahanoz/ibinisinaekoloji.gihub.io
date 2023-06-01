import {render, screen} from '@testing-library/react'

import App from './App';
import Quiz from './questions';
import Main from './Main';

test('Test normally work', () => {

  render(<Main />);
  const input = screen.getAllByText("Bitkisel")

  
});



