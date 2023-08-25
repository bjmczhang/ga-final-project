---
title: Creating classes
date: 13-05-2023
author: Benjamin Zhang
tags: javascript
selected: false
---



# Creating classes

Inheritance in JavaScript is based around the prototype object.

Imagine that you need to code a Train class.



##### 1. Define

- define the ==Train== class, with the first letter capitalized

```js
class Train {}
```

- the first piece of code that you need to define is the **constructor**

```js
class Train {
    constructor() {

    }
}}
```

The ==constructor== will be used to build properties on the future object instance of the Train class.

- For now, let's say that there are only two properties that each object instance of the Train class should have at the time it gets instantiated: color and lightsOn.

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
```

>Notice: 
>
>1. there is no ==function== keyword
>
>2. the keyword ==constructor== is used to define this function
>3. What does this this keyword here represent? **It's the future object instance of the** Train **class**.



##### 2. Instantiate

- build a new instance of the Train class

```js
new Train()
```

- pass values and assign it to a variable

```js
var myFirstTrain = new Train('red', false);
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
```



##### 3. You can also add methods to classes

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
```

> The getPrototype() console logs the prototype of the object instance of the ==Train== class. The prototype holds all the properties shared by all the object instances of the ==Train== class. To get the prototype, you'll be using JavaScript's built-in ==Object.getPrototypeOf()== method, and passing it ==this== object - meaning, the object instance inside of which this method is invoked.

```js
var train4 = new Train('red', false);
```

```js
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
```



##### 4. Inherit

- To inherit from one class to a new sub-class, JavaScript provides the extends keyword

```js
class HighSpeedTrain extends Train {
}
```

- Defining its constructor function

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```

> In JavaScript classes, ==super== is used to specify what property gets inherited from the super-class in the sub-class.

- You also **automatically inherit** all the methods that exist on the Train prototype

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
}
```

- Additionally, you want to implement the ==toggleLights()== method a bit differently in the sub-class. You can add it inside the HighSpeedTrain class

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
```

- Now you're ready to build some train objects

```js
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
```

