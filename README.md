# 🛑 ARCHIVED 🛑

# ember-unsafe-typings

Typings to use path strings with `Ember.Object` and `Ember.Array` APIs:
```ts
obj.get('path.to.something');
array.mapBy('path.to.something');
Ember.get(obj, dynamicPathString);
```

This is an optional dependency because you will lose a great deal of type safety.

```ts
person.get('fullNmae'); // typo is no longer caught
let value: string = obj.get('some.number'); // return type is not type-checked
```

### Installation

With npm:
```
npm install ember-unsafe-typings --save-dev
```

With yarn:
```
yarn add ember-unsafe-typings --dev
```

### Usage

Import the module from one of your typescript sources:

```ts
// app.ts
import 'ember-unsafe-typings';
```
