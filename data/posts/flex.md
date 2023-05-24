### 레이아웃

✅ 수평정렬 inline-block 사용시, 블록 사이 공백이 생기게 된다. 이를 해결하려면 부모요소에 font-size:0 을 부여해주고 자식에게 다시 font-size를 알맞게 설정해주면 된다.

✅ **논리적 마크업 순서**를 지키는 것 중요!

✅ Float 요소 사용시 형제 요소들이 float 요소의 박스를 인식하지 못하기 때문에 **가상 요소(clearfix)**를 사용, 가상의 block formatting context를 생성해주어 자식 요소의 높이값을 품도록 해준다.

또다른 방법으로는 부모 요소에 ** overflow:hidden** 선언을 통해 자식 요소만큼 높이값을 계산해주는 방법이 있다. 단점으로는 부모 요소에 해당 영역이 넘치는 디자인 요소가 들어갈 경우 무용지물이 된다는 점.
_**(다른 방법들도 있지만 위 2가지가 가장 괜찮고 무난한 방법임)**_

### Clearfix를 사용한 레이아웃 형태

```
 ul::after{
            content: '';
            display: block;
            clear: both;
        }

        li {
            width: 200px;
            height: 400px;
            list-style: none;
            float: left;
        }
```

![](https://images.velog.io/images/sdp1123/post/0b7e2db6-efc1-43ee-83db-add66314545f/%EC%BA%A1%EC%B2%98.PNG)

**✅Float을 활용한 네이버 로그인 화면 UI창 만들기**

이거 할때, 수직 정렬이 가장 어려웠다.
정렬 연습 열심히 해야겠다..🤦‍♂️
![](https://images.velog.io/images/sdp1123/post/abf8ecb2-6074-4503-a26f-ee36cb9cec02/naverUI.png)

> **코드 **https://github.com/pyeong777/frontend_html/blob/main/11%EC%9B%94%205%EC%9D%BC/neverUI.html

---

### display: flex 와 display: inline-flex의 차이점?

**✅ display: flex는 블록처럼 영역을 전부 차지한다.**
![](https://images.velog.io/images/sdp1123/post/9c44aec6-17dc-479d-8680-c5bfaaa16ba5/flex.png)

**✅ display: inline-flex는 자식들의 넓이만큼만 자신의 넓이를 잡는다.**![](https://images.velog.io/images/sdp1123/post/c8d7ed68-234e-44ab-856d-bcac8b5ca4fb/inline-flex.png)

### flex-direction

**✅ 정렬 방향을 결정한다, 기본설정은 flex-direction: row이다.**

**✅ row-reverse일 경우 거꾸로 정렬된다.**

![](https://images.velog.io/images/sdp1123/post/4ba361c2-7b13-49bb-8866-88500774618c/KakaoTalk_20211105_202908641.png)

**✅ column으로 설정할 경우 세로로 정렬된다.**
![](https://images.velog.io/images/sdp1123/post/c4e9c102-c9d7-4b5e-8bc3-23881b79e6f6/KakaoTalk_20211105_202916050.png)

**✅ column-reverse 으로 설정할 경우 거꾸로 정렬된다.**
![](https://images.velog.io/images/sdp1123/post/75220f67-b99d-4589-b403-1231cd499b20/KakaoTalk_20211105_202923608.png)

### justify-content

**✅ flex-start - 기본값**
해당 요소들을 시작점으로 정렬한다. row일땐 왼쪽 & column일땐 위쪽

**✅ flex-end **
해당 요소들을 끝점으로 정렬한다. row일땐 오른쪽 & column일땐 아래쪽

**✅ center**
말 그대로 해당 요소들을 가운데로 정렬한다.

**✅ space-between, space-around, space-evenly**

1. space-between은 요소들 사이에 일정한 간격을 준다.
2. space-around는 요소들의 둘레에 일정한 간격을 준다.
3. space-evenly는 요소들 양 끝에 일정한 간격을 준다.

![](https://images.velog.io/images/sdp1123/post/702b3782-09ff-4cfc-82e8-85e30d968cb0/KakaoTalk_20211105_200855352.png)

> **그림출처 **: https://studiomeal.com/archives/197
