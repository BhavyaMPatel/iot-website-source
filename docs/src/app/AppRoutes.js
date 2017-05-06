
import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './Master';
import Home from './Home';

import Arduino101AccelerometerPage from './tmp/Arduino101Accelerometer/Page';

import Arduino101ButtonPage from './tmp/Arduino101Button/Page';

import Arduino101GyroscopePage from './tmp/Arduino101Gyroscope/Page';

import Arduino101HumidityPage from './tmp/Arduino101Humidity/Page';

import Arduino101LedPage from './tmp/Arduino101Led/Page';

import Arduino101LightSensorPage from './tmp/Arduino101LightSensor/Page';

import Arduino101MoisturePage from './tmp/Arduino101Moisture/Page';

import Arduino101ProximitySensorPage from './tmp/Arduino101ProximitySensor/Page';

import Arduino101RgbLcdPage from './tmp/Arduino101RgbLcd/Page';

import Arduino101ServoPage from './tmp/Arduino101Servo/Page';

import BluetoothLEPage from './tmp/BluetoothLE/Page';

import MicroBitAccelerometerPage from './tmp/MicroBitAccelerometer/Page';

import MicroBitButtonPage from './tmp/MicroBitButton/Page';

import MicroBitDeviceInformationPage from './tmp/MicroBitDeviceInformation/Page';

import MicroBitDfuControlPage from './tmp/MicroBitDfuControl/Page';

import MicroBitEventPage from './tmp/MicroBitEvent/Page';

import MicroBitGeneBicAttributePage from './tmp/MicroBitGeneBicAttribute/Page';

import MicroBitGenericAccessPage from './tmp/MicroBitGenericAccess/Page';

import MicroBitGenericAttributePage from './tmp/MicroBitGenericAttribute/Page';

import MicroBitIoPinPage from './tmp/MicroBitIoPin/Page';

import MicroBitLedPage from './tmp/MicroBitLed/Page';

import MicroBitMagnetometerPage from './tmp/MicroBitMagnetometer/Page';

import MicroBitTemperaturePage from './tmp/MicroBitTemperature/Page';

import MicroBitUartPage from './tmp/MicroBitUart/Page';

import TeacherCurriculumPage from './tmp/TeacherCurriculum/Page';

import TeacherExemplarsPage from './tmp/TeacherExemplars/Page';

import TeacherHowTosPage from './tmp/TeacherHowTos/Page';

import TeacherTopPage from './tmp/TeacherTop/Page';

import TeacherTutorialPage from './tmp/TeacherTutorial/Page';

import MicroBitPage from './tmp/MicroBit/Page';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    <Route path="teachers">
      <Route path="tutorials" component={TeacherTutorialPage} />
      <Route path="toppage" component={TeacherTopPage} />
      <Route path="howtos" component={TeacherHowTosPage} />
      <Route path="exemplars" component={TeacherExemplarsPage} />
      <Route path="curriculum" component={TeacherCurriculumPage} />
    </Route>
    <Route path="components">
      <Route path="bluetoothle" component={BluetoothLEPage} />
      <Route path="microbit" component={MicroBitPage} />
      <Route path="microbitaccelerometer" component={MicroBitAccelerometerPage} />
      <Route path="microbitbutton" component={MicroBitButtonPage} />
      <Route path="microbitdeviceinformation" component={MicroBitDeviceInformationPage} />
      <Route path="microbitdfucontrol" component={MicroBitDfuControlPage} />
      <Route path="microbitevent" component={MicroBitEventPage} />
      <Route path="microbitgenericaccess" component={MicroBitGenericAccessPage} />
      <Route path="microbitgenericattribute" component={MicroBitGenericAttributePage} />
      <Route path="microbitiopin" component={MicroBitIoPinPage} />
      <Route path="microbitled" component={MicroBitLedPage} />
      <Route path="microbitmagnetometer" component={MicroBitMagnetometerPage} />
      <Route path="microbittemperature" component={MicroBitTemperaturePage} />
      <Route path="microbituart" component={MicroBitUartPage} />
      <Route path="arduinoaccelerometer" component={Arduino101AccelerometerPage} />
      <Route path="arduinobutton" component={Arduino101ButtonPage} />
      <Route path="arduinogyroscope" component={Arduino101GyroscopePage} />
      <Route path="arduinohumidity" component={Arduino101HumidityPage} />
      <Route path="arduinoled" component={Arduino101LedPage} />
      <Route path="arduinolightsensor" component={Arduino101LightSensorPage} />
      <Route path="arduinomoisture" component={Arduino101MoisturePage} />
      <Route path="arduinoproximitysensor" component={Arduino101ProximitySensorPage} />
      <Route path="arduinorgblcd" component={Arduino101RgbLcdPage} />
      <Route path="arduinoservo" component={Arduino101ServoPage} />
    </Route>
  </Route>
);

export default AppRoutes;
