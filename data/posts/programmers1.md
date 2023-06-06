## 나머지가 1이 되는 수 찾기

자연수 `n`이 매개변수로 주어집니다. `n`을 `x`로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 `x`를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

```jsx
function solution(n) {
  for (let x = 2; x <= n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
```

## 약수의 합

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

```jsx
function solution(n) {
  let answer = 0;
  for (let x = 1; x <= n; x++) {
    if (n % x === 0) {
      answer += x;
    }
  }
  return answer;
}
```

## 짝수와 홀수

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

```jsx
function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}
```

## 평균 구하기

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

```jsx
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
```

## 자릿수 더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

```jsx
function solution(n) {
  let answer = 0;
  while (n > 0) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}
```

## x만큼 간격이 있는 n개의 숫자

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

```jsx
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
```

## 자연수 뒤집어 배열로 만들기

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

```jsx
function solution(n) {
  let answer = [];
  let arr = n.toString().split("");
  console.log(arr[1]);
  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(parseInt(arr[i]));
  }

  return answer;
}
```
