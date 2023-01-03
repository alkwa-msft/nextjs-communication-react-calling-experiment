import { useEffect, useState } from 'react'

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
      const ContosoCallContainer = (await import('./ContosoCallContainer')).ContosoCallContainer;
      const element = <ContosoCallContainer userId={someProps.userId} locator={someProps.locator} token={someProps.token} displayName={someProps.displayName} ></ContosoCallContainer>;
      setHtmlElement(element);
    })();
  }, [])
  

  return (
    <>
      {htmlElement}
    </>
  )
}
