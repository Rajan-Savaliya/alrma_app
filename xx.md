6.14.4 ---> npm version
v10.19.0 --> node  version 
4.9.0 --> watchman --version
eiAhS2hLTRO7uRZgyy_uIO:APA91bH72IoviVha9vrvxI1D911GMgl_BzahvQXTC642dYFMUpPJWFqJOCtRpbtVmp--qQoS16CaTVvDJJD03um5npI1uSSbrw0bYtkapmXKsEF9GushWt3Bw5CZou5yPNnN1FUGCEgs

java --version
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode, sharing)


{"db": "sneptech_v13", "httpInfo": "https", "password": "admin", "portInfo": "443", "url": "x", "username": "admin"}

{"db": "test_v14", "httpInfo": "https", "password": "admin", "portInfo": "443", "uri": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "url": "192.168.2.117", "username": "admin"}
{"db": "6129688-saas-14-1-all", "httpInfo": "https", "password": "admin", "portInfo": "443", "url": "6129688-saas-14-1.runbot54.odoo.com", "username": "admin"}

# local rn-odoo connection------------wifi senptech-sftwnft both--------as well========-odoo runinng 

# backgorouin-action for=----------------------------install-------not link-----------------3 line is applcation.xml filed 

# local simple push notification for-----------------install-------not link------------------1 filed--version type 4/5 line add --------done

react native lotties


install script and npx react-native link lotties-react-native only 2script apply\
something is wrong again link it and work it
no need for a addiasaon add 



function arr_diff (a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    console.log(diff)
  if(a1.length < a2.length) {
    console.log('add', diff)
  } else if (a1.length > a2.length) { console.log('remove', diff) }
  else if (a1.length == a2.length) { console.log('do nothing')}
  
}

arr_diff([1,2,3,4,5,6,7,8], [0,1,2,3,4,5,6,7])


// a1-->sqlite database list
// a2-->odoo-resurest--start-end date middle 





# back-noti--run

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import BackgroundService from 'react-native-background-actions';
import BackgroundJob from 'react-native-background-actions';

import { showNotification, handleScheduleNotification, handleCancel } from './local_noti';



class BService
{
    constructor()
    {
        this.Options = {
            taskName: 'Rajan',
            taskTitle: 'Rajan Running',
            taskDesc: 'Rajan xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            taskIcon: {
                name: 'ic_launcher',
                type: 'mipmap',
            },
            color: '#ff00ff',
            parameters: {
                delay: 30,
            },
            actions: '["Exit"]'
        }; 
        
        
    }
async VeryIntensiveTask(taskDataArguments)
    {
        const { delay } = taskDataArguments;
        // await new Promise(async (resolve) => {
        //     var i = 0;
        //     for (let i = 0; BackgroundJob.isRunning(); i++) {  message: "Success DOOD "+i
        //         // })
        //        await sleep(delay);    
        //     }                     
        // });
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => {
            console.log(json)
          
          })

         await sleep(delay);    


    }
Start()
    {
        BackgroundService.start(this.VeryIntensiveTask, this.Options);
    }
Stop()
    {
        BackgroundService.stop();
    }

}

const BackgroudService = new BService();
BackgroudService.Start()

var x = new Date().toISOString()
console.log(x)

const App: () => React$Node = () => {
  const [count, setCount] = React.useState(new Date().toISOString());
  console.log(count)

  React.useEffect(() => {

    this.timer = setInterval(()=> {

      setCount(new Date().toISOString())

      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        showNotification(new Date().toISOString(), 'Hellow, Right right now time is that is.....')

      })


    }, 30000)  // this time base all is work 


  }, [setInterval])

  const onPress = () => {
    showNotification(count, 'Hellow, Right right now time is that is....')

  }
  


  return (
    <>
          <View><Text>Application</Text></View>
  <View><Text>{count}</Text></View>
          <Button title="btn noti" onPress={onPress} />

    </>
  );
};

const styles = StyleSheet.create({
});

export default App;








import PushNotification from "react-native-push-notification";



const showNotification = ( title, message ) => {
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

    })
    
}

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

export { showNotification, handleScheduleNotification, handleCancel };












#===================================================================================noti----

import { showNotification, handleScheduleNotification, handleCancel } from './local_noti';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';z



const App: () => React$Node = () => {
  const [count, setCount] = useState(new Date().toISOString());
  console.log(count)

  // var xdate = 
  // console.log(xdate)

  const onPress = () => {
    showNotification(count, 'Hellow, Right right now time is that is....')

  }
  

  return (
    <>
    <View>
      <Text>notification</Text>
    </View>
    <Button title="btn noti" onPress={onPress} />
    </>
  );
};


export default App;




















# =========================================================== back 

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { AppRegistry } from 'react-native';


import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Header, Input } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundService from 'react-native-background-actions';
import BackgroundJob from 'react-native-background-actions';

 

class BService
{
    constructor()
    {
        this.Options = {
            taskName: 'Rajan',
            taskTitle: 'Rajan Running',
            taskDesc: 'Rajan only background-=================================xxxxxxxxxxxxxxxxxxxxxxx',
            taskIcon: {
                name: 'ic_launcher',
                type: 'mipmap',
            },
            color: '#ff00ff',
            parameters: {
                delay: 30,
            },
            actions: '["Exit"]'
        }; 
        
        
    }
async VeryIntensiveTask(taskDataArguments)
    {
        const { delay } = taskDataArguments;
        // await new Promise(async (resolve) => {
        //     var i = 0;
        //     for (let i = 0; BackgroundJob.isRunning(); i++) {  message: "Success DOOD "+i
        //         // })
        //        await sleep(delay);    
        //     }                     
        // });
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))

         await sleep(delay);    


    }
Start()
    {
        BackgroundService.start(this.VeryIntensiveTask, this.Options);
    }
Stop()
    {
        BackgroundService.stop();
    }

}

const BackgroudService = new BService();
BackgroudService.Start()


const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
  name: 'brynn',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
  name: 'brynn',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},

 ]



const App: () => React$Node = () => {

  React.useEffect(() => {

    this.timer = setInterval(()=> {

      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


    }, 30000)  // this time base all is work 


  }, [])

   

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />


      <SafeAreaView>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <Input
              placeholder='INPUT WITH CUSTOM ICON'
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
