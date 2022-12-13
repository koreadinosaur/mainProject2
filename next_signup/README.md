<img width="80%" src="https://user-images.githubusercontent.com/91491029/207256195-ca61b8a9-69b4-43b9-9454-b8b7c06297d5.gif"/>

# 구현 기능
### Kanban board 형식의 To Do List
- To Do board, in Progress board, Done board 세 보드로 해야할 업무, 진행중인 업무, 완료된 업무로 나눠서 관리할 수 있다
### 인증 / 보안
- Next-Auth를 사용해 토큰 발급, 세션 유지
- 토큰을 decode 해서 확인하는 건 아직 구현하지 않았다. 지금은 토큰이 존재하기만 하면 유효한 토큰으로 간주함
### DB
- Mongo DB atlas로 DB에 유저 정보와 To Do List 정보를 연동해서 저장
### To Do List, user 정보 CRUD
- 칸반보드의 To Do List는 Update 제외하고 CRD만 구현
- user 정보는 CRU만 구현
### 서버
- 서버는 Next JS로만 구현


# 기술 스택
- next js
- styled-components
- typescript
- Mongo DB atlas
- next-Auth
- redux-toolkit
- Material UI
- react-hook-form
