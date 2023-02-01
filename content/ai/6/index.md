---
emoji: 🔮
title: 5. Gradient Descent
date: '2023-01-29 10:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
![image](https://user-images.githubusercontent.com/121401159/216059096-c5eeb283-5e96-42f6-bd15-7c64ec2b3137.png)
<br>
[이전글](https://tannybrown.github.io/ai/5/)에서 선형회귀와 Loss등에 대해 알아보았다. <br>
그리고 우린, 스마트한 방법으로 optimal한 파라미터와 bias를 찾기 위해 Numerical Method를 사용한다는 것까지 알아봤다. <br>
그리고 오늘은 Numerical Method인 Gradient Descent에 대해 알아보자.

<br><br>
## 1. 직관적 이해
Gradient Descent는 직역하면, 경사하강법이다.<br> 이 방법은 **Loss가 줄어드는 방향**을 찾아 파라미터와 bias를 업데이트 하는 방법이라고 할 수 있다.<br>
예시를 통한 직관적 이해를 해보자.<br>
![image](https://user-images.githubusercontent.com/121401159/216073365-d46b5057-690c-4186-b7b8-9727fefb9778.png)<br>
> 그림퀄리티가 상당하다 <br>

자, 만약 위 그림에서 최저점을 찾고싶다고 하자. 그리고 현재 우리의 위치가 **파란색 점**으로 주어졌다고 한다면, 우린 어떤 방향으로 나아가야할까?<br>
여러가지 방법론이 있을 수 있지만, **Gradient Descent**에서는 **현재위치에서 기울기의 반대방향** 으로 나아간다.<br>
즉, 기울기가 양수(+)이므로 (-)방향으로 나아가야한다.<br>
자 그럼 어디갈지 알았으니 한발짝 나가아보자. <br>
![image](https://user-images.githubusercontent.com/121401159/216073715-42b5ea14-97f4-426c-af86-c8782d1b95e6.png)
<br>
엇 이번엔 기울기의 부호가 달라졌다. 현재 기울기의 부호는 (-)이므로 (+)방향으로 가야한다.<br>
![image](https://user-images.githubusercontent.com/121401159/216074025-07c7dabd-f67f-4f6c-a464-2e824428d45f.png)<br>
드디어 도착했다. 이렇게 기울기가 0이 되면 움직임을 멈추고 최저점을 찾아냈다는 것을 알 수 있다.<br>

<br><br>
다소 야매로 그린 예시였지만, 위 그래프가 Loss에 대한 그래프라고 생각한다면, loss가 가장 작아지는 값을 찾고 싶은 우리가 원하는 값에 도달할 수 있었던 것이다.<br>
위 매커니즘을 식으로 표현하면 다음과 같다.<br>
![image](https://user-images.githubusercontent.com/121401159/216074281-39220e6e-6ced-42ef-bbdf-d43c76437bc3.png)<br>
w는 가중치(파라미터)를 나타내고, L은 Loss function을 의미한다. 입실론은 학습률(learning rate)를 나타내는데, 이는 step-size라고 하기도 한다. 이 step-size에 따라 w를 얼마나 이동시킬지가 달라지며, step-size를 **상수(고정값으로)** 으로 둘 수도 있고 **스케줄링**해서 변하는 값으로 둘 수도 있다.<br>
> bias는요?

bias도 결국 parameter이다. 즉, 같은 방식인데 bias 에 대해서 같은 과정을 수행하면 된다. 다만 w따로, bias 따로 계산해주는게 귀찮을 수 있다. 따라서 homogeneous equation으로 바꿔서 계산한다면(w의 차원을 하나 올려서) 계산의 편의를 가져갈 수 있다.<br><br>

## 2. 한계
위 글을 따라 오면서 눈치챈 사람이 있을수도 있겠다. Gradient Descent는 명확한 한계를 가진다. <br>
- 너무 신중하다.
- local minimum <br>

우선 너무 신중하다. 즉 한번의 update를 위해서 갖고 있는 모든 데이터를 이용해 Loss를 계산해야한다. 데이터수가 많아지면 매우매우 느려진다.<br>
두번째로 Local Minimum을 찾는 알고리즘이라는 것이다.<br>
![image](https://user-images.githubusercontent.com/121401159/216072186-48307436-a632-4a7a-9a5d-7eeaa6b781a5.png)<br>

우리가 알고싶은 것은 global minimum이다. 만약 위와 같은 loss가 주어진다면, 원하는 최저값에 도달하지 못할 수 있다.<br>
즉, convex한 문제에서만 적용이 가능하다.
> 알고리즘 공부를 한사람이라면, 눈치챘을 것이다. Gradient Descent는 greedy 하다.
<br><br>
## 3. 마무리
이번글에서는 gradient descent에 대해 알아보았다.<br>
다음글에서는 gradient descent의 보완된 버전들에 대해 알아보자.










