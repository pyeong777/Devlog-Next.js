### 함수

특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능이다.

```
const a = 1;
const b = 2;
const sum = a + b;
```

위 작업을 함수로 만들어보자

```
function add(a, b) {
  return a + b;
  console.log('호출이 되지 않는 코드');
}
const sum = add(1, 2);
console.log(sum);
```

함수를 만들 때는 function 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부른다.

함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정 할 수 있고, return 할 시 함수가 끝나게되어서 그 아래의 코드는 호출이 되지 않는다.

---

### 화살표 함 수

함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법이다.

```
const add = (a, b) => {
  return a + b;
};
```

```
const add = (a, b) => a + b;
```

🎈화살표 함수와 일반 function 으로 만든 함수와의 주요 차이점은 화살표 함수에서 가르키는 this 와 function 에서 가르키는 this 가 서로 다르다는 것이다.

```
const obj = {
  fn1: function() { console.log(this); },
  fn2: () => { console.log(this); },
}
obj.fn1(); // this === myObj
obj.fn2(); // this === Window
```

fn2를 호출한 myObj가 fn2의 호출자(this)가 될 것이라 생각하기 쉽지만, fn2는 화살표 함수이므로 아무리 호출이 된다고 한들 this는 존재하지 않는다. 그래서 fn2 내부의 this는 상위에 있는 실행 콘텍스트의 this를 찾아 참조한다. 위 예시에서는 상위 실행 콘텍스트가 전역이므로 this는 전역 객체가 된다.

---

### 객체

객체를 선언할 때는 키: 원하는값 형태로 넣게된다.

```
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};
const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};
function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}
  입니다.`;
  console.log(text);
}
print(ironMan);
print(captainAmerica);
```

결과값

> 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
> 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.

#### 객체의 비구조화 할당

비구조화 할당이란 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 해주는 표현식이다.
쉽게 말해 배열이나 객체의 값을 일일히 지정해주지않아도 간편하게 변수와 매칭해 할당해 준다는 말이다.

```
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
```

```
const { alias, name, actor } = hero;
//이 코드가 객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것이다.
```

여기서 더 나아가면, 파라미터 단계에서 객체 비구조화 할당을 할수 있다.

```
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
```

---

### getter와 setter

#### 접근자 프로퍼티

접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당한다.
접근자란 OOP에서 객체가 가진 프로퍼티의 값을 객체 밖에서 읽거나 쓸 수 있도록 제공하는 메서드를 말한다.

#### getter 메서드

```
let obj = {
 get propName() {
   // getter, obj.propName을 실행할 때 실행되는 코드
 },
 set propName(value) {
   // setter, obj.propNAme = value를 실행할 때 실행되는 코드
 }
};
```

getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행된다.
setter 메서드는 obj.propNAme = value으로 프로퍼티에 값을 할당하려 할 때 실행된다.

```
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
alert(user.fullName); // John Smith
```

> 바깥 코드에선 접근자 프로퍼티를 일반 프로퍼티처럼 사용할 수 있습니다. 접근자 프로퍼티를 사용하면 함수처럼(user.fullName()) 호출 하지 않고, 일반 프로퍼티에서 값에 접근하는 것처럼 평범하게 user.fullName을 사용해 프로퍼티 값을 얻을 수 있습니다. 나머지 작업은 getter 메서드가 뒷단에서 처리해줍니다.

#### setter 메서드

```
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Java Script"
alert(user.fullName); // Java Script
alert(user.name); // Java
alert(user.surname); // Script
```

> 이렇게 getter와 setter 메서드를 구현하면 객체엔 fullName이라는 '가상’의 프로퍼티가 생깁니다. 가상의 프로퍼티는 읽고 쓸 순 있지만 실제로는 존재하지 않습니다.

참고 - https://velog.io/@bigbrothershin
