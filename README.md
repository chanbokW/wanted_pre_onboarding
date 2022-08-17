# wanted_pre_onboarding
프리온 온보딩 백엔드

# 1. 요구사항 분석
### 사용자
- 사용자는 이름에 대한 정보를 가지고 있습니다.
- 사용자는 채용공고를 지원 할 수 있고 사용자는 동일한 채용공고에 1회만 지원 가능합니다.

### 회사
- 회사는 회사명,국가,지역에대한 정보를 가지고 있습니다.
- 회사는 채용 공고를 등록을 할 수 있습니다.
### 채용공고
- 회사아이디, 채용포지션, 보상금,내용,사용기술에 대한 정보를 가지고 있습니다.
    - 채용 공고 등록
    - 채용 공고 삭제
    - 채용 공고 수정
    - 채용 공고 조회 + 파라미터(필수는 아닙니다.)
    - 채용 공고 상세 페이지 조회
### 모델링
![이미지](/img/wanteddb.png)
#### company(회사)
- id : 회사 id
- name : 회사명 
- nation : 국가 
- area 지역

#### user(회원)
- id : 회원 id
- name : 회원 명

#### apply(채용공고 지원)
- id : 채용공고지원 id
- user_id : 회원 고유아이디
- notice_id : 채용공고 고유아이디

#### notice(채용공고)
- id: 채용공고 id
- position: 채용포지션
- compensation: 채용보상금
- content: 채용내용
- techstack: 사용 기술
- company_id: 회사 id

### 사용기술(필수 기술요건: ORM사용 RDBMS사용,)
- NestJs(Node.js)
- TypeORM(ORM)
- MySQL(RDBMS)
## 요구사항
### 1. 채용공고를 등록한다.

# 2. 구현
 ### 1. 채용 공고를 등록합니다. 
 <pre> <code>POST: /notice/
 Content-Type: application/json

 {
    "companyId": 1,
    "position": "backend",
    "compensation": 200000,
    "content": "백엔드개발자를 모집합니다...",
    "techstack":"typescript"
}</code></pre>

### 2.채용 공고를 수정합니다.
<pre> <code>PUT: /notice/{notice_id}
 Content-Type: application/json

{
    "position": "backend",
    "compensation": 100000,
    "content": "백엔드개발자를 모집합니다.",
    "techstack":"typescript"
}
변경후 응답 데이터
{
    "id": 2,
    "position": "fromtend",
    "compensation": 100000,
    "content": "프론트엔드 개발자를 모집합니다.",
    "techstack": "typescript"
}
</code></pre>

### 3. 채용공고를 삭제합니다
<pre><code>DELETE /notice/{notice_id}
{
    채용공고가 성공적으로 삭제 되었습니다.
}</code></pre>

### 4. 채용공고 목록을 가져옵니다.
- 4.1 사용자는 채용 목록을 가져옵니다.
<pre><code>GET /notice
[
    {
        "notice_id": 2,
        "notice_position": "fromtend",
        "notice_compensation": 100000,
        "notice_techstack": "typescript",
        "company_name": "hello",
        "company_nation": "한국",
        "company_area": "서울"
    },
    {
        "notice_id": 5,
        "notice_position": "backend",
        "notice_compensation": 200000,
        "notice_techstack": "typescript",
        "company_name": "wnated",
        "company_nation": "미국",
        "company_area": "캘리포니아"
    },
    {
        "notice_id": 6,
        "notice_position": "frontend",
        "notice_compensation": 200000,
        "notice_techstack": "javascript",
        "company_name": "google",
        "company_nation": "미국",
        "company_area": "캘리포니아"
    }
]</code></pre>
- 4.2 사용자는 채용 목록을 검색합니다.
<pre><code>GET /notice?search=미국
[
    {
        "notice_id": 5,
        "notice_position": "backend",
        "notice_compensation": 200000,
        "notice_techstack": "typescript",
        "company_name": "wnated",
        "company_nation": "미국",
        "company_area": "캘리포니아"
    },
    {
        "notice_id": 6,
        "notice_position": "frontend",
        "notice_compensation": 200000,
        "notice_techstack": "javascript",
        "company_name": "google",
        "company_nation": "미국",
        "company_area": "캘리포니아"
    }
]</code></pre>

### 5. 채용 상세 페이지를 가지고 옵니다.
<pre> <code> GET /notice/{notice_id}
{
    "noticeId": 6,
    "companyName": "google",
    "nation": "미국",
    "area": "캘리포니아",
    "position": "frontend",
    "compensation": 200000,
    "techsstack": "javascript",
    "content": "프론트엔드 개발자를 모집합니다...",
    "otherNotices": [
        7,
        8
    ]
}</code> </pre>
 ### 6. 사용자는 채용공고에 지원합니다
 <pre> <code> POST /apply 
 Content-Type: application/json
 {
    "userId" : 2,
    "noticeId": 6
}
 </code> </pre>
  - 6 - 1 동일한 채용공고에 지원할경우 예외발생 
<pre> <code>{
    "statusCode": 406,
    "message": "지원하신 내역이 있습니다.",
    "error": "Not Acceptable"
}</code> </pre>