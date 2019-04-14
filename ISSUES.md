# 엔트리 엔진

> 엔트리 엔진 개발 중 현재 고민하고 있는 내용을 정리합니다.



## Node-Side Problem



### 페이징 문제

> React Router 를 사용해서 페이지를 나누고 있는데, 모든 페이지 코드를 미리 작성해놓기 보단, React Router 를 적용시켜서 앱 페이징을 구현하는 편이 여러모로 낫지 않을까?

**일단 React Router 를 쓰는 거로 가정해보자** 페이지를 React Router 로 나눌 시 고민해야할 문제는 그럼 어떤 문제가 있는가? 치명적 문제는 없는가?

1. React Router 를 쓸 때 페이지 전환 **애니메이팅**을 쓸 수 있는가? => **<u>된다</u>**

   1. 페이지를 아래로 감추고 페이지를 좌에서 우로 움직이는 트릭 

      https://medium.com/onfido-tech/animations-with-react-router-8e97222e25e1

      https://codesandbox.io/s/y2vq3x874j?from-embed

   2. react-transition-group

      https://github.com/reactjs/react-transition-group

      https://reactcommunity.org/react-transition-group/

      https://code.tutsplus.com/ko/tutorials/single-page-react-applications-with-react-router-and-react-transition-group-modules--cms-24507

      https://www.npmjs.com/package/react-router-transition

      색상 천천히 바뀌는 트랜젝션 결과물 https://youtu.be/53Y8q-SgLF0?t=1327

      

2. React Router 의 각 페이지를 **<u>하나의 DIV 에서 표시</u>**할 수 있는가?

3. React Router 여러 페이지를 하나의 DIV 에서 표시했을때 **코드수정을 실시간 갱신(HMR)** 시킬 수 있는가?

   

4. React Router 에서 **SSR** 적용 옵션 확인해보기

   https://velopert.com/3425

   https://github.com/airbnb/hypernova

   

5. React Router 에서 **존재하지 않는 페이지** 접근시 예외 핸들링 방법은?

6. Express 에서 Router 코드를 일부만 딱딱 떼어다가 전송하게 하는 방법은? (이건 아마 webpack lazy load 랑 관련 있을 법도 한데?)



### CSS 컴포넌트 문제

> 컴포넌트에 CSS 를 적용할 때 각 요소의 독립된 구조를 React 형태로 갖추는 방법? Rebase  였나 그거?

styled-components + styled-system(리엑트에서의 CSS 간편) = **REBASS**

https://rebassjs.org/

https://github.com/rebassjs/rebass

https://github.com/rebassjs/components



### React 컴포넌트 문제

> 함수형 컴포넌트를 사용할때 Props 였나 setState 였나 이걸 더 개별적으로&통합적으로 왔다갔다 활용할 수 있는 구조는 무엇이 있는가?

블라블라



### React 그리딩 문제

> React 와 Blueprintjs 에서 사용가능한 그리딩 시스템은?

https://github.com/STRML/react-grid-layout

그리딩 안의 그리딩 및 실시간 수정방법?

### 기본 디자인 컴포넌트 문제

> Blueprint.js 를 이용해서 바로 배치가능한 컴포넌트를 구성?

https://blueprintjs.com/docs/

https://coderjourney.com/tutorials/how-to-add-blueprintjs-to-a-react-app/



### 수정가능한 디자인 컴포넌트 문제

>  Framer.js 를 이용한 수정 및 애니메이션 구성이 가능한 디자인 컴포넌트 구성

