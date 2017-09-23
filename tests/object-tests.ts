import Ember from 'ember';

const obj = Ember.Object.create();

obj.get('path.to.something');
obj.set('path.to.something', 123);
obj.getProperties('path.to.something');
obj.setProperties({ 'path.to.something': 123 });

Ember.get(obj, 'path.to.something');
Ember.set(obj, 'path.to.something', 123);
Ember.getProperties(obj, 'path.to.something');
Ember.setProperties(obj, { 'path.to.something': 123 });

Ember.Component.extend({
    init() {
        this.get('path.to.something');
    }
});
