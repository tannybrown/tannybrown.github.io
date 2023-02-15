---
emoji: 🔮
title: 15. 깊은 인공신경망의 문제1(feat. vanishing gradient)
date: '2023-02-15 22:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
[이전글](https://tannybrown.github.io/ai/15/)에서는 Universal Approximation Theorem을 공부했다.<br>
이번글에서는 깊은 인공신경망의 문제점과 그 해결방안에 대해 다뤄보고자 한다.


<br>
<br>

## 1. 깊은 인공신경망의 문제점
지금까지 우리는 인공신경망을 이용해서 딥러닝에 적용하는 방법에 대해 배웠다.<br>
지난글에서는 Universal Approximation Theorem을 통해서 어떠한 연속함수든 근사해낼 수 있음도 알게 되었다.<br>
그렇다면 인공신경망은 만능일까?<br>
깊게 만들면 어떠한 문제든 다 해결할 수 있을까?<br>
아쉽게도 그렇지만은 않다. 아무래도 그냥 DNN을 만드는것보다 중요한것은 "**잘**"만드는 것이다.
<br><br>
생각없이 만들면 어떠한 문제에 봉착하는 것일까?<br>
우리는 크게 2가지의 문제에 봉착한다.
- **Vanishing Gradient**
- **Overfitting**
- (bonus) loss landscape 의 non-convexity

> 마지막 bonus는 초심자 입장에서 생각할 문제는 아니다.<br>
>  loss의 landscape를 가능한 convex하게 만들면 GD가 잘 동작할 것이니, 이러한 점도 고려할 수 있다면 고려하자.<br>
>  하지만 우리는 초심자이니까 앞의 두개에 대한 이야기를 하도록 하겠다.

<br>
<br>

## 2. Vanishing Gradient
vanishing gradient는 직역하면 'gradient가 사라지는것' 정도로 해석할 수 있다.<br>
gradient가 사라진다니? 직관적으로 설명하면, "**줄을 아무리 흔들어도 뒤까지 전달이 안된다**"라고 비유할 수 있다. <br>
혹시 backpropagation을 기억하는가? 깊은 곳의 weight는 chain rule이 연속적으로 적용되어 곱해지는 값들이 많다.<br>
![image](https://user-images.githubusercontent.com/121401159/219021253-cedaa2b6-0eac-46e0-8f44-d74db02adfb6.png)
<br>
> 기억나지 않는 분들을 위해서 가져왔다.

자 그런데 생각해보자. 우리가 지금까지 배운 activation 중 미분이 가능한 activation은 linear activation과 sigmoid이다.<br>
그런데 linear activation은 신경망의 깊이 자체에 영향을 주지 못한다는 사실을 배웠다. 즉 깊은 인공신경망을 위해서는 sigmoid가 이용되어야한다는 것인데..<br>
sigmoid는 미분의 최대값이 1/4이다. 즉 저 많은 곱셈연산중 activation 미분값이 4분의 1 이하라는 것이다.<br>
그렇다면 4분의 1이 3번만 곱해져도 1/64로 0에 급속히 가까워진다.<br>
즉 weight의 업데이트가 거의 일어나지 않게 되는 것이다.<br>
> 정리 : 깊은 곳의 weight일수록, Loss의 미분값이 매우 작아서(0에 가까워서) 업데이트가 거의 일어나지 않는 현상이 일어난다.

이를 Vanishing Gradient라고 한다.<br>
vanishing gradient가 일어나면, 학습이 잘 이뤄지지않고 오히려 underfitting이 일어나게 된다.(오지게 안맞는다ㅇㅇ)<br>

<br>
<br>

## 3. Sigmoid가 범인! 해결책은?
vanishing gradient를 일으키는 범인은 누굴까? 역시 sigmoid의 작은 미분 값때문이 것이다.<br>
따라서 이를 위해서 sigmoid를 포기하고 새로운 activation function을 찾아본다.<br>
그리고 등장한 것이 바로 **ReLU(Rectified Linear Unit)** 이다.<br>
그럼 ReLU는 어떻게 생겼을까? 매우 간단하게 생겼다.<br>
![image](https://user-images.githubusercontent.com/121401159/219024070-aea3dc2c-2c4a-4f3c-8505-a83395fed72c.png)
<br>
원점을 기준으로 음의 방향은 0, 양의 방향은 linear 한 모습을 갖고 있다.<br>
**그런데!** 이런 모습을 띄고 있자니 문제가 있을 것 같다. 모든 input이 0보다 작으면 output이 0만 출력되는 극단적인 경우가 발생할 수 있다.<br>
그래서 여러가지 변형된 버전의 ReLU가 등장하였는데 그중 대표적으로 Leaky ReLU와 Parametric ReLU가 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/219024822-fe799045-23d1-4408-be9f-3534869d0a79.png)<br>
> leaky ReLU는 '다 0으로 죽이기 뭐하니까 살리자'라는 느낌<br>
> parametric ReLU는 '살리긴하는데 좀 근거 있게 살리자'라는 느낌

parametric ReLU는 기울기를 학습을 통해서 결정한다. 즉 기울기 a도 미분에 참여한다.<br>

<br><br>

## 4. ReLU! 그냥 다 살리면 안돼?
왜 애매하게 남겨두냐! 그냥 살리면 안되냐? 라고 생각하는 사람도 있을 수 있다. 그러나 그러한 경우 linear activation과 같아지므로 신경망이 깊어지는 효과를 누리지 못한다는 단점이 있다.<br>
그래서 다시한번 정리하면, Linear activation은 이용될때 '마지막 출력 layer'에서만 쓰인다.(일반적으로 ㅇㅇ)<br>

<br>

## 5. ReLU의 자매품
![image](https://user-images.githubusercontent.com/121401159/219025975-74df55ff-b6eb-4d52-acbc-6ae49778a074.png)<br>
ReLU 자매품이 다양하다. 관심이 있다면 하나씩 검색해서 살펴보자.

<br><br>

## 6. 마무리
![image](https://user-images.githubusercontent.com/121401159/219026480-1fca0e25-5b18-4b8c-98fd-ea8154aeee20.png)<br>

이번글에서는 sigmoid의 한계로인해 새로운 activation ReLU에 대해서 살펴보았다.<br>
다음글에서는 vanishing gradient를 해결할 다른 방안에 대해서 살펴보자.




```toc
```



