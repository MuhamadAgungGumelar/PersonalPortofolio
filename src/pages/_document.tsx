import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "../components/MaterialTailwindWrapper";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-10 sm:px-20 bg-light text-lightFont dark:bg-dark dark:text-darkFont font-body transition ease-in delay-200 duration-700">
        <ThemeProvider>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
