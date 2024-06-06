import "./src/styles/global.css"
import React from 'react';
import { ModalProvider } from './src/context/ModalContext';

export const wrapRootElement = ({ element }) => (
    <ModalProvider>
        {element}
    </ModalProvider>
);
