// import "@/styles/globals.css";
import { SuprSendProvider } from "@suprsend/react-inbox";

export default function App({ Component, pageProps }) {
  return (
    <SuprSendProvider
      workspaceKey="7CA7heboY0cA0RPq1369"
      subscriberId="cBSQ5YiEuaSVn_3iuUO5iKuuzCTEF0DRjS7FjWNbyrY"
      distinctId="vedron007@gmail.com"
    >
      <Component {...pageProps} />
    </SuprSendProvider>
  );
}
