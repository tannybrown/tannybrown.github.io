---
emoji: 🔮
title: 4. 선형회귀를 찢어보자
date: '2023-01-28 10:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 회귀가 뭐야
![image](https://user-images.githubusercontent.com/121401159/215163818-4b204570-e3e1-42fd-a655-dfbcc48a5c64.png)<br>

[이전글](https://tannybrown.github.io/ai/4/)에서 인공신경망에 대해 알아보았다. <br>
이번 글에서는 선형회귀에 대해 알아보자. <br>
회귀는 '입력과 출력간의 관계를 파악하는 것'을 의미한다.<br>
> 회귀를 왜 해야하나요?

우린 회귀를 통해, **처음보는 입력에 대해서 적절한 출력**을 얻고 싶다.<br>
그럼 선형 회귀는 뭘까?<br>
어떤 연속적인 데이터 값들 간의 관계를 선형 함수로 모델링하는 것을 선형회귀(linear regression)라 한다. <br>
> ??? : 선형이 뭐냐고~


![image](https://user-images.githubusercontent.com/121401159/215164579-8973c8fe-ce9c-4f18-aaa8-f94cca213e4d.png)<br>
(필자가 좋아하는 김선형 선수다.)<br>

선형이라함은, 쉽게 말해 **일차식 관계**를 의미한다. 사실 깊게 들어가자면 다소 어려운 내용일 수 있어 이정도로 넘어가자. <br>

선형 회귀는 두 가지 유형으로 나눌 수 있다.

- 일반적인 선형 회귀(Simple Linear Regression) : 하나의 독립 변수(Independent variable)와 하나의 종속 변수(Dependent variable)로 구성된 데이터를 모델링하는 경우. 예를 들어, 공부 시간과 시험 점수 간의 관계를 모델링 할 때 사용.

- 다중 선형 회귀(Multiple Linear Regression) : 여러 개의 독립 변수와 하나의 종속 변수로 구성된 데이터를 모델링하는 경우. 예를 들어, 공부 시간, 인터넷 사용 시간, 휴식 시간과 시험 점수 간의 관계를 모델링 할 때 사용.

