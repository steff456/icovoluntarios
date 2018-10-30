Formularios = new Mongo.Collection('formularios');

if(Meteor.isClient){
  Template.body.helpers({
    formularios: function(){
      return Formularios.find();
    }
  });
}

if(Meteor.isServer){
  Meteor.startup(function(){

  });
}