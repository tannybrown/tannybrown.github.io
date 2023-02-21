---
emoji: 🔮
title: 17. 깊은 인공신경망의 문제 3편(feat. overfitting)
date: '2023-02-21 20:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
[지난글](https://tannybrown.github.io/ai/17/)에서 vanishing gradient의 해결법에 대해 살펴보았다.<br>
이번글에서는 나머지 문제인 overfitting을 해결하는 방법에 대해 이야기 해보자.<br>
<br>

## 1. Overfitting(오버피팅, 과적합)이란?
한마디로 표현하자면 'training data에 대해서는 성능이 좋은데 test data에 대해서는 성능이 나쁘다.' 라고 할 수 있다.<br>
그림으로 한번 알아보자.<br>
![image](https://user-images.githubusercontent.com/121401159/220355918-0d474e6b-9e17-434e-91a8-65058508b8e7.png)<br>
검정색 곡선이 '오버피팅된 모델'이고, 오버피팅 되지 않은 직선 모델이 있다.<br>
이때 찍혀있는 점들은 training data라고 할때, training data에 대해서 검정색 곡선은 loss가 0임을 알 수 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/220356770-7c49eb3d-0ad3-4bc4-b5a1-4ba11bf3fe9a.png)
<br>
그러나, 위 그림처럼 test data가 주어지면, 검정색 곡선보다 직선모델이 예측을 더 잘하고 있음을 알 수 있다.<br>
우리가 모델을 학습시키는 이유는 새로운 데이터들에 대해서 예측을 잘 하기 위함이다. <br>
따라서 오버피팅이 일어나지 않도록 모델을 설계하고 학습시키는 것은 중요한 사항이다.<br>

<br>

## 2. 오버피팅의 원인
오버피팅은 그럼 왜 일어나는 걸까?<br>
1. 부족한 데이터
2. 데이터셋의 노이즈나 이상치
3. 모델의 복잡도
4. 학습 데이터셋과 테스트 데이터셋의 차이 <br>

등의 다양한 이유를 꼽을 수 있다.
<br><br>

## 3. 해법1 : 모델 경량화
위 예시에서 살펴본 것처럼 모델이 꾸불꾸불 복잡하면 test데이터에는 딱 맞게 피팅될지 몰라도 test 데이터에 대해서는 낮은 성능을 보여준다.<br>
따라서 모델이 너무 복잡하지 않게 경량화 하는 것이 첫번째 해결방안이 될 수 있다.
<br><br>

## 4. 해법2 : Data augmentation
모델을 적절히 경량화 했음에도 불구하고 오버피팅이 일어난다면, 데이터가 부족하지 않은지 체크를 해보자.<br>
데이터를 더 많이 수집할 수 있다면 정말 좋겠지만, 대부분의 경우 추가적인 데이터를 공급받기가 어려울 것이다.<br>
이런 경우에 사용할 수 있는 방법이 Data augmentation인데, 이는 **기존에 갖고 있는 데이터를 변행해서 새로운 데이터를 생성하는 방법**이다.<br>
예를 들어 이미지 데이터의 경우, 이미지를 회전시키거나 뒤집기, 크기 조절, 색조 변화 등을 가하는 것이다. 이후 데이터셋이 이 데이터들을 추가하고 학습시킴으로써 모델의 성능을 향상시킨다.<br>
> 하지만 이미지를 왜곡시키거나 완전히 새로운 객체를 생성하는 것은 적용할 수 없다는 한계가 있다.<br>
> 또, 일부 데이터 셋에 대해서는 적용할 수 없기도 하다.

<br><br>

## 5. 해법3 : Drop-out
드롭아웃은 '학습 과정에서 신경망의 일부 노드를 무작위로 제거하는 방법'이다.<br>
모델이 너무 복잡하니까, 있는 노드를 가려가면서 학습시킨다면 어떨까? 하는 아이디어 라고 볼 수 있다.
> 영구적으로 제거해버리는 건가요?

영구적인 제거는 아니다. 내가 drop out을 적용하고자 하는 노드를 선택하고, 그 노드가 사라질 확률 p를 정해준다.<br>
Drop out을 만든 분께서는 여러개의 thinned network를 이용해서 학습시키는 것이라고 표현하기도 했다.
> 일반적으로 입력층 or hidden layer에 적용한다.

**하나의 데이터가 들어올때마다** p에 따라 노드가 존재하거나 사라진다.<br>
> 배치마다, 에포크마다 가 아니다. '데이터마다'이다.

이렇게 트레이닝을 시킨후, 테스트를 진행할때는 유의할 점이 있다.<br>
바로, test때는 나가는 weight에 p를 곱해주는 것이다.
![image](https://user-images.githubusercontent.com/121401159/220367101-5d52b15b-63f3-4c6d-813c-4d62dd251eda.png)<br>
> 이를 통해서 여러 thinned network를 평균낸 효과를 얻고자 함이다.<br>
> 아물론, 테스트 때는 노드가 drop 되지 않는다. 모두 사용한다.

추가로 Drop-connect라는 방법도 있는데, 이는 노드가 아닌 connection을 랜덤하게 끊어버리고 학습시키는 방법이다.<br>
조금더 일반화된 Drop-out 이라고 볼 수 있다.

<br><br>

## 6. 해법4 : Lp-Regularization
Lp-Regularization은 모델의 가중치를 제한하여 과적합을 방지하는 기술이다.<br>
Lp-regularization은 가중치(w)의 크기를 제한하기 위해, 정규화(regularization) 항을 손실 함수에 추가한다. <br>
![image](https://user-images.githubusercontent.com/121401159/220370395-822cea00-5e01-46b7-8a0d-d669005e0d2d.png)<br>
이 때, p의 값에 따라 L1-regularization과 L2-regularization으로 구분된다.<br>
우선, ||w|| 표현, norm 표현이 어색할테니 이를 먼저 살펴보자.<br>
![image](https://user-images.githubusercontent.com/121401159/220378831-ec3e3b1a-835c-402b-8907-7a26bf69e6f2.png)<br>
이라고 해보자.<br>

먼저 **p가 2 인경우(L2-Regularazation)**<br>

![image](https://user-images.githubusercontent.com/121401159/220379319-12818698-acc1-48bc-b169-6832c8a27747.png)<br>
과 같이 구할 수 있다.
<br>
**p가 1인 경우(L1-Regularazation)**<br> 
![image](https://user-images.githubusercontent.com/121401159/220379743-1896fb4f-3837-4efa-a32d-c73b9a838256.png)<br>
로 구할 수 있다.
<br>
그럼 람다의 역할은 뭘까? <br>람다는 웨이트를 얼마나 고려할지를 결정한다. 람다가 크다면 웨이트를 많이 고려하고 작다면 적게 고려한다.<br>
> L1과 L2의 semantic한 차이는 무엇인가요?

L2는 L2-norm이 이차함수 꼴이므로 기울기를 실펴본다면 w값의 크기가 작으면 작게 변하고 크면 크게 변함을 알 수 있다.<br>
마찬가지로 L1은 L1-norm이 일차함수 꼴이므로, w값의 크기가 어떻든 loss를 일정하게 변하게 함을 알 수 있다.

<br><br>

## 7. 해법5 : 검증 데이터 이용
validation data를 이용하는 것에 대해서는 앞에서 다루었기 때문에 자세한 설명은 생략하도록 하겠다.<br>
내용이 궁금하다면 [이곳](https://tannybrown.github.io/ai/9/)을 참고하길 바란다.<br><br>


## 8. 마무리
![image](https://user-images.githubusercontent.com/121401159/220384458-a3409a25-0451-460a-85f9-594e54379036.png)<br>

이번글에서는 오버피팅이 무엇이고, 오버피팅을 방지하는 방법들에 대해 살펴보았다.<br>
다음글에서는 CNN에 대해 다뤄보겠다.



```toc
```
