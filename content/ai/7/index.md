---
emoji: 🔮
title: 6. Gradient Descent 고급편1
date: '2023-01-30 10:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
![image](https://user-images.githubusercontent.com/121401159/216079662-0d060637-86d4-4577-b486-f1f2d262591d.png)<br>

[이전글](https://tannybrown.github.io/ai/6/)에서 Gradient Descent에 대해 알아보았다.<br>
이번글에서는 Gradient Descent의 가중치 초기화, Gradient Descent의 다른 버전들에 대해 알아보자.<br>

<br>

## 1. 가중치 초기화
앞서 배운 Gradient Descent는 초기값을 어떻게 설정하는지에 따라 학습의 속도, 학습의 결과가 바뀌기도 했다.<br>
따라서 초기값을 어떻게 설정하는지는 매우 중요한데, 우리가 해결하고자하는 문제가 무엇인지에 따라 달라진다고 볼 수 있다.<br>
일단 일반적으로 random initialization 방법을 생각할 수 있다. 그외에도 zero initialization, large random initialization 등도 있다.<br>
하지만 이러한 방법들은 너무 단순하다.<br>
이러한 방법 이외에, 현재 가장 많이 쓰이는 3가지 방법이 존재한다.<br>

- Xavier(sigmoid / tanh를 사용하는 신경망)<br>

![image](https://user-images.githubusercontent.com/121401159/216111061-e263bbbd-c880-46e4-851e-de826470911d.png)<br>
각 weight가 균등한 분포를 가지도록 설정하는 방법이다. 시그모이드 형태의 활성화 함수와 같은 신경만에서 좋은 결과를 보인다.<br>

- Lecun


![image](https://user-images.githubusercontent.com/121401159/216110967-ec9fe53a-1bab-42a6-88bf-dc96207df68f.png)<br>


- He(ReLU를 사용하는 신경망)


![image](https://user-images.githubusercontent.com/121401159/216111121-a8e7c732-1e2b-4920-8a3e-23a462aed537.png)<br>
He initialization은 weight의 값이 적당히 크지만, 너무 작거나 너무 크지 않도록 하여, 신경망의 학습이 잘 되도록 한다.<br>
ReLU 활성화 함수와 같은 non-linear 활성화 함수에서, weight의 값이 너무 작으면 뉴런이 "dead"상태가 될 수 있기 때문이다. 반면에, weight의 값이 너무 커지면 학습이 어려워질 수 있다.

> 지금 단계에서 설명하기엔 다소 어렵기에 전체적인 공부를 마치고 다시 돌아오기로 하자.

<br><br>

## 2. Stochastic Gradient Descent(SGD)
Gradient Descent는 한계가 존재했다. 신중함과 local minimum.<br>
따라서 새로운 알고리즘들이 나오기 시작했는데, 그중하나가 바로 SGD이다.<br>
SGD는 랜덤하게 하나의 데이터를 뽑아서, 그 데이터만으로 loss를 구해 update를 진행한다.<br>
> 이때 랜덤하게 데이터를 뽑는 과정은 비복원추출을 한다. 또한 데이터를 다 뽑았다면 다시 데이터를 채워서 같은 방식을 반복한다.


따라서, 빠르게 업데이트가 진행된다는 장점이 있다. 또, total gradient와 다른방향으로 이동하기 때문에 local minimum문제에서 탈출할 수도 있다.
> '탈출할 수도 있다.'이지, 언제나 탈출하는 것은 아니다.

그림으로 확인해보자.<br>
![image](https://user-images.githubusercontent.com/121401159/216114527-91d9fc69-db35-4e2c-9413-06d0770bb7fd.png)<br>
위 그림은 loss함수의 contour이다. 즉, 쉽게말해 위에서 본 등고선 정도로 생각하면 된다.<br>
자 여기서 gradient descent는 정확히 minimum을 향해 이동한다. 하지만 SGD는 아주 지 맘대로 이동하는 것을 확인할 수 있다. 이렇게 뽑힌 데이터에 따라 변칙적으로 업데이트가 이루어진다.<br>



<br><br>

## 3. mini-batch SGD
SGD는 너무 노이즈(불필요한 움직임이 많음)가 심했다. 따라서 gradient descent와 SGD의 절충안이 필요했는데, 그래서 나온것이 바로, mini-batch SGD이다.<br>
batch는 업데이트 한번에 필요한 데이터의 수라고 생각하면 좋다. 즉, SGD는 batch의 size가 1인 경우이다.<br>
mini-batch에서도 마찬가지로 비복원 추출을 한다. 그리고 데이터가 batch size 보다 작게 남았으면 남은 수만큼만 다 뽑고 다시 데이터를 채워넣는다. <br>
그렇다면 batch size는 얼마가 적당할까?<br>
일반적으로, GPU가 허락하는 한 최대한 키운다.
> 아니 너무 키우다가 gradient descent랑 같아지면 어쩌려구요!

괜찮다. 왜냐면 data의 수가 일반적으로 batch size보다 훨씬 많기 때문에 가능한 키우는게 좋다고 한다.<br>
> 추가로, learning rate도 batch-size에 따라 다르게 설정해주어야 성능이 좋다고 한다.


#### 용어정리 : parameter vs hyperparameter
이쯤에서 용어를 한번 정리하고 가자. <br>
파라미터는 머신이 스스로 알아내는 변수이다. 우리가 앞서 살펴본, weight와 bias가 해당된다.<br>
하이퍼 파라미터는 우리가(인간이) 정해주는 변수를 의미한다. learning rate, batch-size, epoch,model architecture가 해당한다.<br>
Epoch에 대해서는 처음 들어봤을 것이다. epoch는 전체 데이터를 보는 횟수를 의미한다.<br>
예를들어, 총 20개의 데이터가 있고 에포크는 3, 배치 사이즈는 5라고 한다면, 이 모델은 총 12번의 update를 시행한다는 것을 알 수 있다.
> 모델 아키텍쳐도 처음들어봅니다만?

model architecture는 '어떤 모델로 모델링 할것이냐' 이다. 복잡하게 신경망을 구성해서 모델링을 할 수도 있고, 단순하게 할수도 있을 것이다.<br>
무엇이 좋다라고 말하긴 어렵다. 이또한 문제 상황에 따라 다르며 너무 복잡하게 구성한 경우 오버피팅이 발생할 수 있기에 조심해야 한다.
> 오버피팅이 뭔데요?

overfitting은 test데이터에 너무나 최적화된 것을 의미하는데, 우리는 새로운 데이터에대한 예측을 하고 싶은 것이기에 이는 적합하지 않다. 이를 방지하기 위해서 regularization, cross validation 등을 이용한다.


                              


<br><br>



## 4. 마무리
Gradient Descent의 여러가지 버전에 대해 알아보았다.<br>
다음글에서는 mini-batch SGD에서 파생된 알고리즘들에 대해 알아보자.



