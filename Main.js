import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';

registerScreens(); // this is where you register all of your app's screens

// // start the app
// Navigation.startTabBasedApp({
//   appStyle: {
//     tabBarBackgroundColor: '#75a8f9',
//     tabBarButtonColor: '#ffffff',
//     tabBarSelectedButtonColor: '#63d7cc',
//     tabBarTranslucent: false,
//     tabFontFamily: 'Avenir-Medium.ttf'  // for asset file or use existing font family name
//   },
//   tabs: [
//     {
//       label: 'Home',
//       screen: 'tabs.Home', // this is a registered name for a screen
//       icon: require('./img/home.png'),
//       title: 'Home'
//     },
//     {
//       label: 'My Booking',
//       screen: 'tabs.Booking',
//       icon: require('./img/booking.png'),
//       title: 'My Booking'
//     },
//     {
//       label: 'My Inbox',
//       screen: 'tabs.Inbox',
//       icon: require('./img/inbox.png'),
//       title: 'My Inbox'
//     },
//     {
//       label: 'My Account',
//       screen: 'tabs.Account',
//       icon: require('./img/account.png'),
//       title: 'My Account'
//     }
//   ]
// });

Navigation.startSingleScreenApp({
  screen: {
    screen: 'tabs.Home', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'screens.Other', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    },
    style: { // ( iOS only )
      drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
      rightDrawerWidth: 50 // optional, add this if you want a define right drawer width (50=percent)
    },
    type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});