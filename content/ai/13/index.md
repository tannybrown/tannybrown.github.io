---
emoji: ๐ฎ
title: 12. ์ด์ง๋ถ๋ฅ (ํ)ํธ (feat.log-likelihood)
date: '2023-02-13 00:00:01'
author: tanny
tags: 
categories: AI/ML/DL
---

## 0. ์ง๋ ์ด์ผ๊ธฐ
[์ด์ ๊ธ](https://tannybrown.github.io/ai/12/)์์ ์ด์ง๋ถ๋ฅ๊ฐ ๋ฌด์์ธ์ง, sigmoid๋ฅผ ์์ฐ๋์ง ์์๋ดค๋ค.<br>
์ด๋ฒ๊ธ์์๋ sigmoid๋ฅผ ์ด์ฉํ ์ด์ง๋ถ๋ฅ์ ๋ํด์ ์ข๋ ๊น์ํ ์์๊ฐ๋ณด์.


<br>
<br>

## 1. ์ด์ง๋ถ๋ฅ
์ด๋ฒ์๋ ์๋ฅผ ๋ค๋ฉฐ ์ด์ผ๊ธฐ๋ฅผ ํ์ด๋๊ฐ๋ณด๊ฒ ๋ค.<br>
๋ปํ ์์์ง๋ง, ๊ฐ์์ง ์ฌ์ง๊ณผ ๊ณ ์์ด ์ฌ์ง์ input์ผ๋ก ์ฃผ๊ณ  ๋ ์ฌ์ง์ ๋ถ๋ฅํ๋ ์ด์ง๋ถ๋ฅ ๋ชจ๋ธ์ ๋ง๋ ๋ค๊ณ  ์๊ฐํด๋ณด์.<br>
![image](https://user-images.githubusercontent.com/121401159/218488865-2bed71cb-0aa5-445f-bba7-d0803fe22610.png)<br>
์ฌ์ง๋ฐ์ดํฐ ์ด๋ฏ๋ก RGB 3๊ฐ์ ํํฐ์ ๋ํ ๋ฐ์ดํฐ๊ฐ ๋ค์ด์ฌ๊ฒ์ด๋ค. ๊ฐ๊ฐ ํํฐ์ ๋ํ ํฝ์์ฌ์ด์ฆ๊ฐ 100 * 100์ด๋ผ๊ณ  ํ๋ค๋ฉด, ๋ฐ์ดํฐ ํ๋๋น 30000์ง๋ฆฌ ๋ฒกํฐ๊ฐ ๋ค์ด์จ๋ค๊ณ  ๋ณด๋ฉด ๋๋ค.<br>
๊ทธ๋ ๋ค๋ฉด ๋จ์ํ๊ฒ hidden layer๊ฐ 1๊ฐ๋ผ๊ณ  ํด๋ ์ด๋ฐ ์ธ๊ณต์ ๊ฒฝ๋ง์ด ๊ทธ๋ ค์ง ๊ฒ์ด๋ค.<br>
![image](https://user-images.githubusercontent.com/121401159/218490908-d7c7a35d-8a7f-40e7-b76d-922c888e3da1.png)<br>
๊ทธ๋ฌ๋ฉด 30001๊ฐ์ ๊ฐ์ค์น๋ฅผ ๊ฐ๊ฐ ๋ชจ๋ ๋ฏธ๋ถํ๋ฉด์ ์๋ฐ์ดํธ๋ฅผ ์งํํด์ผํ  ๊ฒ์ด๋ค.
> 30001๊ฐ์ธ ์ด์ ๋ 30000(๊ฐ์ค์น๋ค) + 1(bias)
<br>
<br>

## 2. Loss ์ ์ํ๊ธฐ 1
๊ทธ๋ฌ๋ฉด Loss๋ฅผ w๋ก ๋ฏธ๋ถํ๋ฉด์ ์๋ฐ์ดํธ ํ ๊ฒ์ด๋, Loss๋ฅผ ์ ํ์.<br>
์ฐ๋ฆฌ๋ ์ด์ ๊น์ง ๋ณดํต Loss๋ก MSE(mean square error)๋ฅผ ์จ์๋ค. ํ์ง๋ง ์ด์ง๋ถ๋ฅ ๋ฌธ์ ์์๋ MSE๋ง๊ณ  ๋ค๋ฅธ Loss๋ฅผ ์ด์ฉํ๋ค.<br>
> ์ MSE๋ฅผ ์์ฐ๋์?<br>
> ๊ฐ๋ตํ๊ฒ ์ค๋ชํ๋ฉด, MSE๊ฐ ๊ฐ์ ์ ๋๊ฐ์ ๊ณ ๋ คํ์ง ์์(์ ๊ณฑํ๋๊น), ๊ฐ์ ๋ฒ์๊ฐ 0๊ณผ 1 ์ฌ์ด์ธ ํ๋ฅ ์ ๋ํ ๊ทผ์ฌ๊ฐ์ ๋ฐํํ๋ฉฐ, ํด๋์ค์ ๊ฒฝ๊ณ๋ฅผ ์ ํํํ์ง ์์ ์ ์๊ธฐ ๋๋ฌธ์ด๋ค.

๊ทธ๋ผ ๋ญ์ฐ๋?<br>
์ฐ์ , ๋ช๊ฐ์ง ์ ์๋ฅผ ํ์. ๊ฐ์์ง ์ฌ์ง์ 1, ๊ณ ์์ด ์ฌ์ง์ 0์ด๋ผ๊ณ  ์ ์ํ์. (0๋๋ 1๋ก ์ถ๋ ฅํ๋ ์ด์ง๋ถ๋ฅ๋๊น ใใ) ์ด **์ ๋ต** ๊ฐ์ p๋ผ๊ณ  ํ์.
> p๊ฐ 0์ด๋ฉด ๊ณ ์์ด, p๊ฐ 1์ด๋ฉด ๊ฐ์์ง ์ธ๊ฒ์ด๋ค.<br>

๊ทธ๋ฆฌ๊ณ  ๋จธ์ ์ ์๋ ฅ์ ์ฌ์ง๋ฐ์ดํฐ์๊ณ , **์ถ๋ ฅ**(**์์ธก๊ฐ**)์ **๊ฐ์์ง ์ฌ์ง์ผ ํ๋ฅ **์ด๋ผ๊ณ  ์ ์ํด๋ณด์. ๊ทธ ํ๋ฅ  ๊ฐ์ q๋ผ๊ณ  ํ๊ฒ ๋ค.<br>
> ์ฌ๊ธฐ๊น์ง ๊ด์ฐฎ์ฃ ? ์์ธก์ q, ์ ๋ต์ p, ๊ฐ์์ง๋ 1, ๊ณ ์์ด๋ 0, q๋ ๊ฐ์์ง์ผ ํ๋ฅ  ใใ?<br>

์ ์ด์  ๋ง์ฝ ๊ฐ์์ง ์ฌ์ง์ด ์๋ ฅ์ผ๋ก ๋ค์ด์๋ค๊ณ  ์๊ฐํด๋ณด์. ๊ทธ๋ ๋ค๋ฉด ์ฐ๋ฆฌ๋ ์ถ๋ ฅ์ ๋ญํด์ผํ๋๊ฐ?<br>
๊ทธ๋ ๋ค. 1์ ์ถ๋ ฅํด์ผํ๋ค. ๋ง์ฃ ?<br>
๊ทธ๋ฐ๋ฐ ์ด 1์ ์ถ๋ ฅํด์ผํ๋ค๋ ๋ง์ ์กฐ๊ธ ๋ค๋ฅด๊ฒ ํํํด๋ณด๊ฒ ๋ค.<br>
'**q์ ๊ฐ์ ์ต๋ํ ํด์ผํ๋ค.**' ๋ผ๊ณ .<br>
๊ทธ๋ผ ๋ฐ๋๋ก ๊ณ ์์ด ์ฌ์ง์ผ๋๋? '**q๋ฅผ ์ต์ํ ํด์ผํ๋ค.**'<br>
> ??? : ์ดํด๊ฐ ์๊ฐ๋๋ค.<br>
> q๋ **์๊ทธ๋ชจ์ด๋์ ์ถ๋ ฅ๊ฐ**์ด๋ **0๊ณผ 1์ฌ์ด์ ๊ฐ**์ด ๋์ฌ ๊ฒ์๋๋ค. ๋ฐ๋ผ์ q์ ๊ฐ์ ์ต๋ํํ๋ค. -> q๊ฐ 1์ด ๋์ค๊ฒ ๋ง๋ ๋ค. ๋ผ๊ณ  ํด์ํ  ์ ์๋ค.

์ ๊ทธ๋ฐ๋ฐ, ๊ฐ์์ง์ผ๋๋ ์ต๋ํ, ๊ณ ์์ด ์ผ๋๋ ์ต์ํ ํ๋ ค๊ณ  ํ๋๊น, ๋ฐฉํฅ์ฑ์ด ์ผ๊ด๋์์ผ๋ฉด ์ข๊ฒ ๋ค.<br>
์ฐ๋ฆฐ ํ์ฌ ๊ฐ์์ง๊ธฐ์ค์ผ๋ก ์๊ฐ์ ํ๊ณ  ์์ผ๋, ๊ณ ์์ด์ผ๋ ์ต์ํ๋ฅผ ์ต๋ํ๋ผ๋ ํํ์ผ๋ก ๋ฐ๊ฟ๋ณด๋ ค ํ๋ค.<br>
๋ฐ๋ผ์ ๊ณ ์์ด์ผ๋ q๋์  -q๋ฅผ ์ด๋ค๋ฉด, '**-q๋ฅผ ์ต๋ํ ํด์ผํ๋ค.**' ๋ผ๊ณ  ํด์ํ  ์ ์๋ค.<br>
์ฌ๊ธฐ๊น์ง ๊ฐ๋จํ๋ฐ ์๊ฐํด๋ณด๋ฉด, -q๋ผ๋ ๊ฐ์ ๋ฒ์๊ฐ -1 ~ 0์ด๋ค. ์ฐ๋ฆฌ๋ q์ ์ถ๋ ฅ๊ณผ ๋์ผํ๊ฒ ํด์ฃผ๊ณ  ์ถ์ผ๋๊น 1 - q๋ผ๊ณ  ์ ์ํด๋ฒ๋ฆฌ๋ฉด, ๋ฒ์๋ 0~1๋ก ๋ง๋ค ์ ์๋ค.<br>
> ๊ฒฐ๋ก  : ๊ณ ์์ด ์ฌ์ง์ผ๋, 'q๋ฅผ ์ต์ํํด์ผํ๋ค' -> '**1-q๋ฅผ ์ต๋ํํด์ผํ๋ค.**'

์ฌ๊ธฐ๊น์ง ์๋ค๋ฉด, ์ด์  ๊ฐ์์ง์ ๊ณ ์์ด ์ผ์ด์ค๋ฅผ ํ๋์ ์์ผ๋ก ํํํด๋ณด์.<br>
์์ ์ฐ๋ฆฌ๊ฐ ์ ์ํ p์ q๋ฅผ ์ด์ฉํด ํ๋์ ์์ผ๋ก ํํํ  ์ ์์ ๊ฒ์ด๋ค.<br>

![image](https://user-images.githubusercontent.com/121401159/218497596-0f15ca23-ab02-4a14-b2b5-8f813be7d6d1.png)<br>
์์ฃผ ๋ฉ์๋ ์์ด๋ค. ๊ฐ์์ง ์ฌ์ง์ด๋ฉด p = 1์ผํ๋ ๊ดํธํญ์ 1์ด ๋๊ณ  q๊ฐ ๋ง๋ค์ด์ง๋ค.(๊ฐ์์ง ์ฌ์ง์ผ ํ๋ฅ !)<br>
๊ณ ์์ด ์ฌ์ง์ด๋ฉด p = 0์ผํ๋ ์ขํญ์ด ํธ๋ฆฌ๊ณ , 1 - q๊ฐ ๋ง๋ค์ด์ง๋ค.(๊ณ ์์ด ์ฌ์ง์ผ ํ๋ฅ !)<br>
์๊ทธ๋ฌ๋ฉด, ์ ์์ ์ต๋ํํ๋ฉด ์ฐ๋ฆฌ๊ฐ ์ํ๋ **์ถ๋ ฅ**์ ๋ง๋ค ์ ์๋ค๋ผ๋ ๊ฒ์ ์๊ฒ ๋์๋ค.<br>
์ ์์ ๊ฐ๋ง ์๊ฐํ๋ฉด, ์๋ ฅ๊ฐ์ ๋ฐ๋ฅธ ํ๋ฅ ์ด๋ค. ๋ฐ๋ผ์ ์ฐ๋ฆฌ๋ ์๋ ์ฒจ์๋ฅผ ์จ์ ์ฒซ๋ฒ์งธ ์๋ ฅ์ ๋ํ ํ๋ฅ ์ ![image](https://user-images.githubusercontent.com/121401159/218500335-962f4e53-772a-48b6-b55e-4fe67ac94997.png)
<br>
๋ผ๊ณ  ํํํ  ์ ์๋ค.<br>
์ฌ์ง์ ํ๋๋ง ๋ค์ด์ค์ง ์๋๋ค. ๋ฐ๋ผ์ ๊ฐ ์ฌ์ง๋ค ๋ณ๋ก ํ๋ฅ ์ ๊ตฌํด์ค์ผํ๋๋ฐ, ์ด๋ ๊ฐ๊ฐ์ ์ฌ์ง๋ค์ ๋ํ ํ๋ฅ ์ ๋๋ฆฝ์ํ์์ ์ ์ ์๋ค.<br>
๋๋ฆฝ์ํ์ด๋ ๊ฐ๊ฐ์ ํ๋ฅ ์ ๊ณฑํด์ฃผ๋ฉด ๋๋ค. ์ฆ,<br>
![image](https://user-images.githubusercontent.com/121401159/218502953-18c099a4-6330-4021-b787-eccbb13fac40.png)
<br>
์ ์ต๋ํ ํ๋ฉด ๋๋ค.๋ผ๋ ๊ฒฐ๋ก ์ ๋ค๋ค๋ฅธ๋ค.<br>
> ์ ๊ทธ๋ฐ๋ฐ ์ฌ๊ธฐ๊น์ง ์๋ค๋ฉด ํ๊ฐ์ง ์๋ฌธ์ด ๋ ๋ค. ํ๋ฅ ์ 0๊ณผ 1์ฌ์ด์ ๊ฐ์ด๋, ๊ทธ ๊ฐ๋ค์ ๊ณ์ ๊ณฑํด๋๊ฐ๋ค๋ฉด 0์ ์๋ ดํ์ง ์๋...?

๋ง๋ค. 1์ ๊ฐ๊น์ด 0.9๋ผ๋ ๊ฐ๋ง ํด๋ 100์น์ ์ทจํ๋ฉด 0์ ๊ฐ๊น์ด ์๊ฐ ๋์ด๋ฒ๋ฆฐ๋ค. 
> 0 ์ ๊ฐ๊น์ด ์๋ ๋ฌธ์ ๊ฐ ์๋์?
> ๋ฌธ์ ๊ฐ ์๋ค. ์ปดํจํฐ๋ ์ด์ง์๋ก ์๋ฅผ ์ฒ๋ฆฌํ๋ค๋ณด๋, ์์๋ฅผ ํํํ๋๋ฐ์ ํ๊ณ๊ฐ ์๋ค. ๋ฐ๋ผ์ ๋๋ฌด ๊น์ ์์์์๋ ์ ํ๋๊ฐ ๋จ์ด์ง๋ค. 
<br>
<br>

## 3. Loss ์ ์ํ๊ธฐ 2
์ด๋ฌํ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด ๊ณตํ์๋ค์ด ์ทจํ ๋ฐฉ๋ฒ์ '๋ก๊ทธ' ์ด๋ค.<br>
> ์? **๊ณฑ**์ด **ํฉ**์ด ๋๋๊น.<br>
> ๋ ๊ฐ๋ฅํ ์ด์ ์ค ํ๋๊ฐ, logํจ์ ์ญ์ ๋จ์กฐ ์ฆ๊ฐํจ์์ด๊ธฐ ๋๋ฌธ์ด๋ค. ์ฆ๊ฐ์ด ๋ณํ์ง ์์ผ๋ ์๋นํ ์ ์ฉํ ๊ธฐ๋ฒ์ด๋ค.

์ฆ log๋ฅผ ์ทจํ ๊ฐ์ ์ต๋ํ ํ๋ค. ๋ก ๋ฐ๋๊ฒ ๋๋ค.<br>
๊ทธ๋์ ์ ๋ฆฌํ๋ฉด, 
![image](https://user-images.githubusercontent.com/121401159/218508564-c1941e29-0e9a-4c65-82ec-476e8488e0f0.png)<br>
๋ก ์ ์๋๋ค. (-๊ฐ ๋ถ์์ผ๋ ์ต์ํ์ ์๋ฏธ)
> ๋ผ์ดํด๋ฆฌํ๋๊ฐ ๋ญก๋๊น?<br>
> likelihood๋ ์ค๋ชํ๊ธฐ ์ฐธ ์ด๋ ค์ด ๊ฐ๋์ด๋ค. ๊ฐ๋จํ๋ง ๋งํ์๋ฉด, P(๋ถํฌ|ํ๋ฅ ๋ณ์)๋ฅผ ํ๋ฅ ๋ณ์์ ํจ์๋ก ๋ณด๋๊ฒ์ likelihood๋ผ ํ๋ค.

์ด๋ ๊ฒ loss ๊น์ง ์ ์ํ๋ฉด. ํ์ต๋ง ์ํค๋ฉด ๋๋ค. ๋์ด๋ผ๊ณ  ๋ณผ ์ ์๋ค.<br>
์ด๋ฅผ logistic regression์ด๋ผ๊ณ  ํ๋ค.<br>
๋ก์ง์คํฑ ํ๊ท๋ ์ด๋ฆ์ ๋ถ์ regression์ด๋ผ๋ ์ด๋ฆ์ด ๋ฌด์ํ๊ฒ, ํ๊ท๋ฌธ์ ์ ์ฐ์ด๋๊ฒ ์๋๋ผ ๋ถ๋ฅ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๋ ์๊ณ ๋ฆฌ์ฆ์ด๋ค.<br>
> ๋๊ฐ์ ๋ชปํ๋ค.

๋ค์ ์ฅํฉํ ํด์ค์ด ์ด์ด์ก๋๋ฐ, ์ด๋ถ๋ถ์ ์ ๋ง ์ด๋ ค์ด ๋ถ๋ถ์ด๊ณ  ์ํ์ ์ธ ๊ฐ๋์ด ๋ง์ด ๋ฑ์ฅํ๋ ๋ถ๋ถ์ด๋ผ ํ์๋ ๋ค์ ๋ ๊ณต๋ถํ๋ฉด์ ๋ ์ข์ ๋ณด์ถฉ ์ค๋ช์ ํ  ์ ์๋๋ก ๋ธ๋ ฅ์ด ํ์ํ  ๊ฒ ๊ฐ๋ค.<br>

<br>
<br>

## 4. ๋ง๋ฌด๋ฆฌ
![image](https://user-images.githubusercontent.com/121401159/218512409-f48899f7-6cea-4082-834f-69b2aced889b.png)
<br>
์ด๋ฒ ๊ธ์ ๋๋ฌด ์ด๋ ค์ ๋ค. ์ฌ์ค ๋ ์ค๋ชํ๊ณ  ์ถ์ ๋ด์ฉ๋ค๋ ์์ผ๋, ์ถํ์ ๋ฐ๋ก ์์ฑ๋๋ ๊ธ์ ํตํด์ **why**์ ๋ํ ์ด์ผ๊ธฐ๋ค์ ๋ ํ์ด๊ฐ ๋ณด๊ณ ์ ํ๋ค.<br>
๋ค์๊ธ์์๋ ๋ค์ค๋ถ๋ฅ๋ก ์ฐพ์์ค๊ฒ ๋ค. ๊ทธ๋ผ ์๋











<br>
<br>

```toc
```
