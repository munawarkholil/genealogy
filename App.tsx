

import { LibNotification } from 'esoftplay/cache/lib/notification/import';
import { UserIndex } from 'esoftplay/cache/user/index/import';
import * as ErrorReport from 'esoftplay/error';
import { globalIdx } from 'esoftplay/global';
import Worker from 'esoftplay/libs/worker';
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { /* enableFreeze, */ enableScreens } from 'react-native-screens';

/* enableFreeze() */
enableScreens()

Notifications.addNotificationResponseReceivedListener(x => LibNotification.onAction(x));
Notifications.addNotificationReceivedListener(x => LibNotification.onAction(x));

export default function App() {
	useEffect(() => {
		globalIdx.reset()
		ErrorReport.getError()
	}, [])

	return (
		<Worker.Provider>
			<UserIndex />
		</Worker.Provider>
	)
}