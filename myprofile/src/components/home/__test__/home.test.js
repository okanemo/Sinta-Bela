import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './../home';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppMain></AppMain>, div);
});

