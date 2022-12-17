import { Provider } from "react-redux";
import { store } from "../src/store";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
const theme = {
  primary: "green",
};
function MyApp({ Component, pageProps: { session }, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
