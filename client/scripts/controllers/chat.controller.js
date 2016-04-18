import { Controller } from '../entities';

export default class ChatCtrl extends Controller {
    constructor() {
        super(...arguments);

        console.log('chat controller constructor');

        this.chatId = this.$stateParams.chatId;

        this.helpers({
            messages() {
              return Messages.find({ chatId: this.chatId });
            },
            data() {
                return Chats.findOne(this.chatId);
            }
        });
    }
}

ChatCtrl.$inject = ['$scope', '$stateParams'];