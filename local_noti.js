import PushNotification from "react-native-push-notification";

PushNotification.createChannel(
    {
      channelId: "channel-id-1", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: true, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    //   notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios' ,
});


const showNotification = ( title, message ) => {
    PushNotification.createChannel(
        {
          channelId: "channel-id-1", // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
          playSound: true, // (optional) default: true
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: 4, // (optional) default: 4. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    
    PushNotification.localNotification({
        channelId: "channel-id-1", 
        title: title,
        message: message

    });
};

const handleScheduleNotification = (title, message) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message, 
        date: new Date(Date.now() + 5 * 1000)
    });
}

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

export { showNotification, handleScheduleNotification, handleCancel };