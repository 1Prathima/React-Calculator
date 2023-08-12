import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById('root'));
import App from "./App"

import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);