import Ember from 'ember';
import DS from 'ember-data';

const arr = Ember.A<string>();
arr.mapBy('path.to.something');
arr.filterBy('path.to.something');
arr.isAny('path.to.something', true);
arr.isEvery('path.to.something');

declare const modelArray: DS.ManyArray<DS.Model>;
modelArray.mapBy('path.to.something');
modelArray.sortBy('path.to.something');
