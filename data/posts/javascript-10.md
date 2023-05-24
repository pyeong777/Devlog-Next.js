자바스크립트에서 함수는 특정한 객체나 클래스에 종속되지만, 따로 존재하다가 필요에 따라 어떤 객체의 메소드든 될수 있다.

```
var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}

function sum(){
	return this.first + this.second;
}
```

지금까지 sum이라는 함수는 kim과 lee의 객체안에 있는 first와 second를 더해주는 역할을 하였다. 하지만 위 코드에서는 어떤 객체안에도 속해있지 않고 혼자 존재한다. 이때 함수를 호출하는 역할을 가진 메소드를 사용할 수 있다.

## 1. call

call메소드는 기본적으로 함수를 호출하는 역할을 가진다.
해당 메소드의 첫번째 인자로는 호출할 함수의 내부적인 this로 정할 값이 오고, 두번째 인자부터는 호출할 함수의 매개변수에 들어갈 값들이 오게된다.

```
let kim = {name:'kim', first:10, second:20}
let lee = {name:'lee', first:10, second:10}

function sum(prefix){
	return prefix + (this.first + this.second);
}

sum.call(kim, '=> ');
sum.call(lee, ': ');

console.log('sum.call(kim)', sum.call(kim));
// sum.call(kim) => 30
console.log('sum.call(lee)', sum.call(lee));
// sum.call(lee) : 20
```

> ### sum.call(kim, '=> ');
>
> sum함수가 내부적으로 사용할 this의 값을 kim으로 지정한 것이다.
> sum함수의 매개변수로 사용할 값인 prefix를 call메소드의 두번째 인자부터 지정한다.

> ### sum.call(lee, ': ');
>
> sum함수가 내부적으로 사용할 this의 값을 lee로 지정한 것이다.
> sum함수의 매개변수로 사용할 값인 prefix를 call메소드의 두번째 인자부터 지정한다.

---

## 2. bind

bind메소드는 함수의 첫번째 인자로 this를 바인딩한다는 점은 call메소드와 같지만, 함수를 실행하지 않고 반환하게된다. 즉, 반환된 새로운 함수를 실행해야 원본 함수가 실행된다.

```
let kim = {name:'kim', first:10, second:20}
let lee = {name:'lee', first:10, second:10}

function sum(prefix){
	return prefix + (this.first + this.second);
}

let kimSum = sum.bind(kim, '->');

console.log(kimSum());
// -> 30
```

> ### let kimSum = sum.bind(kim, '->');
>
> 내부적으로 this를 kim으로 영구적으로 바꾼 새로운 함수(kimSum)가 만들어진다.
> **call**과 마찬가지로 매개변수로 사용할 prefix값을 bind메소드의 두번째 인자부터 지정한다.

---

> 자바스크립트를 공부하면 할수록 자유도가 엄청 높다고 느끼고있다.
> 그만큼 혼란스럽지만 ㅠㅠ
