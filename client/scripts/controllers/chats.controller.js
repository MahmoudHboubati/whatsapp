import moment from 'moment';
import { Controller } from '../entities';

export default class ChatsCtrl extends Controller {
    constructor() {
        super(...arguments);

        console.error('in Chats controller constructor');

        this.helpers({
            data() {
                return Chats.find();
            }
        });

        this.remove = function(chat) {
            this.data.remove(chat);
        }
    }
}

ChatsCtrl.$inject = ['$scope', '$log'];
