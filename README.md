# Pre-Onboarding 과제 수행

### 수행 기간: 09.07(토) ~ 09.08(일)
- UI 업데이트 및 무한 스크롤, 테스팅, 토큰 만료시 자동 로그아웃 등 기능 추가 예정

<br />

## ※ 과제 목표

### 1. 회원가입 + 로그인
- 과제에서 제공되는 api서버 이용
- jwt 토큰 방식으로 구현, refresh token 없이 구현하는 것이 명시되어 있어 access token만 가지고 진행 → access token: local storage에 짧은 유효 기간을 가지게 저장
- 닉네임 중복검사에 따른 response가 없어 이 부분은 제외하고 진행
<img src="https://github.com/user-attachments/assets/79c2cece-4e61-44e1-9f0c-d5f028584758" alt="sign-up" width="350" height="500" />
<img src="https://github.com/user-attachments/assets/9d3c7be7-f2a8-409b-98be-58468646cc10" alt="login" width="350" height="400" />

### 2. 권한별 라우팅 제어
- ProtectedRoute와 publicRoute로 권한별 라우팅 제어 기능 구현
- 마이페이지: 로그인 시 접근 가능(ProtectedRoute) → 미로그인 상태로 접근시 확인 메시지 출력 이후 로그인 페이지로 이동
- 로그인/회원가입 페이지: 미로그인 시 접근 가능(PublicRoute) → 로그인 상태로 접근시 메인 페이지로 이동
- Protected Route 코드: [Protected Route](https://github.com/hyeonseok98/pre-onboarding/blob/main/src/routes/ProtectedRoute.tsx)
<img src="https://github.com/user-attachments/assets/f0062526-71d1-4705-ad44-9b7570cfa16b" alt="ProtectedRoute" width="450" />
<img src="https://github.com/user-attachments/assets/2044231b-0e36-4ae6-832b-a268fcd06f31" alt="router" width="150" height="300" />

### 3. tailwind(styled-components)를 이용한 스타일링
- tailwind를 이용한 반응형 구현 코드
<img src="https://github.com/user-attachments/assets/92bf6729-3418-4eca-8563-a91756228f65" alt="tailwind" width="650" height="50" />

### 4. zustand를 통한 client-side 전역 state 관리
- 해당 프로젝트 내에서는 zustand를 통하여 `로그인 되어있는지 확인`하는 로직 관리

### 5. axios, tanstack-query를 통한 외부통신 및 server-side 전역 state 관리
- jsonplaceholder로 가상 데이터로 서버 통신 구현
- axios를 통한 api 통신과 tanstack-query를 이용한 캐싱 기능 이용
- queryKey의 경우 한 곳에서 관리하도록 구현

 `5-1. shoes.api.ts // api`

<img src="https://github.com/user-attachments/assets/9edfc857-9ef3-429d-add3-b38688be13e0" alt="api" width="350" height="200" />

`5-2. useShoes.ts // custom hook`  

<img src="https://github.com/user-attachments/assets/5425c175-6656-4ae5-b828-bc74342437c3" alt="custom hook" width="300" height="180" />

`5-3. queryKeys.ts // queryKey 관리`
    
<img src="https://github.com/user-attachments/assets/2202a8c7-e6db-4212-a250-4bc67003a09b" alt="queryKey" width="300" height="130" />

### 6. Jest(Cypress)를 이용한 테스트
 - 컴포넌트 UI 테스트를 위한 추가 로직을 조금 더 구현할 필요가 있음
   
### 7. Sentry 도입 및 로그 확인
- console 에러와 sentry 로그 확인 결과
<img src="https://github.com/user-attachments/assets/82425d8b-b71a-426f-9d48-cf761a43a8c4" alt="sentry log" />

