---
emoji: 🔮
title: 8. Training Data & Test Data
date: '2023-02-04 20:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기

![image](https://user-images.githubusercontent.com/121401159/216770908-5015748a-9c27-49df-8bd3-760985b446b0.png)<br>

[이전글](https://tannybrown.github.io/ai/8/)에서 우리는 mini-batch GD에서 업그레이드 된 RMSProp, Momentum, Adam에 대해 알아보았다.<br>
이번글에서는 머신러닝, 딥러닝에서 사용되는 데이터들을 어떻게 부르는지에 대해 알아보고자 한다.<br>

<br><br>

## 1. Training vs Test vs Validation
본론으로 들어가기전에, 하나의 예시를 들어보겠다.<br>
아마 이글을 읽는 대대분의 사람은 대입을 준비하는 수험생이었던 적이 있을 것이다.<br>
대입 수험생의 공부는 크게 3가지 파트로 나눌 수 있다.<br>
1. 우리는 수험생 때, 서점에서 문제집을 사서 **문제집**을 푼다.(ex. EBS 수능특강,수능완성 등등)<br>
2. 그리고 6월 9월에 전국 **모의고사**를 본다.<br>
3. 마지막으로 11월 **수능**을 치른다. <br>

볼드체로 표시된 단어를 머신러닝, 딥러닝에 쓰이는 데이터에 mapping시킨다면 다음과 같다.<br>
1. 문제집 -> Training data
2. 모의고사 -> Validation data
3. 수능 -> Test data
<br>
가장 먼저 training data는 모델 학습에 쓰인는 데이터로, 이 데이터를 통해 모델은 학습을 한다.<br>
모델의 학습이 끝났다면, 우리는 test data를 통해서 새로운 데이터가 주어졌을 때 적절한 output을 내는지 확인할 수 있다.<br>
그렇다면 training, test data만 있으면 될 것 같은데 validation data는 왜 필요한 것일까?<br>

![image](https://user-images.githubusercontent.com/121401159/216772311-bbb37f2b-16d6-4975-b5e1-d1bf09cb0cc7.png)
<br>
> 여전히 훌륭한 퀄리티의 그림이다.

자 위 그래프를 보면 x축이 총 epoch수, y축이 loss값이다. 우리가 training data로 여러번(많은 epoch) 학습을 수행하면, 점점 loss가 줄어서 거의 오차가 없는 것을 확인할 수 있다.<br>
그렇다면 이렇게 학습을 시키면 test 데이터에 대해서 적절한 결과가 도출될까?<br>
아니다. 이 경우 과적합(overfitting)으로 이어지게 되며, test 데이터에 대해서 성능이 매우 좋지 않게 된다.<br>
따라서 우리는 training 데이터와 새로운 데이터 간의 적절한 절충안을 알아야한다.<br>
이러한 절충안을 알기 위해 나온 것이 바로, validation data이다.<br>
test data를 통한 test전에, validation data를 통해서 모델의 성능을 평가하여 개발자들은 모델이 실제 새로운 데이터에서 어느 정도의 성능을 보일 것인지에 대한 통찰력을 얻을 수 있다.<br>
오버피팅이 일어나지 않는 적절한 epoch, 성능이 좋은 모델 아키텍쳐 등 **하이퍼 파라미터**를 짐작해보면서 더 좋은 성능의 모델을 만들 수 있는 것이다.<br>

## 2. K-fold Cross validation

training, test, validation 까지 알아보았다. 그런데 여기서 문제가 하나 발생한다.<br>
![image](https://user-images.githubusercontent.com/121401159/216772877-2804729f-ee4e-477a-ac25-1e3c439373d8.png)<br>
바로 데이터가 부족하다는 것이다.<br>
데이터만 충분하다면 training, test, validation 데이터를 적절히 나눠서 학습을 진행하면 될 것이다. 허나, 대부분의 경우 우리에게 주어진 데이터는 충분치 못하다.<br>
자 상황을 가정해보자. 우리에게 training data가 100개가 있고 test data가 20개 있다.<br>
test data는 수능문제니까 건들면 안된다. 그럼 validation data확보를 위해선 training data에 손을 대야한다. 허나 training data도 넉넉치 않은 상황이다.<br>
이때 사용하는 방법 중 하나가 K-fold cross validation이다.<br>
> k - fold cross validation은 데이터 집합을 k개의 독립적인 폴드로 나누어 k번의 훈련과 평가를 수행하는 것이다. 각 폴드는 훈련 데이터 집합에서 검증 데이터 집합으로 사용되고, k-1개의 폴드는 훈련에 사용된다. k번의 훈련과 평가 과정을 모두 수행한 후, 각 폴드에서의 성능을 평균하여 최종적인 모델의 성능을 평가한다.


지금은 5-fold cross validation을 적용해보자.<br>





