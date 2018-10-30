import { Mongo } from 'meteor/mongo';
 
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('events', function tasksPublication() {
     return Events.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'events.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Events.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'events.remove'(eventId) {
    check(eventId, String);
    const events = Events.findOne(eventId);
    if (event.private && event.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    Events.remove(eventId);
  },
'events.setChecked'(taskId, setChecked) {
    check(eventId, String);
    check(setChecked, Boolean);
    const event = Events.findOne(eventId);
    if (event.private && event.owner !== this.userId) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    Events.update(eventId, { $set: { checked: setChecked } });
  },

  'events.setPrivate'(eventId, setToPrivate) {
    check(eventId, String);
    check(setToPrivate, Boolean);
 
    const event = Events.findOne(eventId);
 
    // Make sure only the task owner can make a task private
    if (event.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Events.update(eventId, { $set: { private: setToPrivate } });
  },
});  