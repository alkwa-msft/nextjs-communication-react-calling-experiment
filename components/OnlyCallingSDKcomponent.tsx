import { CallClient } from '@azure/communication-calling';

import { useEffect } from 'react';

export const OnlyCallingSDKcomponent = () => {
    console.log('callclient: ', CallClient);
    useEffect(() => {
        console.log('useEffect');
        const myCallClient = new CallClient();
        console.log(myCallClient);
        myCallClient.getDeviceManager().then((deviceManager) => {
            console.log(deviceManager);
        });
    }, []);
    return <div> hello </div>;
}

export default OnlyCallingSDKcomponent;