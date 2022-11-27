import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { useSelector } from "react-redux";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  );
}

export default MyApp;
