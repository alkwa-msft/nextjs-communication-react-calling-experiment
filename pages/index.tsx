import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

export default function Home() {
  const [htmlElement, setHtmlElement] = useState<JSX.Element | undefined>(undefined)
  useEffect(() => {
    (async() => {
      let someProps = {
        userId: { communicationUserId: '<user id>'},
        locator: "<a group id : uuid>",
        token: "<access token>",
        displayName: "<your name>"
      };
      // const CommunicationReactAndCallingContosoCallContainer = dynamic(
      //   () => import('../components/CommunicationReactAndCallingContosoCallContainer'),
      //   { ssr: false}
      // );
      // const element = <CommunicationReactAndCallingContosoCallContainer userId={someProps.userId} locator={someProps.locator} token={someProps.token} displayName={someProps.displayName} ></ContosoCallContainer>;
      const OnlyCallingSDKcomponent = dynamic(
        () => import('../components/OnlyCallingSDKcomponent'),
        { ssr: false }
      );
      const element = <OnlyCallingSDKcomponent />
      setHtmlElement(element);
    })();
  }, [])
  

  return (
    <>
      {htmlElement}
    </>
  )
}
