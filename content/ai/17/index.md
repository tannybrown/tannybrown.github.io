---
emoji: 🔮
title: 16. 깊은 인공신경망의 문제 2편
date: '2023-02-16 00:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
깊은 인공신경망의 문제점 중 하나인 vanishing gradient...<br>
이를 해결하기 위한 방안인 **ReLU**에 대해 살펴보았다.<br>
이번글에서는 또 다른 방안인 **Batch Normalization**에 대해 살펴보겠다.<br>

<br>
<br>

## 1. Batch Normalization
자 [이전시간](https://tannybrown.github.io/ai/16/)에 배운 ReLU를 이용하여 신경망을 구성한다고 해보자.<br>
Batch Normalization의 batch는 mini-batch 알고리즘의 batch를 의미한다.<br>
batch normalization은 어떤 layer에 적용할지를 선택한다. (이는 하이퍼 파라미터이다 ㅇㅇ)<br>
예시 그림에서는 첫번째 보이는 hidden layer에 batch normalization을 적용하려 한다.<br>
![image](https://user-images.githubusercontent.com/121401159/219054999-f17a5ee4-ded4-411d-848e-c128e7ebe60e.png)<br>
> 예시니까 간단한 구조로 그린것임

자 이때 ReLU에 집중해보자.<br>
만약 ReLU에 들어온 데이터가 모두 양수였다면, 모두 linear하게 나갈것이다.<br>
그렇게 되면 이 액티베이션이 ReLU인지 linear activation인지 분간할 수가 없어진다. 즉 not linearity를 살려주지 못한다.<br>
이를 방지하기 위해서(**= not linearity를 살려주기 위해서**) 우리가 정한 layer의 batch를 normalization해줄 것이다.<br>
다음과 같이 말이다.<br>
![image](https://user-images.githubusercontent.com/121401159/219058965-23502c51-059a-40c0-8363-5476b6cee86b.png)<br>
> 그러면 어떻게 Normalization을 하냐?
> 걍 0근처로 옮기는 건가요?

우선 위 그림과 같이 normalization이 되기 위해서는 **평균**과 **표준편차**가 필요하다.(정규화라는 작업 자체가 그렇다 ㅇㅇ)<br>
그럼 평균과 표준편차를 우리가 정하는 것이냐?<br>
**아니다.** batch normalization에서는 적절한 평균과 표준편차를 머신이 학습을 통해서 알아낸다.
> parametric ReLU가 기울기를 학습하는 방식과 같다.


이러한 방식으로 vanishing gradient를 해결하는 방식을 batch normalization 이라고 한다.
<br>
<br>

## 2. Layer Normalization
Batch Normalization말고도 Layer Normalization이라는 방식 또한 존재한다.<br>
Layer Normalization은 batch와는 관련이 없고, 각 레이어에서의 평균과 분산을 사용하여 각 입력 데이터의 정규화를 수행한다.<br>
두 정규화에 대해 자세하게 다루진 않을 것이다. 우선은 이러한 정규화 기법들이 존재한다 정도를 기억하자.
> 참고로, batch normalization은 배치 사이즈가 작으면 쓰기가 어렵다. 하지만 layer normalization은 배치사이즈와 무관하게 적용이 가능하다.
<br>
<br>

## 3. 그럼 해결된건가?
![image](https://user-images.githubusercontent.com/121401159/219062495-831f07b4-2c5c-4a46-8760-64e755619dfa.png)<br>
안타깝게도 아니다. ReLU와 Batch Normalization을 적용하더라도 Loss의 개형이 복잡해져서 학습이 잘 일어나지 않을 수 있다.<br>
> 그러니 만병통치약은 없다. 상황에따라서 적절히 기법들을 적용하는 것이 중요하다.
<br>
<br>


## 4. 마무리
이번글에서는 batch normalization에 대해 알아보았다.<br>
다음글에서는 overfitting문제의 해결 기법에 대해 알아보자.

```toc
```
