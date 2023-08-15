---
title: Summary of JSON Learning
date: 16-06-2023
tags: json,javascript
selected: true
---



JSON stands for JavaScript Object Notation, and it is a data interchange format.

> Before JSON came along, XML was used to transmit data because it is a text-based format suitable for data exchange over the internet. However, XML became complex when combined with specifications like DTD, XSD, XPath, and XSLT, making it challenging for developers to work with. In 2002, Douglas Crockford, a senior architect at Yahoo, came up with JSON, a super-lightweight data interchange format, to rescue software engineers from the complexities of XML imposed by giant software companies.

JSON is actually a subset of JavaScript. It supports a few simple data types:

- ==number==: same as JavaScript's ==number==.
- ==boolean==: equivalent to ==true== or ==false== in JavaScript.
- ==string==: similar to JavaScript's ==string==.
- ==null==: equivalent to ==null== in JavaScript.
- ==array==: same as JavaScript's ==Array==, represented by ==[]==.
- ==object==: similar to JavaScript's =={ ... }==.

JSON also enforces that character encoding must be UTF-8 and strings must be enclosed in double quotes. Object keys are also required to be enclosed in double quotes.

JSON quickly gained popularity in the web world and became an ECMA standard. Almost all programming languages have libraries for parsing JSON, and in JavaScript, JSON is natively supported, making it convenient to use.

To serialize any JavaScript object into JSON, you need to convert the object into a JSON-formatted string, allowing it to be transmitted over the network. To deserialize a JSON string into a JavaScript object, you simply parse the JSON string.

### Serialization

Let's start by serializing the object `xiaoming` into a JSON-formatted string:

```js
'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
```

To format the output, you can add parameters to control indentation:

```js
JSON.stringify(xiaoming, null, '  ');
```

The result will be:

```js
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}
```

You can also provide an array as the second argument to filter specific properties:

```js
JSON.stringify(xiaoming, ['name', 'skills'], '  ');
```

The result will be:

```js
{
  "name": "小明",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}
```

To have more precise control over the serialization process, you can pass a function as the second argument, which will process each key-value pair in the object:

```js
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');
```

The result will be:

```js
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" MIDDLE SCHOOL",
  "skills": [
    "JAVASCRIPT",
    "JAVA",
    "PYTHON",
    "LISP"
  ]
}
```

If you want to precisely control how `xiaoming` is serialized, you can define a `toJSON()` method on `xiaoming` to directly return the data that should be serialized as JSON:

```js
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // Only output name and age, and change the keys:
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
```

### Deserialization

To parse a JSON-formatted string and convert it back to a JavaScript object, you can use `JSON.parse()`:

```js
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45
```

`JSON.parse()` also accepts a function as the second argument, which can be used to transform the parsed properties:

```js
'use strict';

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
```

Using JSON in JavaScript is that simple!