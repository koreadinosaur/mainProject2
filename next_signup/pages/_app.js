import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { useSelector } from "react-redux";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
