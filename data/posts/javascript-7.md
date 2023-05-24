## Prototype Object

```
function Person(){} // => 함수

const personObject = new Person(); // => 함수로 객체를 생성
```

personObject 객체는 Person이라는 함수로 생성된 객체이다. 이렇듯 언제나 객체는 함수로 생성된다.

```
const obj = {}; //함수와 전혀 관계가 없어보이지만 사실 아래의 코드와 같다.
const obj = new Object();

```

![](https://images.velog.io/images/sdp1123/post/d687ea1b-b34c-46ff-89be-5b26328fc5e4/1.png)
자바스크립트가 기본적으로 제공하는 Object라는 함수이다.

이렇게 함수가 정의될 때 2가지 일이 동시에 일어나게된다.

### 1. 해당 함수에 Constructor(생성자) 자격 부여

생성자 자격이 부여되면 new를 통해 객체를 만들어 낼 수 있게된다.

![](https://images.velog.io/images/sdp1123/post/8644269e-44d8-405e-ab85-50eda7c645cf/2.png)
이것이 함수만 new 키워드를 사용할 수 있는 이유이다.

### 2. 해당 함수의 Prototype Object 생성 및 연결

함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object도 같이 생성이 된다.

![](https://images.velog.io/images/sdp1123/post/ab0a5ddb-a7e7-42e0-b400-93ea1884f674/3.png)

위 그림과 같이 생성된 Person함수가 **prototype이라는 속성을 통해** 생성된 Person Prototype Object에 접근할 수 있게된다.
일반적으로 Prototype Object는 객체와 같으며 기본적인 속성으로 **constructor**와 ****\_\_**proto**\_\_****를 가지게 된다.

![](https://images.velog.io/images/sdp1123/post/4dc8a848-122a-45e2-81c6-0ea1fb81977d/4.png)
**constructor**는 Prototype Object와 같이 생성된 함수를 가르키고 있다.

****\_\_**proto**\_\_****는 Prototype Link이다.(아래에 설명!)

### 예를 들어보자

```
function Person(){};

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

const kim = new Person();
const lee = new Person();

console.log(kim.eyes); // 결과값 => 2
```

![](https://images.velog.io/images/sdp1123/post/3685135b-ede1-4943-a34e-6e1d5d98c0a2/5.png)
🎈Person 함수를 생성하고 prototype을 이용해 eyes와 nose 속성을 정의해주었더니 위 사진의 콘솔창에서 처럼 Person.prototype 객체도 생성되면서 거기에 eyes와 nose 속성이 추가되었다!

1. Prototype Object는 일반적인 객체이므로 속성을 추가/삭제 할수 있다.
2. kim과 lee는 Person 함수를 통해 생성되었으니 Person.prototype을 참조할수 있게된다.

---

## Prototype Link

![](https://images.velog.io/images/sdp1123/post/894686e7-b84d-4878-82ae-b9cadfcb1a08/6.png)
kim에는 eyes라는 속성이 없는데도 kim.eyes를 실행하면 2라는 값을 참조하는 것을 볼 수 있다. 이는 Prototpye Object에 존재하는 eyes속성을 참조한것이다. 이게 어떻게 돌아가는 원리일까?

바로 kim이 가지고 있는 ****\_\_**proto**\_\_**** 라는 속성이 이게 가능하게 해준다.

**prototype**속성은 함수만 가지고 있던 것과 달리 ****\_\_**proto**\_\_****는 객체가 생성될 때 조상이었던 함수의 Prototype Object를 가르킨다. kim객체는 Person함수(조상)로부터 생성되었으니 Person 함수의 Prototype Object를 가르키고 있는것이다.

![](https://images.velog.io/images/sdp1123/post/c9227b95-cf68-40cd-9334-3b16175dd50d/7.png)

kim객체의 ****\_\_**proto**\_\_****속성을파헤쳐보니 Person함수의 Prototype Object를 가르키고 있다!!

![](https://images.velog.io/images/sdp1123/post/75cde8d2-61f3-4251-bb4b-0fe4c7eda56c/8.png)

kim객체가 eyes를 직접 가지고 있지 않기 때문에 그 속성을 찾을때 까지 상위 프로토타입을 탐색하게된다. 최상위인 자바스크립트 기본내재 함수 Object의 Prototype Object 까지 도달했는데도 못찾았을 경우에 undefined를 리턴한다. 이렇게 ****\_\_**proto**\_\_**** 속성을 통해 상위프로토타입과 연결되어있는 형태를 프로토타입 체인이라고 한다.

![](https://images.velog.io/images/sdp1123/post/6b2e676c-0621-485d-a996-48ff97342d1d/9.png)'

이런 프로토타입 체인 구조 때문에 모든 객체는 Object의 자식이라고 불리고, Object의 Prototype Object에 있는 모든 속성을 사용할 수 있다. 한 가지 예를 들면 toString 함수가 있다.

![](https://images.velog.io/images/sdp1123/post/95888f99-4000-4b10-a506-969f7e055c7d/10.png)
위 그림과 같이 kim객체도 toString 함수를 이용할 수 있다.

> 프로토타입이 어떤 원리로 쓰이는지 궁금해서 찾아보다가, 좋은 블로그를 통해 공부할 수 있게 되었다.
> 출처 : https://medium.com/@bluesh55
