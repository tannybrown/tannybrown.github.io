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
입력과 출력간의 **선형** 관계를 파악하는 것을 선형회귀(linear regression)라 한다. <br>
> ??? : 선형이 뭐냐고~


![image](https://user-images.githubusercontent.com/121401159/215164579-8973c8fe-ce9c-4f18-aaa8-f94cca213e4d.png)<br>
(필자가 좋아하는 김선형 선수다.)<br>

선형이라함은, 쉽게 말해 **일차식 관계**를 의미한다. 사실 깊게 들어가자면 다소 어려운 내용일 수 있어 이정도로 넘어가자. <br>

