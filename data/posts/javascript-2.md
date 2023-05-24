### 산술 연산자

산술 연산자는 사칙연산과 같은 작업을 하는 연산자를 말한다

> +: 덧셈
> -: 뺼셈
> \*: 곱셈
> /: 나눗셈

```
let a = 1;
a++;
++a;
console.log(a);
```

결과는 3이 나타난다. ++가 변수 이름 앞에 오는 것과 뒤에 오는것에 차이가 있다.
![](https://images.velog.io/images/sdp1123/post/19698432-817f-46ee-8c5f-ea532fc25b77/KakaoTalk_20211019_211339967.png)

console.log(a++); 를 할 때에는 1을 더하기 직전 값을 보여주고 console.log(++a); 를 할 때에는 1을 더한 다음의 값을 보여준다는 차이가 있다. 이는 뺄셈도 똑같다.

---

### 논리연산자

논리 연산자는, 불리언 타입 (true 혹은 false)를 위한 연산자로 총 3가지가 있다.

> !: NOT
> &&: AND
> ||: OR

#### AND

AND 연산자는 양쪽 값이 둘 다 true 일때만 결과가 true 이다.

```
const a = true && true; -> true
let f = false && false; -> false
f = false && true; -> false
f = true && false; -> false
```

#### OR

OR 연산자는 양쪽 값 중 하나라도 true 라면 결과가 true 이다.
그리고, 두 값이 둘 다 false 일 때에만 false가 된다.

```
let t = true || false; -> true
t = false || true; -> true
t = true || true; -> true
let f = false || false; -> false

```

#### 연산순서

논리 연산자도 순서가 있다. 순서는 NOT -> AND -> OR 이다.

```
const value = !((true && false) || (true && false) || !false);
```

맨 앞 NOT(!)은 괄호밖에 있으므로 맨 마지막에 계산해준다.

1. 우선 NOT 을 처리한다.

> !((true && false) || (true && false) || true);

2. 그 다음엔 AND 를 처리한다.

> !(false || false || true);

3. OR 연산자를 좌측에서 우측 방향으로 처리를 하게 된다.

> !true;

결국 결과값은 false 가 된다.

---

### 비교연산자

비교연산자는 두 값을 비교 할 때 사용한다.

#### 두값이 일치하는지 확인

```
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals); -> true
```

===는 두 값이 일치하는지 확인해준다. 이런 경우 =문자를 3개 사용하기도 하지만 2개로도 비교 할 수는 있다.

```
const a = 1;
const b = 1;
const equals = a == b;
console.log(equals); -> true

```

===와 ==의 차이점은 타입검사의 유무이다.

```
const a = 1;
const b = '1';
const equals = a === b; -> false
const equals2 = a == b; -> true
```

a는 숫자1이지만, b는 문자 '1'이기 때문에 ==의 경우 동일한 값으로 간주하지만 ===의 경우 타입이 다르기 때문에 false값을 반환하게 된다.
(0과 false / undefined와 null 도 같은 값으로 간주된다)

#### 두 값이 일치하지 않는지 확인

두 값이 일치하지 않는 걸 확인 할 때에는 != 또는 !==를 사용한다.
이것도 일치하는 경우와 마찬가지로 타입검사의 유무 때문에 != 보다 !==를 사용하는걸 권장한다.

```
console.log(1 != '1'); -> false
console.log(1 !== '1'); -> true
```
