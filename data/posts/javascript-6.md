### 1.생성자

new 연산자를 이용해서 새로운 객체를 생성하는 함수를 생성자 함수라고 부른다.

![](https://images.velog.io/images/sdp1123/post/14000d41-8f29-4cfd-8239-613c547ef1f3/KakaoTalk_20211021_012945331.png)

다음과 같은 두 객체가 있다고 해보자, 만약 새로운 속성이 추가되었다고하면

![](https://images.velog.io/images/sdp1123/post/6bb851a3-1785-4202-aa47-feea5a031ae9/KakaoTalk_20211021_013120819.png)

위와 같은 수정작업을 같은 형태의 객체들 모두에게 적용해야 된다.
또한 객체의 수가 많을 때에도 객체의 기본적인 동작방법이 바뀌게되면 같은 취지의 객체또한 다 바꿔줘야한다. 이럴때 쉽게말해 객체를 찍어내는 공장인 생성자 함수를 사용할 수 있다.

![](https://images.velog.io/images/sdp1123/post/cd8d29eb-8c94-4885-8370-31efd051a0cc/KakaoTalk_20211021_015231082.png)

이렇게 생성자 함수(new Person())를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있다

### 정리

Person 생성자가 만들어 놓은 빈 객체가 어떠한 프로퍼티를 가져야 하고 어떠한 메서드를 가져야 하는지 생성자 함수 안에다가 기술하는 것을 통해 그 객체가 가진 정보와 일을 설정할 수 있다.

---

### 2.prototype

![](https://images.velog.io/images/sdp1123/post/cd8d29eb-8c94-4885-8370-31efd051a0cc/KakaoTalk_20211021_015231082.png)

kim, lee 라는 객체를 생성할때 Person이라는 생성자 함수를 통해서 동작시켰다. 하지만 Person생성자가 실행 될때마다 그 안에 있는 sum이라는 함수가 새로 생성되고있다. 객체의 수가 많으면 많을수록 함수를 생성하는 시간이 들고, 메모리도 사용되기 때문에 이는 성능을 저하시키는 요소가 될 수 있다.
즉 생성자 안에서 메소드를 만드는 것이 큰 단점으로 작용한다.

🧨Person이라고 하는 생성자를 이용해서 만든 모든 객체가 공통적으로 사용하는 함수, 속성을 만들 수 있으면 얼마나 좋을까?
이 때 사용할 수 있는게 **prototype**이다.

![](https://images.velog.io/images/sdp1123/post/3c8f024d-adf3-46ef-b656-f06c00d5c722/KakaoTalk_20211021_021921141.png)

위와 같이 **정의하는 코드(Person.prototype.sum함수)**는 객체가 만들어질때마다 실행되지 않아 성능을 절약할 수 있고, 한번만 정의되기 때문에 메모리도 절약할 수 있다.

또한 여러 객체중, 단 하나의 객체만의 sum메소드를 다르게 동작시키고 싶을때에도 해당 객체의 sum메소드만 정의 해주면 되기 때문에 용이하다.

## 🎈예를 들어보자

```
Person.prototype.sum = function(){
	return 'prototype: ' + (this.first + this.second + this.third);
} //lee객체는 kim객체처럼 자신이 sum속성을 가지고 있지 않으므로,
생성자인 Person의 프로토타입의 sum메소드를 찾고 실행

const kim = new Person('kim', 10, 20, 30);
const lee = new Person('lee', 10, 10, 10);

kim.sum = function(){
	return 'this: ' + (this.first + this.second + this.third);
    } //kim객체 자신이 sum이라는 속성을 가지고있다는걸 찾고 실행

console.log(kim.sum()); // 결과값 -> this : 60
console.log(lee.sum()); // 결과값 -> prototype : 30

```

### console.log(kim.sum());

kim이라고하는 객체의 sum이라는 메소드를 호출할 때, 제일 먼저 그 객체 자신이 sum이라는 속성을 가지고 있는지를 찾고 실행한다.
결과값 => **this: 60**

### console.log(lee.sum());

lee라고하는 객체는 sum이라는 속성을 자신이 가지고 있는지 찾고 실행하지만, 없기때문에 객체 생성자인 Person의 prototype의 sum메소드가 정의되어 있는지를 찾고 실행한다.
결과값 => **prototype : 30**

### 정리

프로토타입의 의미는 객체가 생성될때마다 해당 객체의 메소드를 만들어 메모리에 할당을 하지 않고 생성자의 프로토타입에 정의함으로써 다른 모든 객체들이 참조하여 사용할 수 있도록한다. 이는 메모리를 효율적으로 사용할 수 있고, 불필요한 코드의 중복을 막아 유지보수에도 많은 도움이된다.
