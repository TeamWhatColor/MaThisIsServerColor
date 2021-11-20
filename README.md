# MaThisIsServerColor


## 📌 서비스 이름과 소개 

![2076](https://user-images.githubusercontent.com/49263163/142741937-574073d9-13ea-487c-8ce0-ca3191e99e80.png)

<div align="center"> 

색깔로 정해지는 N개의 팀! 미션을 통해 컬러 메이트를 찾아라!  <br>
<b>🎨너 무슨 색이야?! </b>
</div>

## 📌 각자 개발 담당 부분

| ![youngjae](https://user-images.githubusercontent.com/49263163/142730145-227e5da0-a5f7-4b8f-bf15-7da89f223cd4.png) | ![dong](https://user-images.githubusercontent.com/49263163/142730195-372b99b2-7487-4cf7-b86e-34b26d51d921.png) |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|           [최영재](https://github.com/realwhyjay)            |             [이동근](https://github.com/geeneve)             |
|                       메인 뷰, 미션 뷰                       |                  스플래시 뷰, 유져 입력 뷰                   |

</div>



## 📌 코드 컨벤션

- lowCamelCase
- 변수/함수 이름은 20자 이내로 한다
- boolean같은 경우 “is”, “has”, “can”과 같은 접두어와 같이 사용한다.
- 함수명은 동사 + 명사 형태인 actionResource 형식을 활용한다.
- 변수명은 명사 형태로 작성한다

### 기타 Convention

- var 사용은 금지! const와 let만 사용한다.
- 앞의 공백(indentation)은 스페이스 4개로 맞춘다.
- 세미콜론, 콜론, 콤마 뒤에는 항상 공백을 둔다.
- promise 사용을 지양한다

### Commit Convention

------

```tsx
Commit types : description
ex) ✨ [FEAT] : main.js POST Complete
```

### Commit types

------

- ✅ [CHORE] : 코드 수정, 내부 파일 수정

- ✨ [FEAT] : 새로운 기능 구현

- ➕ [ADD] : Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시

- 🍱 [ADD] : 에셋 추가

- 🚑️ [HOTFIX] : issue나, QA에서 급한 버그 수정에 사용

- 🔨 [FIX] : 버그, 오류 해결

- ⚰️ [DEL] : 쓸모없는 코드 삭제

- 📝 [DOCS] : README나 WIKI 등의 문서 개정

- ✏️ [CORRECT] : 주로 문법의 오류나 타입의 변경, 이름 변경 등에 사용합니다.

- ⚡️ [IMPROVE] : 향상이 있을 때 사용합니다.

- ♻️ [REFACTOR] : 전면 수정이 있을 때 사용합니다

  

### **+ 지원이 추천하는 코드 컨벤션 🌰 **

- 지원이 정해주는 변수 하나에는, 마지막에 fighting을 붙여 네이밍한다...⭐️



## 📌 브랜치 전략

```
- main
	- develop
		- dev_youngjae
		- dev_donggeun
```

1. 각자의 브랜치에서 작업을 진행한다.
2. 작업 도중 틈틈이 add, commit, push를 진행한다.
3. 특정 작업이 완료되면 develop PR을 날린다. (리뷰어는 서로)
4. conflict가 난다면 해결 해준다.
5. 매번 과제 제출 전에 main에 merge한다.



## 📌 프로젝트 폴더링

```
📂 functions
    📂 api
        📂 routes
            📂 main
                📜 index.js
                📜 mainIdGET.js
            📂 mission
                📜 index.js
                📜 missionIdGET.js
            📂 user
                📜 index.js
                📜 userIdGET.js
                📜 userPOST.js
            📜 index.js
        📜 index.js
    📂 config
        📜 dbConfig.js
    📂 constants
        📜 responseMessage.js
        📜 statusCode.js
    📂 db
        📜 db.js
        📜 index.js
        📜 main.js
        📜 mission.js
        📜 user.js
    📂 lib
        📜 convertSnakeToCamel.js
        📜 util.js
    📂 node_modules
    📜 index.js
    📜 .env
    📜 .eslintrc.js
    📜 .gitignore
    📜 .prettierrc.js
    📜 package.json
📦 .firebaserc
📦 .gitignore
📦 firebase.json
📦 README.md
```

---

## 📌 package.json 캡쳐

<img width="545" alt="스크린샷 2021-11-21 오전 4 00 22" src="https://user-images.githubusercontent.com/49263163/142738088-655d7f55-1cc7-42ca-8694-8f4c750f3a5a.png">

## 📌 ERD

![whatColorERD](https://user-images.githubusercontent.com/49263163/142741608-01c282be-9219-4429-916a-fbc517855a22.png)



## 📌 Datagrip에서 생성한 Table 정의


<img width="593" alt="스크린샷 2021-11-21 오전 6 39 13" src="https://user-images.githubusercontent.com/49263163/142741634-5b81f6a6-3204-4945-b823-b46f341a3ccd.png">

<img width="593" alt="스크린샷 2021-11-21 오전 6 39 24" src="https://user-images.githubusercontent.com/49263163/142741631-47f576ad-8181-47f5-b180-e4f559ffebfc.png">

<img width="592" alt="스크린샷 2021-11-21 오전 6 39 03" src="https://user-images.githubusercontent.com/49263163/142741636-ac4b7ee1-2738-4ce7-9aff-93af546509c0.png">

우린서버다이색이야🎨

