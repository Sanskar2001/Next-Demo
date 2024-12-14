import dynamic from "next/dynamic";
// import SuprSendInbox from "@suprsend/react-inbox";
const SuprSendInbox = dynamic(() => import("@suprsend/react-inbox"), {
  ssr: false,
});

import HeadlessSDKComponent from "./HeadlessSDKComponent";

export default function Home() {
  return (
    <>
      <SuprSendInbox workspaceKey="" subscriberId="" distinctId="" />
      <HeadlessSDKComponent />
    </>
  );
}
