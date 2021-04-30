/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Appbar,
  Drawer,
  FAB,
  Portal,
  Provider,
  Badge,
  Button,
} from 'react-native-paper';
import {
  showNotification,
  handleScheduleNotification,
  handleCancel,
} from './local_noti.js';
import LottieView from 'lottie-react-native';
import BackgroundService from 'react-native-background-actions';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
class BService {
  constructor() {
    this.Options = {
      taskName: 'Odoo Backgrounds',
      taskTitle: 'Odoo Background',
      taskDesc: 'Odoo Background Running',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#ff00ff',
      parameters: {
        delay: 300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
      },
      actions: '["Exit"]',
    };
  }
  async VeryIntensiveTask(taskDataArguments) {
    const {delay} = taskDataArguments;
    await sleep(delay);
  }
  Start() {
    BackgroundService.start(this.VeryIntensiveTask, this.Options);
  }
  Stop() {
    BackgroundService.stop();
  }
}

const BackgroudService = new BService();
BackgroudService.Start();

const App = () => {
  Sound.setCategory('Playback');
  var whoosh = new Sound('s_tap.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );
  });
  const start30s = (time) => {
       interval = setInterval(() => {
        showNotification(
          '10sec',
          'open app and click the button to stop the notification and weakup...',
        );
        var whoosh = new Sound('s_tap.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          console.log(
            'duration in seconds: ' +
              whoosh.getDuration() +
              'number of channels: ' +
              whoosh.getNumberOfChannels(),
          );
          if (global.sound) global.sound.stop();
          global.sound = whoosh;

          whoosh.setNumberOfLoops(-1);
          whoosh.setVolume(1);
          whoosh.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        });

        whoosh.release();
        clearTimeout(interval);
      }, time);
  };

  const end30s = (remove) => {
    global.sound.stop();
    clearInterval(global.stop);
  };

  const clears = () => {
    // set inter stop kari dai mean all stop right
    clearInterval(interval);
  };

  return (
    <>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <LottieView
          source={require('./alarm.json')}
          style={{
            // backgroundColor: "#" + ((1<<24)*Math.random() | 0).toString(16),
            backgroundColor: 'orange',
            height: '95%',
            width: '100%',
          }}
          colorFilters={[
            {
              keypath: 'button',
              color: '#F00000',
            },
            {
              keypath: 'Sending Loader',
              color: '#F00000',
            },
          ]}
          resizeMode="cover"
          autoPlay
          loop
        />
      </View>

      <View>
        <Text>press to set a 7 hours time out...</Text>
      </View>
      <Button mode="contained" onPress={() => start30s(15000)}>
        30 sec start
      </Button>
      <Button mode="contained" onPress={() => end30s(true)}>
        stop
      </Button>
      <Button mode="contained" onPress={() => clears()}>
        clear2
      </Button>

    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
