---
emoji: 🔮
title: 11. 이진분류 (상)편 (feat.sigmoid를 쓰는 이유)
date: '2023-02-11 00:00:01'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 지난 이야기
![image](https://user-images.githubusercontent.com/121401159/218152623-d8e0c8c0-7dd6-4c25-870f-feafbde86a87.png)<br>

[이전글](https://tannybrown.github.io/ai/11/)에서는 non-linear activation을 쓰는 이유에 대해 살펴보았다. <br>
이번글에서는 **이진분류**에 대해서 살펴보며, **sigmoid**를 쓰는 이유를 알아보도록 하자. <br>

<br>
<br>


## 1. 이진분류 문제(with unit step function)
이전까지 회귀문제를 살펴보았고, 이번엔 분류(classification)를 살펴보려고 한다.<br>
가장 간단한 분류인 이진분류를 먼저 알아보자.<br>
이진분류는 말그대로 '둘 중 하나로 분류하는 것'을 의미한다. 예를 들면, 어떠한 사진을 보고, 개냐 고양이냐와 같은 문제 말이다.<br>
하나의 예시를 같이 보면서 이진분류를 하나 생각해보겠다.<br>
![image](https://user-images.githubusercontent.com/121401159/218140868-140e287d-9a09-4ebf-9a75-cf54a1b1aa59.png)<br>
> 정말 그래프 퀄리티가 엄청나다.

**키**와 **몸무게**에 따른 분포가 주어진 그래프가 있다. 이 그래프에서 살을 찌워야하는 사람(저체중)과 살을 빼야하는 사람(과체중)을 분류하려한다.<br>
이때 단순하게 한개의 layer 만을 이용해서 분류해보자. 또, 활성화 함수로는 non-linear activation인 unit step function을 이용해보자.
> unit step function은 0보다 크면 1, 0보다 작으면 0을 출력하는 함수로, 0또는 1을 출력하므로 이진분류를 할 수 있다.

퍼셉트론을 구성해서 다음과 같이 학습을 잘 마쳤다고 해보자.<br>
![image](https://user-images.githubusercontent.com/121401159/218144577-7c56d787-24d2-49f6-8060-17e96dc72de7.png)<br>
x를 키,y를 몸무게 라고 한다면, y = x + 1 직선이 그래프상에서 분류의 기준선이 됨을 알 수 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/218144994-472f6afc-1c1b-4975-8b10-c5eef714dffe.png)<br>
이렇게 키와 몸무게라는 feature를 갖고 이진분류를 할 수 있었다.<br>



<br>
<br>

## 2. unit step function의 문제점
앞서 이진분류를 해보았는데, 문제가 있다.<br>
> ??? : 문제를 삼으면 문제가 되고 문제를 삼지 않으면 문제가 되지 않....


![image](https://user-images.githubusercontent.com/121401159/218145633-df7314e7-eb9f-41fd-a14a-0c2e2682036b.png)<br>
파랑색 데이터가 주어졌을때, 이 데이터는 분류기상에서 과체중으로 분류된다.<br>
허나 실제로 이 데이터는 과체중은 아니다. 정확히 말하면 평균체중, 정상체중이라고 볼 수 있다.<br>
이렇게 unit step function은 1 또는 0으로만 표현하기때문에 '정도'를 표현할 수가 없다.<br>
따라서 '정도'를 표현하기 위해서 우린 다른 activation을 써볼 것이다. 바로, sigmoid!
> unit step function의 단점은 이뿐만이 아니다. <br>
> step function이기에 미분도 불가능하다. 즉 gradient descent를 쓸 수 없다.<br>
> 또, 분류를 뭣같이한다. 오버피팅이라고 봐야할까? 선을 막그어도 분류가 되기만 하면 ok이다. 정도 표현이 안되니 아슬아슬하게 분류하기도 한다는 말!


<br>
<br>

## 3. 이진분류 문제(with Sigmoid)
![image](https://user-images.githubusercontent.com/121401159/218146967-db2d4cab-dfe5-4519-bb09-8a1a443e0ee0.png)<br><br>
위 함수를 sigmoid 함수라고 한다. 식을 보고 바로 느껴야하는 것이 바로, **전구간 미분가능**하다는 것이다. <br>
자그러면 sigmoid 함수개형을 그려보자.<br>
![image](https://user-images.githubusercontent.com/121401159/218147185-eee489d1-b8e8-41af-a345-8b457c24c2f4.png)<br>
딱 보기에도, unit step function보다 유연함을 알 수 있다.<br>
sigmoid를 이용하여 위 분류문제를 풀 경우 다음과 같은 결과를 얻어낼 수 있다.<br>
![image](https://user-images.githubusercontent.com/121401159/218148024-892e1bee-2835-4ab1-8518-50e261aae7c7.png)<br>
> 그림판을 이용하다보니.. 죄송합니다.

보면 알 수 있듯, 유연하게 분류되는 곡면을 갖게 된다. 이게 뭐가 좋은것이냐? <br>
파란점을 분류할때 sigmoid는 0에서 1사이의 숫자를 출력할 것이다. 지금 그래프를 참고해서 0.52정도를 출력했다고 해보자.<br>
0에 가까우면 저체중, 1에 가까우면 과체중으로 판별이 가능하니, 0.52라는 수치는 굳이 살을 뺄필요도, 찌울필요도 없다는 것으로 판단할 수 있다.
> 이처럼 0과1사이의 수치로 출력된 결과를 통해서 '**정도**'를 판단할 수 있게 된다.(정도를 '확률'로 해석하기도 한다.)

sigmoid의 장점은 이뿐만이 아니다.<br>
sigmoid는 **합리적인 기준선**을 찾는다.
> 이게 무슨말이에요?

unit step function처럼 **무지성 분류**가 아니라는 말이다. sigmoid는 두 class를 구분짓는, **가장 멀리 찢어놓는 선**을 찾는다.<br>
예를 들어<br>
![image](https://user-images.githubusercontent.com/121401159/218150681-3da98d2e-de0b-436a-8300-b6cf82b1efae.png)<br>
이렇게 분류해도 unit step function은 분류를 한것이다.(즉 학습을 멈춘다.)<br>
하지만 sigmoid는 아니다. sigmoid는 더 최적의 weight를 찾아서 학습을 계속한다. 따라서 더 적절한 분류기준선을 찾는다. 

<br>

정리하면
- 미분가능
- 부드러운 분류
- 확률로 해석가능
- 합리적인 분류 기준선

이 가능하다.
<br>
<br>

## 4. 마무리
![image](https://user-images.githubusercontent.com/121401159/218152336-640eb4a9-ebf7-4ada-bda6-924a6f0f9e6a.png)<br>

이번 시간에는 이진분류가 무엇인지, sigmoid를 왜써야하는지 알아보았다.<br>
다음글에서는 이진분류와 likelihood에 대해 알아보도록 하겠다.

```toc
```
