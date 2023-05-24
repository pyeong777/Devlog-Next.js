### if문

가장 기본적인 조건문인 if이다

```
const a = 1;
if ( a +1 === 2;) {
	console.log('a+1 은 2이다')
}

```

결과는, "a+1 은 2이다"가 출력된다.
if문을 사용하면, 이렇게 특정 조건이 만족 될 때에만 특정 코드를 실행 시킬 수 있다.

```
if (조건) {
  코드;
}
```

조건이 만족됐을 때 실행시킬 코드가 { } 로 감싸져있는데, 이를 코드 블록이라고 한다.

만약에 조건이 true 가 된다면 지정한 코드가 실행되는 것이고, false 가 된다면 코드가 실행되지 않는다.

이전에 let 과 const를 알아 볼 때, 다른 블록 범위에서는 똑같은 이름으로 선언 할 수도 있다고 했다.

```
const a = 1;
if (true) {
  const a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);
```

결과는 다음과 같다.(조건을 true로 설정해서 블록내부 코드가 무조건 실행된다)

> "if문의 안의 a 값은 2"
> "if문 밖의 a 값은 1"

---

### if else문

if else 문은 "만약 ~한다면 ~하고, 아니라면 ~해라"를 의미한다.

```
const a = 20;
if (a > 5) {
  console.log('a 가 5보다 큽니다.');
} else {
  console.log('a 가 5보다 크지 않습니다.');
}

```

위 코드의 결과는 "a가 5보다 큽니다." 이다.

---

### if-else if문

if-else if문은 여러가지 조건에 따라 다른 결과값을 도출할 때 사용한다.

```
const a = 20;
if (a === 5) {
  console.log('5입니다');
} else if (a === 10) {
  console.log('15입니다');
} else {
  console.log('5도 아니고 15도 아닙니다.');
}
```

위 코드의 결과는 "5도 아니고 15도 아닙니다"가 된다.

---

### switch-case문

특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용한다.

```
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('어느것도 아닙니다');
}
```

위 device 변수의 값을 각각 바꿔가면서 코드를 실행해 보면 그 값에 따라서 각각 다른 결과가 나온다.

switch/case 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해주어야 한다. break 를 하지 않으면 그 다음 case 의 코드까지 실행하게 된다.
맨 아래의 default: 는 device 값이 우리가 case 로 준비하지 않은 값일 경우를 의미한다.
