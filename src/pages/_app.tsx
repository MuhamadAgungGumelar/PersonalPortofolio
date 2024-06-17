// import "@/styles/globals.css";
import AppShell from "@/components/layouts/AppShell";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "@/components/MaterialTailwindWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </ThemeProvider>
    </Provider>
  );
}
