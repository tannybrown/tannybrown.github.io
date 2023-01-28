---
emoji: 🔮
title: 4. 선형회귀를 하는 이유
date: '2023-01-28 10:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 회귀가 뭐야
![image](https://user-images.githubusercontent.com/121401159/215163818-4b204570-e3e1-42fd-a655-dfbcc48a5c64.png)<br>

[이전글](https://tannybrown.github.io/ai/4/)에서 인공신경망에 대해 알아보았다. <br>
이번 글에서는 **선형회귀**에 대해 알아보자. <br>
회귀는 '**입력과 출력간의 관계를 파악하는 것**'을 의미한다.<br>
> 회귀를 **왜** 배우나요?

우린 회귀를 통해, **처음보는 입력에 대해서 적절한 출력**을 얻고 싶다.<br>
그럼 선형 회귀는 뭘까?<br>
어떤 **연속적인 데이터 값**들 간의 관계를 선형 함수로 모델링하는 것을 **선형회귀(linear regression)** 라 한다. <br>
> 연속적인 데이터가 뭔가요?

데이터의 분류를 먼저 알아야하는데, 데이터는 크게 **수치형**과 **범주형**으로 나뉜다. <br>
그리고 그 중 수치형은 **연속형**과 **이산형**으로 나뉜다. <br>
예를 들어 몸무게, 키, 시간 등이 연속형에 속하며, 상품의 개수, 글자 수 등이 이산형에 속한다.

> ??? : 선형이 뭔가요?


선형이라함은, 쉽게 말해 **일차식 관계**를 의미한다. 선형의 의미에 대해서는 다른글에서 따로 다뤄보자. <br>

선형 회귀는 두 가지 유형으로 나눌 수 있다.

- 일반적인 선형 회귀(Simple Linear Regression) : 하나의 독립 변수(Independent variable)와 하나의 종속 변수(Dependent variable)로 구성된 데이터를 모델링하는 경우. <br>예를 들어, 공부 시간과 시험 점수 간의 관계를 모델링 할 때 사용한다.

- 다중 선형 회귀(Multiple Linear Regression) : 여러 개의 독립 변수와 하나의 종속 변수로 구성된 데이터를 모델링하는 경우. <br>예를 들어, 공부 시간, 인터넷 사용 시간, 휴식 시간과 시험 점수 간의 관계를 모델링 할 때 사용한다.


<br><br>

## 1. 선형회귀와 학습
예시를 하나 가져왔다. <br>
![image](https://user-images.githubusercontent.com/121401159/215274142-03f6ea1d-bcea-44f5-adee-0d32613b9aad.png)<br>
(reference : https://gilberttanner.com/blog/linear-regression-explained)<br><br>
x축이 공부시간, y축이 시험 점수이고 다음과 같은 data(점)들이 존재한다고 할때, x와 y의 선형관계를 빨간 직선으로 표현할 수 있다.<br>
선형관계를 잘 표현한 적절한 빨간 직선을 찾는 것이 바로 **학습**이다.<br>
위 직선은 다음과 같이 표현할 수 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/215274972-af0916e9-f458-41df-945c-8c28b6e2c7a5.png)<br>
y위의 ^(hat)이 있는 이유는 **실제 y값**이 아닌 **예측된 y값**이라는 의미이다.<br>
또한 앞선 글에서 배운 파라미터와 bias를 확인할 수 있다.<br>
학습 방법은 매우 간단하다. 먼저 Loss(cost)를 정의한다. 이 경우 Loss로 MSE를 써보자.<br>
> MSE는 mean square error의 약자로, (예측값과 실제 값의 차)의 제곱의 합을 의미한다.

Loss는 이름에서 알 수 있듯, 작을 수록 좋다. 이 Loss의 값을 **최소**로 만드는 w와 b를 찾으면, 학습이 끝난다.<br>
자 그러면, w와 b를 어떻게 찾을 수 있을까?<br>
![image](https://user-images.githubusercontent.com/121401159/215275914-56118e3d-78ed-4549-98ff-010e90810eef.png)<br>
<br>
**무지성 대입**을 시도할 수도 있지만, 지성인으로서 스마트한 방법을 생각해보자.<br>
우린 크게 두가지 방법을 사용할 수 있다.
- **Analytical method **
- **Numerical method**
먼저 Analytic method는 수학적 접근이다. 직접 손으로 식을 써서 수학을 통해 문제를 해결한다. 반대로, Numerical method는 수치해석적 방식으로, 컴퓨터를 이용해 문제를 해결한다.<br>
그리고 우리가 해결할 대부분의 경우에, Numerical method를 사용하게 될 것이다.
> **왜** Analytical method는 많이 안쓰이나요?

Analytical methods는 수학적 방법을 사용하여 문제를 해결하므로 문제가 수학적으로 표현될 수 있는 경우에만 사용할 수 있다. 하지만 많은 문제들이 수학적으로 표현하기 어렵거나, 계산 시간이 너무 오래 걸린다. 반면 Numerical method는 수학적으로 표현되지 않아도, 컴퓨터로 근사치를 구해낼 수 있다. <br>
또한, 일부 문제는 실제 일어나는 현상을 모델링하는데, 이러한 모델은 수학적으로 정의가 어렵다. ex. 나비에 스토크스 <br>
따라서 Numerical method가 더 많이 쓰인다.
> 필자는 언제나 말하지만, 어떤 하나의 방법을 고수하는 것은 옳지 않다고 생각한다. 모든 방법엔 trade-off가 있고, **주어진 상황에 알맞은 방법을 취사선택하는 것이 엔지니어가 가져야할 자세**이다.

Numerical method가 많이 쓰인다고 하니, 선형회귀에서 쓰이는 Numerical method, **Gradient Descent**에 대해 다음시간에 알아보자!  


