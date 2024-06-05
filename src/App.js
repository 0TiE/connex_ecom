import React from 'react';
// _app.js
import { PrimeReactProvider } from 'primereact/api';
import PartnerLogin from './components/Login/PartnerLogin';

export default function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
          <PartnerLogin/>
        </PrimeReactProvider>
    );
}
        

