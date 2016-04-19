import angular from 'angular';
import 'angular-animate';
import 'angular-meteor'
import 'angular-moment';
import 'angular-sanitize';
import 'angular-meteor-auth';
import 'angular-ui-router';
import 'ionic-scripts';

// Modules
import Definer from '../definer';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import CalendarFilter from '../filters/calendar.filter';
import InputDirective from '../directives/input.directive';
import LoginCtrl from '../controllers/login.controller';
import ProfileCtrl from '../controllers/profile.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import SettingsCtrl from '../controllers/settings.controller';
import { RoutesConfig, RoutesRunner } from '../routes';

//App
const App = angular.module('Whatsapp', [
    'angular-meteor',
    'angular-meteor.auth',
    'angularMoment',
    'ionic'
]);

new Definer(App)
    .define(ChatsCtrl)
    .define(ChatCtrl)
    .define(RoutesConfig)
    .define(LoginCtrl)
    .define(InputDirective)
    .define(RoutesRunner)
    .define(ConfirmationCtrl)
    .define(ProfileCtrl)
    .define(SettingsCtrl)
    .define(CalendarFilter);

//Startup
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady)
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['Whatsapp']);
}
