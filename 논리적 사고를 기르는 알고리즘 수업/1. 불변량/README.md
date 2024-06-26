# 불변량

## 요약

1. 불변량

- 어떤 변환의 '불변량'이란, 그 변환을 아무리 적용해도 변하지 않는, 항상 일정한 값이나 특징
- 하나의 과정을 수행했을 때 불변량이 유지된다면, 그 과정을 n번 반복해도 불변량은 유지된다.
- 불변량은 수학적 귀납법의 원리에 해당한다.
  - 귀납법: 어떤 대입에 의해 표현식의 값이 바뀌지 않는다면, 그 대입을 몇번 적용하더라도 값이 변하지 않는다는 원리

2. 추상화, 수학적 계산

- 추상화: 문제 해결에 필요한 것을 식별하고, 그렇지 않은 것은 배제하는 과정

  - ex) 초콜릿 쪼개기 문제에서 초콜릿을 쪼개는 순서와 조각들의 모양, 크기는 배제하고 초콜릿을 쪼갠 횟수와 초콜릿 조각의 개수만을 고려

- 수학적 계산: 추축을 최소한으로 제한한 후, 문제를 계산으로 귀결하기
  - ex) 빈 상자 문제에서 불변량이 상태 변수들의 선형결합임을 "추측"한 후, 각 계수를 "계산" 했다.

3. 동시 대입, 비결정론적 선택

- 비결정론적 선택 (non-deterministic choice): 여러 선택지 중 하나를 선택하는 것
  - ex) 주로 2인 게임에서 비결정성을 활용하는데, 각 플레이어는 상대방의 행동을 제어할 수 없으므로 플레이어의 행동을 비결정론적 선택으로 모델링해야하기 때문이다.

---

# 연습문제 풀기

### 2.6 (a)

m := m + 6, m := m + 15 라는 비결정론적 선택문이 있을때,
이 선택문의 불변량은 m mod 3 이다.
6과 15의 최대 공약수가 3이기 때문이다.

이를 증명하기

```
비결정론적 선택문에서 "m := m + 6", "m := m + 15"와 같은 명령들이 주어져 있고, 주어진 불변량이 "m mod 3" 이라고 합니다. 여기서 "불변량"이란, 코드를 실행하기 전과 후에 동일하게 유지되는 속성을 의미합니다.
비결정론적 선택문의 특성상, "m := m + 6" 혹은 "m := m + 15" 중 하나를 선택하여 실행하는 것이 가능합니다. 우리는 이 두 연산 모두가 "m mod 3" 이라는 불변량을 유지한다는 것을 증명해야 합니다.

증명은 다음과 같습니다:
m mod 3의 의미: 어떤 정수 m에 대해, m mod 3의 결과는 m을 3으로 나눈 나머지입니다. 이 나머지는 0, 1, 또는 2 중 하나입니다.
연산 전후의 나머지 확인:
m이 3으로 나누어 떨어지면 (m mod 3 = 0), m + 6 및 m + 15 또한 3의 배수입니다. 따라서 (m+6) mod 3 = 0, (m+15) mod 3 = 0이 됩니다.
m이 3으로 나누었을 때 나머지가 1이면 (m mod 3 = 1), m + 6 = 3k+1+6 = 3k+7 = 3(k+2) + 1이고, m + 15 = 3k+1+15 = 3k+16 = 3(k+5) + 1입니다. 따라서 (m+6) mod 3 = 1, (m+15) mod 3 = 1입니다.
m이 3으로 나누었을 때 나머지가 2이면 (m mod 3 = 2), m + 6 = 3k+2+6 = 3k+8 = 3(k+2) + 2이고, m + 15 = 3k+2+15 = 3k+17 = 3(k+5) + 2입니다. 따라서 (m+6) mod 3 = 2, (m+15) mod 3 = 2입니다.
최대공약수와 연관성: 여기서 핵심은 6과 15의 최대공약수가 3이라는 점입니다. 이는 이 두 수가 공통적으로 3의 배수라는 것을 의미하고, 따라서 m 값이 어떻게 변하든 m을 3으로 나눈 나머지는 변하지 않는다는 것을 의미합니다.
위와 같이 m의 값이 어떻게 변하더라도, m mod 3은 일정하게 유지됩니다. 따라서 "m mod 3"은 두 비결정론적 선택문 "m := m + 6"과 "m := m + 15"에 대한 유효한 불변량입니다.
```

### 2.6 (b)

그럼 이 답을 일반화하여, 임의의 정수 j 와 k 가 주어졌을 때, 다음 비결정론적 선택문의 불변량을 밝히고,
그 답을 형식적으로 검증하라.

m := m + j, m := m + k

```
임의의 정수 \( j \)와 \( k \)가 주어졌을 때, 두 비결정론적 선택문 "m := m + j"와 "m := m + k"에 대해 불변량을 찾고 검증하는 과정은 다음과 같습니다:

### 불변량의 후보
불변량의 후보로 고려할 수 있는 것은 \( j \)와 \( k \)의 최대공약수 \( g \)를 이용하는 것입니다. 이 최대공약수 \( g \)를 사용하여 \( m \mod g \)를 불변량으로 설정할 수 있습니다.

### 왜 \( m \mod g \)가 불변량인가?
1. **정의**: 최대공약수 \( g \)는 \( j \)와 \( k \)가 나누어떨어지는 가장 큰 수입니다. 따라서 \( g \)는 \( j = g \cdot j' \)와 \( k = g \cdot k' \) (여기서 \( j' \)와 \( k' \)는 정수)로 표현할 수 있습니다.

2. **연산 전후의 나머지**:
   - \( m \)을 \( g \)로 나누었을 때의 나머지가 \( r \)라고 하면 \( m = g \cdot q + r \) (여기서 \( q \)는 몫)입니다.
   - \( m \)에 \( j \)를 더하면 \( m + j = g \cdot q + r + g \cdot j' = g \cdot (q + j') + r \)입니다. 따라서 \( (m+j) \mod g = r \)입니다.
   - \( m \)에 \( k \)를 더하면 \( m + k = g \cdot q + r + g \cdot k' = g \cdot (q + k') + r \)입니다. 따라서 \( (m+k) \mod g = r \)입니다.

### 형식적 검증
불변량 \( m \mod g \)가 유효하다는 것을 형식적으로 증명하기 위해, 우리는 불변량의 성질을 검증해야 합니다:
- **초기 조건**: 불변량은 코드의 실행 전에 참이어야 합니다. \( m \mod g \)는 \( m \)의 초기값에 대해 항상 정의됩니다.
- **유지 조건**: 선택문의 실행 후에도 불변량이 참으로 유지되어야 합니다. 위에서 증명했듯이, \( m \)이 \( j \)나 \( k \)만큼 증가한 후에도 \( m \mod g \)는 변하지 않습니다.
- **종료 조건**: 불변량은 코드의 실행 후에도 참이어야 합니다. 우리가 고려하는 코드는 루프나 조건문이 아니기 때문에, 종료 조건은 초기 조건 및 유지 조건과 함께 자동으로 만족됩니다.

이러한 증명을 통해 \( m \mod g \)가 "m := m + j"와 "m := m + k"의 선택문에 대한 유효한 불변량임을 알 수 있습니다. 이 불변량은 코드의 실행 전과 후에 일정하게 유지되며, \( j \)와 \( k \)의 선택에 영향을 받지 않습니다.
```

### 2.6 (c)

이렇게 도출한 답은 j 그리고/또는 k가 0일 때에도 (즉, 선택에 skip 이 포함되어도) 옳은가?
이외에 다른 극단적인 경우에는 무엇이 있는가?

```
j 또는 k가 0인 경우, 즉 선택에 skip(즉, 아무런 변화가 없는 연산)이 포함되어 있을 때에도 위의 불변량 \( m \mod g \)는 여전히 유효합니다. 이 상황을 분석하고, 또 다른 극단적인 경우들을 살펴보겠습니다.

### j 또는 k가 0일 때의 분석

1. **j = 0인 경우**:
   - "m := m + 0"은 실제로 m의 값을 변경하지 않습니다. 따라서 m의 초기 값이 \( m = gq + r \)일 때, \( m \mod g = r \)이고, 변하지 않습니다.
   - "m := m + k"에 대해서는 위에서 논의한 불변량 증명이 그대로 적용됩니다.

2. **k = 0인 경우**:
   - 이 경우도 "m := m + 0"은 m을 변경하지 않으며, \( m \mod g \)는 유지됩니다.
   - "m := m + j"에 대한 불변량 증명은 동일하게 적용됩니다.

따라서 j 또는 k 중 하나가 0일 때에도 불변량 \( m \mod g \)는 유효합니다.

### 다른 극단적인 경우

1. **j와 k가 같은 경우**:
   - j와 k가 동일하다면, 두 선택문은 실질적으로 같은 연산을 수행합니다. 이 경우 불변량 \( m \mod g \)는 여전히 유효하며, g는 j와 k의 최대공약수, 즉 j 또는 k 자체가 됩니다.

2. **j와 k가 서로 소인 경우 (g = 1)**:
   - j와 k가 서로 소, 즉 최대공약수가 1인 경우, \( m \mod 1 \)은 항상 0입니다. 이는 모든 정수가 1로 나누어 떨어진다는 의미이므로, 이 불변량은 정보를 제공하지 않습니다. 이 경우 다른 불변량을 찾아야 할 수도 있습니다.

3. **j와 k가 모두 음수인 경우**:
   - j와 k가 음수인 경우에도 최대공약수는 양수입니다. 따라서 \( m \mod g \)는 음수인 변화량에 대해서도 유효한 불변량으로 작용합니다.

이러한 극단적인 경우들을 고려해도 \( m \mod g \)는 대부분의 상황에서 불변량으로서의 역할을 유지합니다. 그러나 특정 조건(예: 서로 소인 경우)에서는 불변량이 코드의 상태 변화에 대해 충분한 정보를 제공하지 못할 수 있으므로, 상황에 맞는 추가적인 불변량을 고려하는 것이 필요할 수 있습니다.
```

### 2.7

대입문에 여러개의 변수가 포함되어 있어도, 변수 집합의 서로 다른 부분집합을 결합하는 불변량을 찾을 수 있다. 예를 들어, 대입문
m, n := m + 2, n + 3 에는 m mod 2, n mod 3, 3m - 2n 이라는 불변량이 있다.

다음 비결정론적 선택문을 보자.
m, n := m + 1, n + 2
n, p := n + 1, p + 3

여기서 자명하지 않은 불변량을 가능한 많이 찾아보아라. (먼저, 각 대입문의 불변량을 찾아보아라)

```
비결정론적 선택문에 대해 불변량을 찾는 것은, 프로그램의 상태가 변화해도 일관되게 유지되는 수학적 성질을 확인하는 과정입니다. 주어진 선택문은 다음과 같습니다:

1. m, n := m + 1, n + 2
2. n, p := n + 1, p + 3

각 대입문의 불변량을 찾아보고, 이를 활용해 가능한 불변량을 파악해보겠습니다.

### 대입문 1: m, n := m + 1, n + 2

이 대입문에서의 각 변수 변화를 살펴보면:
- **m**은 매번 1씩 증가합니다. 이는 \( m \mod 1 \)가 불변량이 될 수 있지만, 이는 자명한 불변량입니다 (모든 m에 대해 \( m \mod 1 = 0 \)).
- **n**은 매번 2씩 증가합니다. 따라서 \( n \mod 2 \)가 자명하지 않은 불변량입니다. \( n \)이 2로 나눈 나머지는 변하지 않습니다.

### 대입문 2: n, p := n + 1, p + 3

이 대입문에서의 각 변수 변화를 살펴보면:
- **n**은 매번 1씩 증가합니다. 이는 \( n \mod 1 \)가 불변량이 될 수 있으나 자명한 불변량입니다.
- **p**는 매번 3씩 증가합니다. 따라서 \( p \mod 3 \)가 자명하지 않은 불변량입니다. \( p \)가 3으로 나눈 나머지는 변하지 않습니다.

### 조합된 불변량

이제 두 대입문을 모두 고려하여 조합된 불변량을 찾아보겠습니다:
- **\( n \mod 2 \)**는 첫 번째 대입문에서 변하지 않지만, 두 번째 대입문에서는 \( n \)이 1씩 증가하여 이 불변량은 유지되지 않습니다.
- **\( p \mod 3 \)**는 두 번째 대입문에서 유지되지만, 첫 번째 대입문에 \( p \)가 관련되지 않으므로 이 불변량 역시 선택에 따라 유지됩니다.

### 추가적인 불변량 탐색

두 변수의 선형 조합을 고려하여 불변량을 찾을 수 있습니다:
- 예를 들어, \( 2m - n \)을 살펴보면, 첫 번째 대입문에서 \( m \)과 \( n \)이 각각 1, 2씩 증가하므로 \( 2(m+1) - (n+2) = 2m - n \)이 유지됩니다. 하지만 두 번째 대입문에서 \( n \)이 변경되면 이 불변량은 깨집니다.

따라서 두 대입문을 모두 고려한 불변량을 찾기는 어렵지만, 각 대입문에 따라 \( n \mod 2 \) 및 \( p \mod 3 \)가 유지될 수 있음을 알 수 있습니다.
```

나는 첫번째 대입문의 불변량을 2m - b
n - 2m 이 첫번째 대입문의 불변량이라는데, 왜 그런지 증명해줘

```
불변량 \( n - 2m \)이 첫 번째 대입문 \( m, n := m + 1, n + 2 \)에 대해서 유지되는지 증명하기 위해, 대입문 실행 전후의 \( n - 2m \) 값을 확인해보겠습니다.

### 초기 상태
먼저, 대입문 실행 전의 \( m \)과 \( n \)을 각각 \( m \)과 \( n \)으로 가정하겠습니다. 이 때, \( n - 2m \)의 값은 초기 상태의 \( n \)과 \( m \)을 바탕으로 계산됩니다.

### 대입문 실행 후
대입문 \( m, n := m + 1, n + 2 \)에 따라, \( m \)의 값은 \( m + 1 \)이 되고, \( n \)의 값은 \( n + 2 \)가 됩니다. 이 새로운 값들을 사용하여 \( n - 2m \)을 다시 계산해 보면:

\[ n' - 2m' = (n + 2) - 2(m + 1) \]

위 식을 전개하면:

\[ n + 2 - 2m - 2 = n - 2m \]

### 증명
위에서 계산한 결과로 볼 때, 대입문 실행 후의 \( n - 2m \) 값은 대입문 실행 전의 \( n - 2m \) 값과 동일합니다. 이는 대입문이 \( n - 2m \)이라는 값을 변화시키지 않는다는 것을 의미하며, 따라서 \( n - 2m \)는 이 대입문에 대한 불변량입니다.

### 결론
따라서, \( n - 2m \)는 첫 번째 대입문 \( m, n := m + 1, n + 2 \)에서 불변량으로 유지됩니다. 이러한 방식으로 불변량을 확인하는 것은 프로그램이 예상대로 작동하는지 검증하는 데 중요한 도구가 될 수 있습니다.
```

---

# 이것저것 풀어보기

## 초콜릿 문제

## 빈 상자

## 종이컵 문제

## 테트로미노

- 문제: 4개의 정사각형으로 만들어진 테트로미노 O, Z, L, T, I 조각으로, 직사각형 모양의 격자판을 덮는 문제

(a) 격자판을 테트로미노로 덮을 수 있다면, 격자판의 적어도 한 변의 길이는 짝수임을 증명하라.

격자판의 한변의 길이: h, v
격자판 속 정사각형 개수: h \* v

- h, v가 모두 홀수인 경우: 격자판의 넓이는 홀수 (격자판을 테트로미노로 덮을 수 없다)
- h, v 중 하나는 짝수, 하나는 홀수인 경우: 격자판의 넓이는 짝수
- h, v가 모두 짝수인 경우: 격자판의 넓이는 짝수

격자판을 테트로미노로 덮을 수 있다 = h \* v 가 4의 배수이다 = h, v 중 하나는 짝수이다.

(b) 격자판을 T 조각 테트로미노만 써서 덮을 수 있다면, 격자판의 넓이는 8의 배수임을 증명하라.

T 조각으로 덮을 수 있는 최소 크기의 격자판: 4 x 4 = 16
이때 필요한 T조각 개수 = 4
ㅇㅅㅅㅅ
ㅇㅇㅅㅌ
ㅇㅁㅌㅌ
ㅁㅁㅁㅌ

T 조각 4개 세트의 개수: ts
격자판 넓이: w

ts, w = ts + 1, w + 16

ts = 1 일때, eight(w) = true
w + 16 에서 16도 eight(16) = true
그러므로 항상 8의 배수

---

연습문제 2.8 - (1)
대입문에 여러 개의 변수가 포함되어 있어도,
변수 집합의 서로 다른 부분집합을 결합하는 불변량을 찾을 수 있다.

m + 2, n + 3

A(m+2) + B(n+3) = Am + Bn
2A + 3B = 0
3 -2

<불변량 목록>
m mod 2
n mod 3
3m - 2n

---

연습문제 2.8 - (2)
m, n = m+1, n+2 (고른다) n, p = n+1, p+3

A(m+1) + B(n+2) = Am + Bn
A + 2B = 0
-2 1
-2m + n = 0
n = 2m

A(n+1) + B(p+3) = An + Bp
A + 3B = 0
-3 1
-3n + p = 0
p = 3n

<불변량 목록>
n mod 2
p mod 3
n - 2m (1번째)
3n - p (2번째)

---

연습문제 2.9

d, b, w = d + 1, b + 3, w + 1
(고른다)
l, b, w = l + 1, b + 1, w + 3

b - 3 x d - l

두 변수의 선형결합이 두 대입문 모두의 불변량이 될 수 있는지 판별

---
