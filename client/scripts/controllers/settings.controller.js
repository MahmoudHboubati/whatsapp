import { Controller } from '../entities';

export default class SettingsCtrl extends Controller {
    logout() {
        Meteor.logout((err) => {
            if (err)
                return this.handleError(err);
        });
    }
    handleError(err) {
        this.$log.error('settings modification error', err);
        this.$ionicPopup.alert({
          title: err.reason || 'Settings modifications failed',
          template: 'Please try again',
          okType: 'button-positive button-clear'
        });
    }
}

SettingsCtrl.$inject = ['$scope', '$state', '$ionicPopup', '$log'];
