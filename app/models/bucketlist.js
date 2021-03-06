import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date_created: DS.attr(),
  items: DS.hasMany('item'),
  itemCount: Ember.computed('items', function(){
    return this.get('items.length');
  })
});
