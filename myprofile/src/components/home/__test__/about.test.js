import React from 'react';
import ReactDOM from 'react-dom';
import AppAbout from './../home';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppAbout></AppAbout>, div);
});

