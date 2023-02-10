---
emoji: 🔮
title: 10. non-linear activation은 왜 쓰는 것일까?
date: '2023-02-10 22:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
[이전글](https://tannybrown.github.io/ai/10/)에서는 역전파에 대해 알아보았다.<br>
이번글에서는 non-linear activation은 왜 쓰는 것인지! 알아보겠다.<br>


<br>
<br>

## 1. Linear activation
앞선 글들을 잘 읽어왔다면, activation function 이 무엇인지는 알고 있을 것이다.<br>
> 모르는 사람들을 위해서.<br>
> 활성화 함수를 의미하며, 인공신경망 구조에서 **입력신호의 총합을 출력신호로 바꿔주는 함수**를 의미한다.<br>
> 인체의 뉴런속의 시냅스와 유사한 역할이다.

그러면 linear activation은 무엇인가?<br>
linear activation은 활성화 함수가 linear function인 경우, 즉 1차 함수 형태인 경우를 의미한다.<br>
> 예를들어, activation function으로 f(x) = x 를 쓰는 경우를 들 수 있다.<br>
> 이 경우, 입력으로 받은 값이 그대로 출력으로 나올 것이다.

linear activation은 딥러닝에서 많이 사용되는 활성화 함수이다. 대표적으로 회귀문제, 마지막 계층의 활성화 함수, LSTM or GRUs등의 순환 신경망에서 사용된다.<br>

<br>
<br>

## 2. Linear activation의 한계
linear activation은 입출력의 크기를 변하지 않게 하는 장점이 있지만, 단점 또한 존재한다.<br>
이번글에서 전달하고 싶은 linear activation의 단점은 바로, linear activation만으로는 **복잡한 인공신경망**을 표현하지 못한다는 것이다.<br>
### 복잡한 인공신경망?
그저 layer가 깊으면 복잡한 인공신경망일까? 약 100층, 200층, 1000층을 쌓으면 복잡한 인공신경망일까?<br>
복잡한 인공신경망이기 위해서는 한가지 조건이 필요하다. 바로 activation function이 linear activation이 아니어야 한다는 것이다.<br>
왜 그런것인지 예시를 통해 살펴보자.<br>
![image](https://user-images.githubusercontent.com/121401159/218087901-2fd4007f-8b1e-4962-988b-a7015ed234a4.png)<br>
가장 기본적인 구조로 1차함수 wx + b 를 만들어 보았다. 여기까지는 쉽게 따라 올 수 있을 것이다.<br>
그렇다면 여기서 더 층(layer)를 늘려본다면 더 복잡한 출력을 가질 수 있을지 살펴보자.
![image](https://user-images.githubusercontent.com/121401159/218087373-3e4a1db2-37db-430b-a6c0-bd0fc5469a6d.png)<br>
조금 더 층을 늘려서 표현해보았다.<br>
출력을 보면 f(f(x)w + b)의 형태인데 f(x)가 linear activation 이므로 이결과 역시 linear function이 된다.<br>
즉슨, 층을 아무리 늘려도 g(x) = aw + b 의 형태를 벗어나지 못한다는 뜻이다.



> 결론 : linear activation으로는 아무리 깊게 만들어도 hidden layer 없는 인공신경망 만큼의 표현력만 갖게 된다.


<br>
<br>

## 3. Non-linear activation


<br>
<br>

## 4. 마무리
이번글에서는 non-linear activation을 써야하는 이유에 대해 알아보았다.<br>
다음글에서는 이진분류에 대해 알아보도록 하자.
<br>
<br>
```toc
```
