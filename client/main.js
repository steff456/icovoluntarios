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

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.layout('ApplicationLayout');

  this.render('intro');
  this.render('credits', {to: 'footer'});
});

Router.route('/mapa', function(){
  this.render('mapa');
  this.render('credits', {to: 'footer'});
});

Router.route('/proyectos', function(){
  this.render('proyectos');
  this.render('credits', {to: 'footer'});
});

Router.route('/enlaces', function(){
  this.render('enlaces');
  this.render('credits', {to: 'footer'});
});

Router.route('/nosotros', function(){
  this.render('nosotros');
  this.render('credits', {to: 'footer'});
});

Router.route('/contactanos', function(){
  this.render('contactanos');
  this.render('credits', {to: 'footer'});
});

Router.route('/inscribete', function(){
  this.render('inscribete');
  this.render('credits', {to: 'footer'});
});
