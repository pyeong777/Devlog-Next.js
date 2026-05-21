---
title: "PDF Toolkit을 만들기 시작했다"
description: "태그 PDF를 확인하기 위한 작은 데스크톱 도구에서 인코딩 보정 기능까지 붙인 1월 개발 기록"
date: "2026-01-23"
category: "pdf-toolkit"
path: "pdf-toolkit-start"
featured: true
image: "/images/ogImage.png"
---

## 태그 PDF를 직접 확인하는 도구가 필요했다

PDF Toolkit의 가장 기본이 되는 데스크톱 앱을 만들기 시작했다.

관련 사업이 시작할때부터 문제가 되었던 인코딩 오류가 발목을 잡고있었는데 이걸 해결하고싶었다. 외주 개발자도 고용해서 문제를 해결해보려 했는데 우리가 원하는 만큼 완벽하게 동작하지 않았다. 그래서 내가 만들기로 했다.. 뭔가 추가적인 기능을 곁들여서??
우리는 PDF를 열고, 페이지를 보고, 구조 태그를 확인하는 도구가 필요했다. 태그 PDF 작업을 하다 보면 화면에 보이는 내용과 구조 트리, ActualText, AltText가 서로 맞는지 계속 확인해야 한다. 매번 여러 도구를 오가며 확인하는 방식은 오래 유지하기 어려웠다.

그래서 PySide6 기반의 작은 Windows 데스크톱 도구로 시작했다.

```python
from PySide6 import QtCore, QtGui, QtWidgets
import fitz
import pikepdf
```

PDF 렌더링은 PyMuPDF를 사용하고, 구조 태그와 PDF 객체 확인은 pikepdf를 사용했다. GUI 진입점은 `tag_viewer_app.py` 하나로 두었다.


이때 만든 `run_tag_viewer.bat`는 지금도 기본 실행 경로로 남아 있다.  
처음부터 배포판을 만들기보다는, 로컬에서 빠르게 실행하고 고치는 개발 흐름을 우선했다.

## 기본 기능은 PDF 확인에 집중했다

초기 앱에서 중요한 것은 PDF를 열었을 때 필요한 정보를 한 화면에서 확인하는 것이었다.

- PDF 페이지 렌더링
- 구조 태그 트리 확인
- ActualText 확인
- AltText 확인
- 페이지 이동
- 파일 드래그 앤 드롭

이 단계에서는 PDF를 직접 수정하기보다, 현재 문서 상태를 정확히 보는 것이 더 중요했다. 문제가 있는 PDF를 보정하려면 먼저 문제가 어디에 있는지 확인할 수 있어야 하기 때문이다.

## 인코딩 오류 보정 기능

단순 오류 확인을 넘어 인코딩 보정 기능이 들어갔다.

PDF에서는 화면에 텍스트가 정상적으로 보이더라도, 실제 텍스트 추출이나 태그 구조에서는 깨지는 경우가 있다. 특히 `/ToUnicode` 매핑이 잘못되어 있거나, 보이지 않는 텍스트의 렌더링 상태가 잘못된 경우 접근성 검수에서 문제가 된다.

이 기능은 원본 PDF와 태그 PDF를 비교해서 텍스트 매핑 문제를 보정하는 방향으로 만들었다.

```python
def _run_encoding_fix(self, orig_path: str, tag_path: str) -> bool:
    if not orig_path or not tag_path:
        QtWidgets.QMessageBox.warning(
            self, "입력 누락", "원본 PDF와 태그 PDF를 모두 선택하세요."
        )
        return False
```

처음에는 하나의 GUI 안에서 모든 로직을 처리할 수도 있었지만, 보정 로직은 별도 파일로 분리했다. 그래야 나중에 GUI와 무관하게 검증하거나 재사용하기 쉽다.

## 회고
잘하고 있는건진 모르겠지만 요새 AI 기능이 무서워서 잘 활용해서 만들어봐야지.. 사실 이건 작년 11월? 정도부터 만들었는데 진짜 뭔짓을해도 안되길래 포기해야하나 싶던 찰나에.. 생각을 전환시켜서 접근하는 방법을 달리했더니 뭔가 풀리는 느낌이다..
