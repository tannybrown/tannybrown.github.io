---
emoji: ๐ฎ
title: 7. Gradient Descent ๊ณ ๊ธํธ
date: '2023-02-02 10:00:00'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. ์ง๋ ์ด์ผ๊ธฐ

[์ด์ ๊ธ](https://tannybrown.github.io/ai/7/)์์๋ SGD, mini-batch SGD์ ๋ํด์ ์์๋ณด์๋ค.<br>
์ด๋ฒ๊ธ์์๋ mini-batch์์ ๋ฐ์ ๋ ์๊ณ ๋ฆฌ์ฆ๋ค์ ์์๋ณด์.
<br><br>


## 1. Momentum SGD
mini-batch SGD์ ๋จ์ ์ ๋ญ๊ฐ ์์๊น? batch์ฌ์ด์ฆ๋ฅผ ํค์ ๋ค๊ณ  ํ๋๋ผ๋, GD(Gradient Descent)๋ณด๋ค optimalํ ๊ฐ์ '์ ํํ' ๋ฐฉํฅ์ผ๋ก ๋์๊ฐ์ง ์๋๋ค๋ ์ ์ผ ๊ฒ์ด๋ค.<br>
๊ทธ๋ฆผ์ ํตํด ํ์ธํด๋ณด๋ฉด ๋ค์๊ณผ ๊ฐ๋ค.
<br>
![image](https://user-images.githubusercontent.com/121401159/216329482-e6ac4581-3e14-4c80-ac14-a002fec74982.png)<br>
์ข์ฐ๋ก ๋๋ฌด ๋ง์ด ํ๋ค๋ฆฌ์ง ์๋๊ฐ? ์ด๋ฌํ ๋จ์ ์ ๋ณด์ํ๊ณ ์ ๋์จ๊ฒ์ด Momentum SGD์ด๋ค. <br>
momentum SGD์ ์ง๊ด์ ์ผ๋ก ์ค๋ชํ์๋ฉด, ๊ด์ฑ์ ๊ณ ๋ คํ๋ update ๋ฐฉ๋ฒ์ด๋ผ๊ณ  ๋งํ  ์ ์๋ค. <br>
์ฆ ์ด์ ์ gradient๋ค์ ๊ณ ๋ คํด์ ๊ฐ์ค์น๋ฅผ ์๋ฐ์ดํธํ๋ ๋ฐฉ๋ฒ์ด๋ค.<br>
![image](https://user-images.githubusercontent.com/121401159/216331203-86f04a3e-1ebc-4b8f-82c0-71aedc3a5a4a.png)<br>
๊ทธ๋ฆฌ๊ณ  ์ฌ๊ธฐ์, optimal ํ ๊ฐ์ ๊ฑฐ์ ๋๋ฌํ์๋๋ ๊ด์ฑ(?)๋๋ฌธ์ ๋น๊ธ๋น๊ธ ๋๊ฒ ๋๋ค.<br>
๋ฐ๋ผ์, momentum SGD์ ๊ฒฝ์ฐ ๊ณผ์ ํฉ(overfitting)์ ๋ฐฉ์งํ๊ณ  ํ์ต์ ๊ฐ์ ํ๋ ํจ๊ณผ๊ฐ ์๋ค.


## 2. RMSProp
์ด๋ฒ์ ๋ ๋ค๋ฅธ ์๊ณ ๋ฆฌ์ฆ์ ์ดํด๋ณด์. <br>
RMSProp(Root Mean Square Propagation)์ ์ง์์ด๋ํ๊ท (EMA)์ ์ฌ์ฉํ์ฌ ๊ฐ ํ๋ผ๋ฏธํฐ์ ๊ฒฝ์ฌ ์ ๊ณฑ ๊ฐ์ ๊ณ์ฐํ์ฌ, ๊ฒฝ์ฌ์ ์ง์์ด๋ํ๊ท ์ ์ ์ฉํ์ฌ ๊ฐ์ค์น๋ฅผ ์๋ฐ์ดํธํ๋ค. RMSProp์ **ํ์ต๋ฅ **๋ ์กฐ์ ํ๋ ๊ธฐ๋ฒ์ธ๋ฐ, Gradient์ ๋ณํ๊ฐ ํฐ ํ๋ผ๋ฏธํฐ์ ๋ํด์๋ ํ์ต๋ฅ ์ ์๊ฒ ์กฐ์ ํ๊ณ , Gradient์ ๋ณํ๊ฐ ์์ ํ๋ผ๋ฏธํฐ์ ๋ํด์๋ ํ์ต๋ฅ ์ ํฌ๊ฒ ์กฐ์ ํ๋ค. ์ด๋ฅผ ํตํด ๊ฐ ํ๋ผ๋ฏธํฐ์ ๋ํ **ํ์ต์ ์์ ์ฑ**์ ๋์ด๊ณ , **ํ์ต ์๋๋ฅผ ๊ฐ์ **ํ  ์ ์๋ค.<br>
<br>
์๋ชจ๋ฅด๊ฒ ๋ค๊ณ ? ๊ทธ๋ด ๊ฒ ๊ฐ์์ ํ๋ฒ๋ ์ ๋ฆฌํ๋ฉด ๋ค์๊ณผ ๊ฐ๋ค.<br>
1. Gradient ๊ณ์ฐ : ํ์ฌ ์ํ์ ํ๋ผ๋ฏธํฐ์ ๋ํ Gradient๋ฅผ ๊ณ์ฐ.
2. ์ง์์ด๋ํ๊ท  ๊ณ์ฐ : ๊ฐ ํ๋ผ๋ฏธํฐ์ ๋ํ gradient ์ ๊ณฑ ๊ฐ์ EMA๋ฅผ ๊ณ์ฐํ๋ค.
3. ํ์ต๋ฅ  ๊ณ์ฐ : EMA๋ฅผ ์ด์ฉํด์ ๊ฐ ํ๋ผ๋ฏธํฐ์ ๋ํ ํ์ต๋ฅ ์ ๊ณ์ฐํ๋ค.
4. ํ๋ผ๋ฏธํฐ ์๋ฐ์ดํธ : ๊ณ์ฐ๋ ํ์ต๋ฅ ์ ์ด์ฉํ์ฌ ํ๋ผ๋ฏธํฐ๋ฅผ ์๋ฐ์ดํธํ๋ค.

> ์ด์ฌ์์ ๊ฒฝ์ฐ, ์ด ๋ถ๋ถ์ ๋๊ฒจ๋ ์ข๋ค. ์ ์ฐ๋์ง ์ ๋๋ง ์ดํดํ๋๋ก ํ์.

```
์๋ฅผ ๋ค์ด๋ณด์.
ํ์ฌ ํ๋ผ๋ฏธํฐ์ ๊ฐ์ด [0.8, 1.2, 0.5]์ด๊ณ , ๊ฒฝ์ฌ ๊ฐ์ด [0.1, -0.3, 0.2]์ผ ๋, EMA๋ ๋ค์๊ณผ ๊ฐ์ด ๊ตฌํ  ์ ์๋ค.
์ฒซ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ(0.8)์ ๊ฒฝ์ฌ ์ ๊ณฑ ๊ฐ: 0.1^2 = 0.01 
๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ(1.2)์ ๊ฒฝ์ฌ ์ ๊ณฑ ๊ฐ: -0.3^2 = 0.09 
์ธ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ(0.5)์ ๊ฒฝ์ฌ ์ ๊ณฑ ๊ฐ: 0.2^2 = 0.04 

์ฒซ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ EMA(0.01)์ 0.01 * 0.9 + 0.01 * 0.1 = 0.009
๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ EMA(0.09)์ 0.09 * 0.9 + 0.09 * 0.1 = 0.081
์ธ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ EMA(0.04)์ 0.04 * 0.9 + 0.02 * 0.1 = 0.038

ํ์ต๋ฅ ์ ๋ค์๊ณผ ๊ฐ์ด ๊ณ์ฐ์ด ๊ฐ๋ฅํ๋ค.
์ฒซ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ํ์ต๋ฅ : 0.01 / (0.009 + ฮต)^0.5 = 0.1
๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ํ์ต๋ฅ : 0.09 / (0.081 + ฮต)^0.5 = 0.3
์ธ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ํ์ต๋ฅ : 0.02 / (0.038 + ฮต)^0.5 = 0.2
ฮต๋ ์์ฃผ ์์ ๊ฐ์ผ๋ก ์์น ์์ ์ฑ์ ๋ณด์ฅํ๋ ๋ชฉ์ ์ผ๋ก ์ฌ์ฉ๋๋ค.

๊ทธ๋ฆฌ๊ณ , ์ด์  ํ์ต๋ฅ ์ ์ด์ฉํ์ฌ ํ๋ผ๋ฏธํฐ๋ฅผ ์๋ฐ์ดํธํ  ์ ์๋ค.
์ฒซ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ: 0.8 - 0.1 * 0.1 = 0.79
๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ: 1.2 - 0.3 * 0.3 = 1.11
์ธ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ: 0.5 - 0.2 * 0.2 = 0.48
```

<br>
<br>

## 3. Adam
Adam์ ์์ ์ดํด๋ณธ Momentum๊ณผ RMSProp์ ์ฅ์ ์ ํฉ์น ์๊ณ ๋ฆฌ์ฆ์ด๋ค. ๋ฐ๋ผ์ ๊ฐ์ฅ ๋ง์ด ์ฌ์ฉ๋๋ ์๊ณ ๋ฆฌ์ฆ์ด๋ผ๊ณ  ๋ณผ ์ ์๋ค.<br>
์ฆ, moment๋ ๊ณ์ฐํ๊ณ , ํ์ต๋ฅ ๋ ๋ณํ์์ผ์ฃผ๋ ์๊ณ ๋ฆฌ์ฆ์ด๋ค.<br>
ํ ๋จ๊ณ์์๋ ์์ธํ ์์์ ์ ์ด๋๊ณ  ์ด์ ๋์ ๊ฐ๋๋ง ์์๋๋๋ก ํ์.<br>
<br><br>



## 4. ๋ง๋ฌด๋ฆฌ
![image](https://user-images.githubusercontent.com/121401159/216343301-4c2a4fcf-3f78-4612-b779-781576e7d801.png)<br>

์ด๋ฒ์๊ฐ์ mini-batch์์ ๋ฐ์ ๋ 3๊ฐ์ง ์๊ณ ๋ฆฌ์ฆ์ ๋ํด ์ดํด๋ณด์๋ค.<br>
[๋ค์๊ธ](https://tannybrown.github.io/ai/9/)์์๋ Training data์ Test data์ ๋ํด ์์๋ณด์.

```toc

```