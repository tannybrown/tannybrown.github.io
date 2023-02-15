---
emoji: 🔮
title: 15. 깊은 인공신경망의 문제 2편
date: '2023-02-15 23:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
깊은 인공신경망의 문제점중 하나인 vanishing gradient...<br>
이를 해결하기 위한 방안인 ReLU에 대해 살펴보았다.<br>
이번글에서는 또 다른 방안인 Batch Normalization에 대해 살펴보겠다.<br>

<br>
<br>

## 1. Batch Normalization
자 [이전시간](https://tannybrown.github.io/ai/16/)에 배운 ReLU를 이용하여 신경망을 구성한다고 해보자.<br>
Batch Normalization의 batch는 mini-batch 알고리즘의 batch를 의미한다.<br>
batch normalization은 어떤 layer에 적용할지를 선택한다. (하이퍼 파라미터이다 ㅇㅇ)<br>
