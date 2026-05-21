---
title: "PDF Toolkit에 MCID 수정과 AI 대체텍스트 생성을 붙였다"
description: "MCID 중복 보정, Figure 대체텍스트 생성, PyInstaller 배포까지 정리한 4월 말 개발 기록"
date: "2026-04-23"
category: "pdf-toolkit"
path: "pdf-toolkit-mcid-alttext-release"
featured: false
image: "/images/ogImage.png"
---

## 기능 추가

4월 말에는 PDF Toolkit에 큰 기능이 몇 가지 들어갔다.

- MCID 중복 수정
- AI 대체텍스트 생성
- API 키 배포 구조 정리

일단 간혹 발생하는 MCID 오류 수정기능을 만들었다. codex는 신이야..
이미지에 대한 대체텍스트를 생성하는 기능을 만들었다. 일단 비용대비 성능을 고려해서 gpt 4.1 mini로 모델을 설정했다. 물론 API key는 google cloud에 넣어서 유출되지 않도록 했다. 
(부서안에서만 쓰는데 그냥 넣어둘까..)
근데 조만간 Gemma4 31B 로컬 모델로 바꾸지 않을까 싶다.


## MCID 중복은 단순 번호 문제가 아니었다

PDF 접근성 작업에서 MCID 문제는 꽤 까다롭다.

content stream 안에서 같은 MCID가 중복으로 쓰이거나, 구조 트리와 ParentTree가 맞지 않으면 검증에서 문제가 생긴다. 화면상으로는 PDF가 멀쩡해 보여도 접근성 구조는 깨져 있을 수 있다.

그래서 MCID 수정 기능은 별도 모듈로 분리했다.


중요한 점은 content stream의 MCID만 바꾸면 끝나지 않는다는 것이다. StructTreeRoot와 ParentTree도 함께 맞춰야 한다.

```python
with pikepdf.open(pdf_path) as pdf:
    struct_tree = pdf.Root.get("/StructTreeRoot")
    parent_tree = struct_tree.get("/ParentTree") if struct_tree else None
```
PDF Toolkit의 MCID 수정은 이런 연결 관계를 같이 다루는 방향으로 만들었다. 단순 renumbering이 아니라, 구조 트리와 ParentTree까지 함께 보정하는 기능이 필요했다.

## AI 대체텍스트 생성

흐름은 다음과 같다.

1. PDF에서 Figure 태그를 찾는다.
2. Figure에 연결된 MCID 영역을 렌더링한다.
3. 이미지를 모델에 보낸다.
4. 생성된 대체텍스트를 사람이 확인한다.
5. 필요하면 PDF의 `/Alt`에 반영한다.

GUI에서는 Figure 이미지를 준비한 뒤 대체텍스트 생성 다이얼로그를 띄운다.

PDF 저장은 Figure 구조 태그의 `/Alt` 값을 수정하는 방식이다.

이 기능은 완전 자동화를 목표로 하기보다, 사람이 확인하고 수정할 수 있는 보조 기능으로 만들었다. 대체텍스트는 최종적으로 사람이 판단해야 하는 영역이기 때문이다.


## 회고
LLM 붙이고 하다보니 뭔가 스케일이 커졌다. 뿌듯허네