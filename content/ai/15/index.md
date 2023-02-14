---
emoji: 🔮
title: 14. 인공신경망이 쓰이는 이유
date: '2023-02-14 20:40:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
![image](https://user-images.githubusercontent.com/121401159/218723923-26e429a5-1d3c-4c95-94aa-ac197c3bcd28.png)<br>
[이전글](https://tannybrown.github.io/ai/14/)에서 다중분류에 대해 알아보았다.<br>
이번글에서는 인공신경망이 이렇게까지 쓰이는 이유가 뭘지 한번 알아보자.<br><br>

## 1. 인공신경망을 쓰는 과정
지금까지 공부한 내용을 summary 해보자.
인공신경망을 이용하는 큰 4가지 step에 대해 공부해보았다.
#### step 1. 입출력 정의
  입출력을 정의해야했다. 입력을 독립변수, 출력을 종속변수라고 했으며, 출력이 여러개일수도 한개일수도 있었다.<br>

#### step 2. 모델 만들기
  모델을 만들어야했다. 입력층과 출력층, 그리고 가장중요한 hidden layer의 구성.<br>
  hidden layer를 어떻게 디자인 하는가가 모델의 성능을 결정한다. 하지만 이에 대해서는 자세히 아직 다루지 않았고, CNN을 공부하며 공부해볼 것이다.<br>

#### step 3. loss 정의
  모델까지 만들었으면 Loss를 정의해야했다. 주어진 입출력과 activation을 고려해서 Loss를 정의했고 지금까지 배운 loss는 MSE, log likelihood, cross-entropy가 있었다.<br>

#### step 4. weight, bias 찾기
  Loss 정의까지 마쳤다면, 이제 학습을 시켜야한다. 즉 최적의 weigth 와 bias를 찾는 과정이다. <br>
  이에 관해서는 gradient descent, SGD, mini-batch, adam 등을 공부했다. 새로운 알고리즘을 개발하는 것도 좋은 연구분야일 것이다.
  
<br><br>

## 2. 인공신경망을 굳이 써야하나?
결론적으로 모델이란건 **함수**였고, 인공신경망을 통해서 그 함수를 구현했다.<br>
그런데 **왜** 굳이 인공신경망이라는 구조를 이용한걸까?<br>
그 이유는 바로, 인공신경망을 이용하면 **모든 연속 함수를 근사할 수 있기 때문**이다.<br>
이를 **Universal Approximation Theorem**이라고 한다.

<br><br>

## 3. Universal Approximation Theorem
Universal Approximation Theorem은 인공신경망의 근간이 되는 이론으로, 하나의 hiddle layer로 모든 연속 함수를 근사할 수 있다는 것인데, 예시를 살펴보며 이해해보자.<br>
여기 키와 몸무게에 대한 데이터가 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/218725303-6cf633d0-db44-4e96-94d3-22548a45a15b.png)
<br>
> 등간격이 아닌점들은 양해를 바란다. 그냥 수치만 보자.

키는 **독립변수**, 몸무게가 **종속변수**라고 해보자. 즉, 키가 주어졌을때 적절한 몸무게를 예측 하고 싶다.<br>
이렇게 데이터가 주어졌다면 우린 이 데이터들을 만족하는 함수를 찾고 싶다.<br>
이때 이용하는 전략은 각 데이터당 2개의 노드를 만들고, 그 두 노드를 이용해 loss가 0이 되도록 하는 함수를 만들어 보도록 하겠다.<br>
우선은 가장 첫번째로, (키 : 150, 몸무게 : 70)데이터를 보자.<br>
![image](https://user-images.githubusercontent.com/121401159/218773417-42232304-f199-4ade-b139-c664f0955675.png)<br>
두개의 노드를 이용해서 히든레이어를 구성했고 각각은 unit step function을 activation으로 갖고 있다.<br>
이러한 경우에 출력은 이러한 폼이 된다.<br>
![image](https://user-images.githubusercontent.com/121401159/218774304-59cd9632-c24c-4e98-ae3f-e324694949e1.png)<br>
149~151사이의 데이터만 70의 출력을 갖는 개형이다.<br>
이러한 짓을 모든 데이터에 대해 각각 한다면??<br>
아마 주어진 데이터들에 모두 이 과정을 수행하면 다음과 같은 신경망이 그려질 것이다.<br>

![image](https://user-images.githubusercontent.com/121401159/218775975-6e3668f2-3179-4024-96ec-0b192c8562c3.png)
<br>
그리고 이 신경망의 출력을 그래프로 표현하면,<br>
![image](https://user-images.githubusercontent.com/121401159/218776742-b500425c-b3d7-4ca1-8b4c-620110af19cb.png)<br>

이와 같음을 알 수 있다.<br>
더많은 데이터가 주어져도 마찬가지의 방법을 통한다면, Loss가 0인 fitting하는 연속함수를 만들 수 있음을 알 수 있다.<br>

> 이게 뭐야 그냥 어거지 아니냐?<br>
> 그러한 생각을 할 수 있지만, '위의 예시는 이렇게 해서 만들 수 있다.'를 설명하기 위한것이지. 이렇게 만들거다 라는 것은 아니다.<br>
> 즉, 어떠한 데이터가 주어져도 그에 맞는 함수를 만들 수 있음을 보인것이다.


<br><br>

## 4. 마무리
![image](https://user-images.githubusercontent.com/121401159/218778227-c093d8c5-fc11-4dd6-8480-5a0a35adb14b.png)<br>

universal approximation theorem을 이용하면, 어떤 연속함수든 근사해낼 수 있었다.<br>
이러한 정리를 바탕으로 인공신경망을 통해서 우리는 (overfitting이 일어나지 않게)잘 학습만 시키면 된다는 것을 알 수 있다.<br>
[다음글](https://tannybrown.github.io/ai/16/)에서는 인공신경망의 문제점들에 대한 이야기를 다뤄보겠다. 


```toc
```



