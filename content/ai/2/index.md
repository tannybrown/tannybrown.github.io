---
emoji: 
title: 1. 딥러닝 기본 모델 소개
date: '2023-01-26 00:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. 딥러닝 모델
[이전글](https://tannybrown.github.io/ai/1/)에서 인공지능에 대한 전반적인 소개를 해보았다. <br>
이번엔 딥러닝을 대표하는 3가지 모델에 대해서 **'간략히'** 소개해보고자 한다! <br>


각각이 무엇인지 살펴보기 전에, 딥러닝 모델이라는게 무엇일까? <br>
![image](https://user-images.githubusercontent.com/121401159/214604573-31383ec6-316a-4329-8afc-ed26cc5b225c.png)<br>
<a>(우리가 떠올린 모델)</a>
  
> 죄송합니다.

앞으로 모델이라는 말을 많이 듣게 될 것이다.<br>
인공지능 모델, 머신러닝 모델, 딥러닝 모델. <br>
여기서 말하는 모델이란 '**프로그램**'정도의 의미로 해석하면 된다. <br>
> 엄밀히 말하면, 프로그램보다는 '**함수**'라고 보는 것이 맞다.<br>
> 함수의 파라미터(가중치)를 업데이트 하며 모델은 학습한다.<br>
> 인공지능을 처음 접하는 독자라면 일단 프로그램이라고 받아들여도 좋다.


이번시간엔 대표적인 3가지 모델에 대해 알아보자.

<br><br>
## 1. CNN(Convolution Neural Network)
![image](https://user-images.githubusercontent.com/121401159/214606928-f0a82073-ece0-4aec-809f-bec7ee9bb606.png)<br>

번역하면 합성곱 신경망으로, 인간의 시신경 구조를 모방한 기술이다.<br>
일반적으로 컴퓨터 비전 등 이미지 데이터를 처리하는 데에 많이 쓰인다.

이 CNN 모델은 사진데이터를 input으로 받아서 학습한다.
> 여기서 잠깐! 모델은 언제나 숫자를 input으로 받아서 숫자를 output으로 출력한다.


즉슨, 내가 모델에게 입력시킬 사진 역시 **숫자**라는 말이다.<br>
![image](https://user-images.githubusercontent.com/121401159/214620268-a93ffe75-9ec1-4455-8a9d-462bd0ec13e2.png)<br>

사진이 숫자라니? 이해가 가지 않을 사람도 있을 수 있으니 조금만 더 생각해보면 다음과 같다.<br>
![image](https://user-images.githubusercontent.com/121401159/214626364-98147c6f-e866-4ec7-b958-d66d1f6b1b11.png)<br>

우리가 보는 모니터의 화면은 **픽셀**로 이루어져 있다. 그리고 그 픽셀은 3개의 필터(RGB)로 이루어져 있다.<br>
RGB필터의 값은 0~255로 나타나며, RGB필터의 값들의 비율에 따라 한 픽셀의 색이 구현되고, 그 픽셀들이 모여 화면을 이룬다.
> 즉, CNN모델의 input은 RGB필터의 값(0~255)가 된다. 그리고 전체 픽셀에 대한 데이터를 받으며, RGB필터별로 처리된다.

Output은 무엇이겠는가?<br>
지정해주기 나름이지만, 강아지 사진을 분류하고 싶다면 강아지를 1로 출력하고 나머지는 0으로 출력한다든지 의 방법으로 지정해줄 수 있다.

> 이정도만 설명하고 넘어가고 싶지만 한가지만 더 설명하려한다.


**Q : CNN은 왜 이미지 데이터에 쓰이는 건가요?**

> **필자는 이런 시선이 매우 중요하다고 생각한다.   '왜?라는 질문 말이다'.**

다만 지금 우리의 수준에서 위 질문에 대한 답을 설명하긴 어려우니 질문을 조금 바꾸자.<br>

**Q : 이미지 데이터는 어떤 특징이 있나요?**<br>

이미지는 위치에 상관없이 동일한 패턴들이 반복되는 특징을 갖고 있다. 

즉, 어느 한 위치에서 학습한 파라미터를 이용해서 다른 위치에 있는 동일한 특징을 추출할 수 있는 것이다.<br>
![image](https://user-images.githubusercontent.com/121401159/214611292-62b48317-3723-434d-b083-cdac3288aa1e.png) <br>
차후에 CNN에 대해 더 공부하며, 첫번째 질문에 답할 수 있도록 해보자.




<br><br>
## 2. RNN(Recurrent Neural Network)

번역하면 순환 신경망으로, **순차적인 정보**가 담긴 데이터에서 패턴을 인식하고 추상화된 정보를 추출한다.
따라서 일반적으로 텍스트, 음성, 음악, 영상 등 순차적 데이터를 다루는데 적합하다.<br>
베니싱 그레디언트 문제가 있어서 학습을 못하는 경우가 있는데, 이를 개선하기 위해 LSTM(Long Short Term Memory)가 개발되었다.<br>
> 베니싱 그레디언트? LSTM? 너무 어려워요.


~~신경망의 층수가 늘어날수록, 데이터가 유의미한 값을 잃어버려 학습에 지장이 생기는 것~~<br>
지금은 몰라도 된다. 차후에 살펴보자.<br>
그래서 현재 작곡, 작사, 주식 예측등 다양한 분야에서 적용이 된다.


<br><br>
## 3. GAN(Generative Adversarial Network)
번역하면 생성 대립 신경망으로, 진짜 같은 가짜를 만드는 모델이다.
어떤방식인지 잘 설명된 그림이 있으니 보도록 하자.<br>
![image](https://user-images.githubusercontent.com/121401159/214604094-d6d76500-f31e-485a-baab-0c2f0dd091e3.png)<br>
위 그림에 도둑과 경찰이 있다. 도둑과 경찰은 각각 모델에 해당하며, 도둑을 **G모델**, 경찰을 **D모델**이라 부르겠다.
G모델은 가짜를 만들어내는 모델로, 위 그림에서는 위조 지폐를 만들어내고 있다. D모델은 가짜와 진짜를 구분해내는 모델로, 위 그림에서는 위조 지폐를 감별해내고 있다.<br>
> GAN은 어떻게 학습할까?<br>


GAN의 G와 D는 학습 방향이 다르다. G는 D를 속이기 위해 학습하고, D는 G를 감별해내기 위해 학습한다. 따라서 두 모델은 동시에 학습이 불가능하다.<br>
학습초기에 G와 D는 성능이 둘다 형편이 없다. (누굴 먼저 학습할지, 순서는 크게 상관이 없다고 한다.)<br>
1. D를 먼저 학습시킨다고 가정하자. D는 위조 감별 모델이므로, G가 만들어낸 값과 real 데이터(정답)를 넣어주며 학습시킨다.<br>
2. 그렇게 D의 성능이 어느정도 좋아지면, D는 고정시키고 G를 학습시킨다.<br>
3. G는 D를 속일 위조 데이터를 만들고, 위조 데이터를 D에 넣어 나온 결과를 통해 학습한다.<br>
4. 이후 D를 어느정도 속일 수 있게 되면, 다시 G는 고정시키고 D를 학습시킨다.<br>
5. 이렇게 번갈아가며 학습을 시키고, D가 실제지폐를 맞추는 확률이 **0.5** 가 되면(**즉, 실제와 가짜를 구분할 수 없는 수준으로 가짜를 생성하는 상태**), GAN모델의 학습이 끝난다.<br>
GAN 모델은 deepfake, 이미지 생성 기술 등에 사용된다. <br>





<br><br>

![image](https://user-images.githubusercontent.com/121401159/214604332-788f93ab-6517-4f54-9f0e-da45d967e7fe.png)<br>
이번 시간엔 딥러닝을 대표하는 3가지 모델에 대해 살펴보았다. <br>
[다음글](https://tannybrown.github.io/ai/3/)에서는 머신러닝의 분류에 대해서 살펴보자.

```toc

```
