---
emoji: 🔮
title: 9. 딥러닝 업데이트 흐름 알기
date: '2023-02-05 20:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
[이전글](https://tannybrown.github.io/ai/9/)에서 우린 학습에 이용되는 데이터에 대해 다뤄보았다.<br>
이번글에서는 딥러닝에서 뺴놓고 이야기할 수 없는 역전파(Back-Propagation)에 대해 이야기 해보고자 한다.<br>

<br><br>




## 1. 순전파
![image](https://user-images.githubusercontent.com/121401159/216831403-ebfd4bd0-5757-487e-9426-f95bd85a83e2.png) <br>

역전파를 설명하기 전에, 순전파에 대해 먼저 짚고 가야한다. <br>
갑자기 새로운 용어가 나오니 당황스럽겠지만 지금까지 배운 내용에 대한 정리와 다름이 없으니 무리없이 따라올 수 있을 것이다.<br>
DNN을 기억하는가? Deep Neural Network, 깊은 인공신경망을 의미했다. <br>
![image](https://user-images.githubusercontent.com/121401159/217760131-8cf8bdc2-bbb4-478b-813a-917784e00720.png)
<br>
자 위에 간단한 구조의 인공신경망이 있다. 이때, 입력값으로 x1 = 2, x2 = 1 이 주어지고, f1,f2,f3,f4는 unit step function이라고 해보자.<br>
그렇다면 계산은 다음과 같이 진행될 것이다.<br>
![image](https://user-images.githubusercontent.com/121401159/217760693-838144b0-195e-4fe2-9305-a252ae410b86.png)
<br>
앞서 배운 바와 같이, 가중치와 입력값을 곱한후 더하여 activation function을 거치는 방식으로 계산하면 Y는 1이 출력된다.<br>
이런식으로 **입력을 통해서 출력값을 구하는 것**을 순전파(Forward-Propagation,Forward-Pass)라고 한다.<br>

<br><br>

## 2. 역전파
하지만 학습이라는 것은 여기서 끝나는 것이 아니었다.<br>
우리는 이렇게 구한 출력값을 통해서 Loss를 구하고,Loss를 최소로해주는 파라미터로 업데이트를 해줘야한다.<br>
파라미터를 업데이트하는 과정이 바로 back-propagation 인데, 이는 chain rule을 이용해서 계산이 된다.<br>
![image](https://user-images.githubusercontent.com/121401159/217763519-5c3f81a0-7b59-4368-af62-d3aa2a76577a.png)<br>
아까와 같은 예시에서 확인해보자. 각 노드에 들어가는 입력값을 p라고 하고, 노드에서 나온출력을 q라고 해보겠다.<br>
파라미터 업데이트하는 식을 떠올려보면, Loss function을 w(가중치)로 미분한 Gradient를 구해야했다.<br>
이때 chain rule이 쓰이는데 다음과 같은 형태로 구할 수 있다.<br><br>
![image](https://user-images.githubusercontent.com/121401159/217765247-9e7aba0c-2735-4971-a4d3-eca0a0b10ee2.png)<br>
이렇게 가장 마지막 층의 가중치를 chain rule을 통해서 update할 수 있다. 이렇게 마지막 층부터 다시 첫번째 층까지 **역순으로 가중치를 업데이트** 한다고 하여 역전파인 것이다.
> 이렇게만 쓰면 어떻게 알아요!

이제 단순히 미분을 해주면 되는데, p2 = wq1+~라는 관계,q2 = f(p2)라는 관계를 이용하면 쉽게 미분해서 구할 수 있을 것이다.<br>
이제 계산은 당신의 몫이다.<br>


<br>

### (보충) 조금 더 깊은 Layer의 weight..

그런데 여기서 어렴풋이 알고 넘어가면 틀리는 함정이 하나 숨겨져 있다.<br>
가장 마지막 가중치는 저렇게 구할 수 있었는데, 더 앞쪽 layer의 가중치는 다소 다르다. <br>
![image](https://user-images.githubusercontent.com/121401159/217772885-fea3b2a6-4996-4b9f-a7be-2ef30201f578.png)<br>
앞선 예시에서 마지막 layer에 노드를 하나 추가했다. 이때, w11을 업데이트 하고 싶다면 어떻게 구할 수 있을까?<br>
아까와 같은 방식으로, chain rule을 이용한다면,<br>
![image](https://user-images.githubusercontent.com/121401159/217772381-ec4f932c-ad68-4212-99ce-1e3bec5a8d8f.png)
<br>

라고 쓸 수 있다. 혹시 이렇게 생각한 분이 있다면 정말 다행이다. 왜냐하면 여기서 추가해줘야하는 식이 더 있기 때문이다.<br>
자 생각해보자. w11이라는 가중치는 p1에 영향을 준다. p1은 q1에 영향을 준다. q1은 p2에, p2는 q2에, q2는 L에 영향을 준다.<br>
이렇게만 영향을 준다면 위 식은 맞다. 하지만 빠진게 있다. q1은 p2뿐아니라 p3에도 영향을 준다. 그리고 p3는 q3에 영향을 주고, q3는 L에 영향을 준다.<br>
즉 w11이라는 가중치를 업데이트하기위해서는 다음과 같은 식으로 Gradient를 구해야할 것이다.<br>
![image](https://user-images.githubusercontent.com/121401159/217772743-9611e824-a7e7-4cbb-88d9-c0b03e43abc4.png)<br>


> 왜 더하기 입니까?

혹자는 왜 두식을 더하는 것인지 물어볼 수 있다. 이에 대한 자세한 설명은 생략하지만, 미분의 정의를 토대로 생각해보면 덧셈으로 정리되는 식이 도출되니 한번 증명해보는 것도 좋을 것 같다.






<br><br>


## 3. 마무리

![image](https://user-images.githubusercontent.com/121401159/217774241-fa17e450-2a13-49b7-b0c6-cf8095743426.png)<br>

이번시간에는 순전파, 역전파에 대해 살펴보았다.<br>
[다음글](https://tannybrown.github.io/ai/11/)에서는 non-linear activation으로 돌아오겠다.<br>

```toc

```