---
emoji: 🔮
title: 13. 다중분류는 어떻게 설계해야하는가?
date: '2023-02-14 18:40:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
[이전글](https://tannybrown.github.io/ai/13/)에서 이진분류에 대해 다루었고,<br>
이번글에서는 다중분류에 대해 다루려고 한다.<br>

<br>
<br>

## 1. 출력은 몇개로 할까?
이진분류에서는 출력을 하나로 잡았다. sigmoid 를 이용해서 중간을 기점으로 이진분류를 진행했다.<br>
그렇다면 다중분류에서도 마찬가지로 출력을 하나로 둬도 될까?<br>
Noop! 안된다. 왜 안될까?
> 언제나 reasoning이 중요하다. 왜? 왜? 왜?를 붙여보자.

### (1) 불공평한 backpropagation
불공평? 무슨뜻인가 하니, 예를 들어 삼중분류를 한다고 가정해보자. <br>그렇다면 마지막 출력층의 sigmoid의 영역을 설정하여 3개의 class에 매핑을 시켜야 할것이다.<br>
![image](https://user-images.githubusercontent.com/121401159/218678225-edc36681-f12d-4d04-bf56-9e123016dc78.png)<br>
위 예는 A클래스는 0, B클래스는 1/2, C클래스는 1로 잡은 예이다.<br> 
이렇게 될 경우, B클래스는 항상 큰 gradient를 갖게 되고 A와 C클래스는 상대적으로 작은 Gradient를 갖게 되어 학습이 잘 이뤄지지 않을 것이다.
> 이진분류에서는 왜 가능했나요?<br>
> 이진분류때는 정답을 0과 1로 나누었고, (0,1/2)을 기점으로 점대칭이었기때문에 가능했다.

### (2) 분류 가짓수가 많아지면..?
분류가짓수가 1000개라면? sigmoid를 1000개로 쪼갤것인가? 이러한 경우 아주 약간의 가중치 변화로도 다른 class로 분류되며 오류가 커질 것이다.
<br>

### (3) 이상한 사전 정보
![image](https://user-images.githubusercontent.com/121401159/218679849-941e63b6-9386-4b9f-83db-00903615d746.png)
<br>
위 ABC클래스를 각각 소 고양이 강아지라고 해보자. <br>
그러면 우린 의도하지 않았지만, 소와 고양이는 가깝고 소와 강아지는 멀다는 사전정보를 주게 된다.<br>
그리고 소와 강아지 중간은 고양이라는 이상한 정보 또한 주어지게 된 것이다.<br>
> 즉 각 클래스별로의 관련성은 우리가 고려했던 정보는 아닌데, 의도치 않게 주게 된 것.

그래서 소처럼 생긴 강아지가 input으로 들어온다면, 고양이라고 해버리는 경우가 생길 수 있는 것이다.<br>

<br>
<br>

## 2. n개로 하자!
출력을 1개로 두자니, 위와 같은 문제들이 발생한다. 따라서 이러한 문제들을 해결하기 위해서 출력을 n개로 두는 방법을 택했다.<br>
n은 클래스의 수이다. 5개로 분류한다면 5, 10개로 분류한다면 10.<br>
그러면 정답은 어떻게 판별할까? 이는 one-hot encoding을 이용한다.<br>
예를 들어서, 소 고양이 강아지를 분류하는 모델이라면<br>
![image](https://user-images.githubusercontent.com/121401159/218682429-4a0a1f43-75dc-4672-bb57-a26c05dbd334.png)
<br>
이렇게 각 클래스를 담당하는 출력 노드가 존재하고, 1 0 0 , 0 1 0, 0 0 1 과 같은 출력으로 각 클래스를 구분한다.<br>
> 1 0 0 , 0 1 0, 0 0 1 과 같이 정답만 1 나머지는 0 으로 표현하여 각 클래스를 구분하는 방법을 one-hot encoding이라고 한다.

이제 1 0 0 , 0 1 0 , 0 0 1 의 출력이 나오도록 학습을 시키는 것이다.<br>
이때 이 출력의 결과를 이진분류때와 마찬가지로 확률분포로 해석한다.<br>
이게 무슨 말인가 하니, 이진분류의 경우 강아지와 고양이를 분류한다고 하면,<br>
![image](https://user-images.githubusercontent.com/121401159/218689410-76c0e22a-8edf-46b8-b466-3b1dc7b52897.png)
<br>
다음과 같은 출력을 기대하는 것을 의미한다.<br>
베르누이 분포로 해석이 가능하며 출력의 결과를 확률분포로 보자는 것이다.
> 다소 내용이 안와닿을 것 같다. 이에 관해서는 추후에 따로 글을 올리도록 하겠다.
<br>
<br>

## 3. Activation function(softmax)
자 그러면 우리는 어떤 activation을 이용할까?<br>
새로운 activation이 등장하게 되는데, softmax를 사용하게 된다.
softmax는 **인공신경망으로 표현이 안되는 activation**으로 마지막에 linear activation을 거친후 softmax를 거치는 방식으로 그릴 수 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/218690201-a549fcf5-7a02-4d77-a39d-490fcddb935b.png)
<br>
x1,x2,x3를 입력으로 받아서 softmax를 거치면 q1,q2,q3의 값이 나온다. 이때 q1,q2,q3는 **확률분포**이므로 **셋의 합은 1**, **각 값은 0~1**이라는 조건을 만족해야 한다.<br>

그러면 각각의 q값은 어떻게 출력이 될까?다음과 같이 표현된다.<br>
![image](https://user-images.githubusercontent.com/121401159/218691495-ec1849c6-5b7b-401e-a08c-3d2c30ddb102.png)<br>
![image](https://user-images.githubusercontent.com/121401159/218691576-6002f48d-e0b8-4c95-8e48-83e87460ef82.png)<br>
![image](https://user-images.githubusercontent.com/121401159/218691650-bff9c450-667d-4641-9008-ea760a3e0b59.png)<br>

> 꼭 저렇게 표현되어야 하는가? 아니다. 하지만 많이 사용되는 방식이고, 여러 표현에 대한 관점들은 다른 글을 통해 또 이야기 해보자.

## 4. Loss 정의
softmax를 이용한 다중분류에서는 Loss함수로 Cross-entropy가 쓰인다.
> 크로스 엔트로피는 뭐냐?<br>
> 두 확률분포의 거리를 표현하는 식이라고 생각하면 된다.<br>
> 우리의 상황에서는 정답(ex.1 0 0) 과 예측값인 (q1 q2 q3)간의 거리를 표현한다.

정답을 (p1, p2 ,p3)라 하고, 예측을 (q1, q2 , q3)라 하면<br>
cross-entropy는 다음과 같이 정의된다.<br>
![image](https://user-images.githubusercontent.com/121401159/218693654-dbd1afb2-c8f0-43ef-a4bf-93d68ed904ee.png)<br>
만약 소 라면, (1 0 0)이므로 -logq1이 나옴을 알 수 있다.<br>
즉슨 위 식을 다음의 식으로 표현할 수 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/218694465-df3e0b8b-5a09-4167-a149-5e273b1b9a62.png)
<br>
> Cross-entropy를 왜쓰냐?

크로스 엔트로피는 엔트로피보다 항상 크거나 같다. 이를 식으로 표현하면 다음과 같다.<br>
![image](https://user-images.githubusercontent.com/121401159/218695641-aadbccba-4c88-4602-b1a7-332dcdf217e5.png)<br>
(우항이 엔트로피이다.)<br>
이때 엔트로피를 풀어쓰면, <br>
![image](https://user-images.githubusercontent.com/121401159/218695980-ebce04f9-7570-47a4-86d1-091f146b3580.png)<br>
이고 정답데이터가 1 0 0 이면 0이 나온다. (즉, one-hot encoding에서는 0이 나온다.)<br>
이말은 곧 lower bound가 0이 된다는 뜻이다. <br>
그런데 좌항, 즉 크로스 엔트로피는 풀어쓰면 -logqj가 나온다. 즉 이 값을(loss를) 최대한 줄여서 0(엔트로피)을 만들거다.<br>
그러면 -logqj가 0으로 가면 qj는 1이어야한다. 즉 qj를 1로 만드는, 자연스럽게 각 노드들이 각각의 클래스를 담당하도록. 설계된 것이다.<br>



<br>

## 5. 마무리
갈수록 참 어렵다.<br>
우선 오늘은 다중 분류를 살펴보았으나, 왜 이러한 activation, 이러한 structure, 이러한 loss를 썼는지에 대한 고찰을 더 해보는 시간을 가져야할 것 같다.<br>
[다음엔](https://tannybrown.github.io/ai/15/) universal approximation theorem을 다뤄보겠다.

```toc
```


