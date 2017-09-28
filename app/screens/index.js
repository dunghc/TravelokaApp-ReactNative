import { Navigation } from 'react-native-navigation';

import Home from './Tabs/Home';
import Booking from './Tabs/Booking';
import Inbox from './Tabs/Inbox';
import Account from './Tabs/Account';
import Hotels from './Hotels'
import Destination from './HotelsScreens/destination'
import Chekin from './HotelsScreens/checkin'
import Duration from './HotelsScreens/duration'
import Guest from './HotelsScreens/guest'
import Room from './HotelsScreens/room'
import Location from './HotelsScreens/Location'
import Search from './HotelsScreens/Search'
import Other from './Other'
import Filter from './HotelsScreens/filter'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tabs.Home', () => Home);
  Navigation.registerComponent('tabs.Booking', () => Booking);
  Navigation.registerComponent('tabs.Inbox', () => Inbox);
  Navigation.registerComponent('tabs.Account', () => Account);
  Navigation.registerComponent('screens.Destination', () => Destination);
  Navigation.registerComponent('screens.Chekin', () => Chekin);
  Navigation.registerComponent('screens.Duration', () => Duration);
  Navigation.registerComponent('screens.Guest', () => Guest);
  Navigation.registerComponent('screens.Room', () => Room);
  Navigation.registerComponent('screens.Filter', () => Filter);
  Navigation.registerComponent('screens.Hotels', () => Hotels);   
  Navigation.registerComponent('screens.Location', () => Location);   
  Navigation.registerComponent('screens.Search', () => Search);   
  Navigation.registerComponent('screens.Other', () => Other);   
}