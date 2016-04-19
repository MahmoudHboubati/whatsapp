Meteor.methods({
    newMessage(message) {

        if (!this.userId)
            throw new Meteor.Error('not-logged-in', 'Must be logged in to send a message');

        check(message, {
            text: String,
            chatId: String,
            type: Match.Maybe(String)
        });

        message.timestamp = new Date();

        const messageId = Messages.insert(message);
        Chats.update(message.chatId, {
            $set: {
                lastMesage: message
            }
        });

        return messageId;
    },

    updateName(name) {
        if (!this.userId)
            throw new Metero.Error('not-logged-in', 'Must be logged in to update his name');

        check(name, String);

        if (name.length === 0)
            throw new Metero.Error('name-required', 'Must provider a user name');

        return Meteor.users.update(this.userId, {
            $set: {
                'profile.name': name
            }
        });
    }
});
