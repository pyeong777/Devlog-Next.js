## Class

원래 Constructor function을 통해서 객체를 생성하지만, 대체제인 Class라는 문법이 ES6버전에서 나옴으로써 쉽게 객체지향 프로그래밍을 할 수 있게되었다.

> 아래 코드는 전통적인 자바스크립트의 문법을 통해서 구현한 객체지향 코드이다. ([Prototype 게시글](https://velog.io/@sdp1123/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%83%9D%EC%84%B1%EC%9E%90%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85) )

```
function Person(name, first, second) {
  	this.name = name;
   	this.first = first;
  	this.second = second;
}

Person.prototype.sum = function(){
	return 'prototype : ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
	return 'this : ' + (this.first + this.second);
}

var lee = new Person('lee', 10, 10);

console.log('kim.sum()', kim.sum());
//결과값 this : 30
console.log('lee.sum()', lee.sum());
//결과값 prototype : 20

```

---

🎈위 코드와 똑같이 동작하지만, 내부적으로는 class 문법을 사용해서 구현할 수 있다.

```
class Person {
	constructor(name, first, second){
    	this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
    	return 'prototype : ' + (this.first + this.second);
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
	return 'this : ' + (this.first + this.second);
}

var lee = new Person('lee', 10, 10);

console.log('kim.sum()', kim.sum());
//결과값 this : 30
console.log('lee.sum()', lee.sum());
//결과값 prototype : 20
```

> 우리는 원래 Constructor 함수의 prototype이라는 객체에 sum이라는 프로퍼티**(Person.prototype.sum)**를 함수로 지정함으로써 new Person을 통해 만들어진 모든 객체를 공유하는 함수를 만들수 있었지만, Person Class안에 sum함수를 그냥 지정함으로써 그 역할을 할 수 있다.
> 또한 **constructor**라는 약속된 이름을 통해서, 객체를 생성할때 초기값을 설정할 수 있다.
