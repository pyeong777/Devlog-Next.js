## 상속이란?

상속이란 반복적인 코드를 작성하지 않고 코드를 재 사용하는 방법을 의미한다.코드를 재 사용함으로써 소프트웨어 개발기간과 시간을 단축할 수 있는 장점이 있다.

![](https://images.velog.io/images/sdp1123/post/97b8c12b-e05e-4e81-b077-23d71cea0d78/%EC%83%81%EC%86%8D2.jpg)

위 코드는 전에 작업했던 Person이라는 클래스이다.
Person 클래스는 sum이라는 메소드를 가지고 있는데, 예를들어 avg 메소드가 추가로 필요할 경우 단순하게 avg 메소드를 클래스안에 추가해줄수 있겠지만 언제나 이런 방식으로 대응할 수는 없다.

![](https://images.velog.io/images/sdp1123/post/b97a57ff-a96a-4076-8e05-4045af53a5a0/%EC%83%81%EC%86%8D1.png)

상속을 사용하지 않는 다른 방법으로 이렇게 새로운 클래스를 만들어 avg 메소드를 추가할수 있다. 하지만 중복 코드가 굉장히 거슬리기 때문에 이를 상속기능 통해 해결할 수 있다.

![](https://images.velog.io/images/sdp1123/post/5de61db2-0c8d-4f11-a119-8609526b2486/%EC%83%81%EC%86%8D3.png)

위 코드와 같이 **extends**를 사용해 상속받을 class를 지정해서 중복코드를 제거하고, 추가할 avg 메소드만 작성하면 된다.

---

## Super

![](https://images.velog.io/images/sdp1123/post/5de61db2-0c8d-4f11-a119-8609526b2486/%EC%83%81%EC%86%8D3.png)

만약 PersonPlus라고 하는 클래스에서 third라는 새로운 값을 추가하고 싶을 때에는 어떻게 해야할까?

![](https://images.velog.io/images/sdp1123/post/891a78ad-acbc-4aa1-bcfd-c8019c529ba8/%EC%83%81%EC%86%8D4.png)

이렇게 작성할 수 있겠지만, 이는 원점으로 돌아가 중복코드를 제거해주는 이점을 가진 상속이라는 기능을 무의미하게 만든다. 이러한 경우를 위해 부모클래스가 하지 못하는 일은 나만 할수 있도록 하는 **super**라는 키워드가 있다.

![](https://images.velog.io/images/sdp1123/post/da8cef95-c20b-4833-aa28-2c3a27300bde/%EC%83%81%EC%86%8D5.png)

> 위 코드에서 알수있는 super 사용법

```
this.name = name;
this.first = first;       =>	super(name, first, second)
this.second = second;
```

이 중복을 제거하고 super()로 치환하게 된다.
이때 super뒤에 괄호가 붙게 되는데 이는 부모클래스의 생성자 호출을 하게 된다<br>

```
return this.first + this.second + this.third
=> super.sum() + this.third
```

super뒤에 .이 붙게 되면 부모클래스 자체를 의미한다.

---

## 객체의 상속

다음과 같은 코드가 있다

> ```
> let superObj = {superObj: 'super'}
> let subObj = {subVal: 'sub}
> ```

````

subObj와 superObj는 서로 남남의 관계이다. 그런데 자바스크립트에서는subObj라는 클래스가 아닌 객체를 직접 다른 객체의 자식으로 만들어 버릴수 있다.

> ```
let superObj = {superObj: 'super'}
let subObj = {subVal: 'sub}
subObj.__proto__ = superObj;
````

subObj의 프로토타입 링크를 정해주는 속성인 **\_\_****proto****\_\_**을 주고 그 값을 superObj로 정해주면 된다.

> 이제 console.log를 확인해 보자

```
console.log('subObj.subval ==> ', subObj.subval);
//결과값 subObj.subval ==> sub
console.log('subObj.superVal ==> ', subObj.superVal);
//결과값 subObj.subval ==> super
```

즉 subObj 객체가 superObj 객체의 자식이 되었다는 의미이다.

## .**\_\_****proto****\_\_**의 대체제 Object.create()

상속을 받을 때, **\_\_****proto****\_\_**를 이용하는것보다 더 나은 방법을 알아보도록 하자.

> ```
> let superObj = {superObj: 'super'}
> let subObj = Object.create(superObj);
> subObj.subVal = 'sub';
> ```

```
Object.create()메소드에 superObj라는 인자를 넣어 subObj가 superObj의 자식객체로 만든다.

![](https://images.velog.io/images/sdp1123/post/c04e833b-e254-4026-9b2f-06abfd7642f7/%EC%83%81%EC%86%8D7.png)

![](https://images.velog.io/images/sdp1123/post/a513b74e-2896-4239-8f55-97397fa52048/%EC%83%81%EC%86%8D8.png)

subObj객체를 콘솔창으로 확인해 보면 subVal: 'sub'를 가지고 있고,
subObj객체의 ______**proto**______은 superObj을 가르키는 것을 알 수 있다.







```
