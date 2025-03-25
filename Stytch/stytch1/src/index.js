import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StytchProvider }from "@stytch/react"
import { StytchUIClient }from "@stytch/vanilla-js"

const stytchOptions = {
  cookieOptions: {
    opaqueTokenCookieName: "stytch_session",
    jwtCookieName: "stytch_session_jwt",
    path: "",
    availableToSubDomains: false,
    domain: "",
  }
}

const stytchClient = new StytchUIClient(
  stytchOptions
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytchClient}>
      <App />
    </StytchProvider>
  </React.StrictMode>
);