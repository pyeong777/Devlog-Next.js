## for in

for in은 객체의 key값 또는 index를 가져와 사용할 때 사용된다.
배열에도 사용할 수 있지만 일반적으로 Object를 제외한 객체에는 사용하지 않는것이 좋다. 왜냐하면 for in으로 순회를 하게 되면 해당 요소뿐만이 아니라 프로토타입 체인을 따라 확장 속성들도 함께 순회되기 때문이다.

```
const object = {
    a: 1,
    b: 2,
    c: 3
};

Object.prototype.check = function() {};

for ( const key in object ) {
	console.log(key, object[key]);
}

//a 1 b 2 c 3 check function()
```

> object 객체의 요소뿐만 아니라 Object의 prototype으로 만든 check함수까지 함께 순회되는 것을 볼 수 있다.

## for of

for of는 iterable(반복 가능)한 객체의 순회를 도와주는 반복문이다.
따라서 내부에 [Symbol.iterator]를 가진 객체라면 뭐든 순회할 수 있다.

```
const alphabet = [a, b, c, d, e];
for ( const value of alphabet) {
	console.log(value);
}

// a b c d e
```

> for of 는 array뿐만 아니라 map, set도 다룰수 있다..
