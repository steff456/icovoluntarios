import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js'; 
import App from '../imports/ui/App.js';
import '../imports/ui/scheduler/scheduler.js';
import './main.html';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
