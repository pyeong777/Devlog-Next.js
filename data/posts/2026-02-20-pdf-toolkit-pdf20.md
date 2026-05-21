---
title: "PDF Toolkit에 PDF 2.0 변환 기능을 붙였다"
description: "PDF Header, Catalog Version, XMP PDF/UA 정보를 함께 맞추는 변환 기능 개발 기록"
date: "2026-02-20"
category: "pdf-toolkit"
path: "pdf-toolkit-pdf20-upgrade"
featured: false
image: "/images/ogImage.png"
---

## PDF 버전 변경

PDF Toolkit에 PDF 2.0 변환 기능을 추가했다.

PDF 접근성 작업을 하다 보면 구조 태그만 보는 것으로는 부족하다. PDF Header, Catalog `/Version`, XMP 메타데이터, PDF/UA 관련 식별자까지 같이 확인해야 하는 경우가 있다.

처음에는 PDF 버전을 올린다고 하면 파일 헤더만 바꾸면 될 것처럼 보인다.

```text
%PDF-2.0
```

하지만 실제로는 Catalog의 `/Version`과 XMP 메타데이터도 같이 봐야 한다. PDF/UA 관련 필드도 함께 맞춰야 검수 흐름에서 혼선이 줄어든다.

```python
PDF_VERSION_TARGET = "2.0"
PDFUAID_PART_TARGET = "2"
PDFUAID_REV_TARGET = "2024"
```

PDF Toolkit에서는 이 값들을 기준으로 현재 문서 상태를 확인하고, 필요한 경우 보정하도록 했다.

## 별도 작업 화면으로 분리

이 기능은 일반 PDF 뷰어 화면 안에 억지로 넣기보다, 별도 작업 화면으로 분리했다. 사용자는 PDF를 선택하고 실행하면 된다.

PDF 2.0 변환은 자주 누르는 버튼이라기보다, 필요할 때 명확하게 실행하는 배치 작업에 가깝다. 그래서 일반 확인 탭이 아니라 변환 메뉴 쪽에 두는 것이 더 자연스러웠다.

변환 기능만 있으면 충분하지 않다. 변환 후 실제 값이 어떻게 들어갔는지 바로 확인할 수 있어야 한다.

메타데이터 패널에서는 PDF Header, Catalog `/Version`, XMP `pdfuaid:part`, `pdfuaid:rev` 값을 함께 보여주도록 했다.

```python
self._set_metadata_value(
    "pdf20_header_check",
    self._format_pdf20_check(header_version, upgrade_pdf_version.PDF_VERSION_TARGET),
)
```

검증 결과는 단순 값이 아니라 통과 여부까지 같이 표시한다.

## 회고
단순히 태그 구조만 보는 도구가 아니라, 문서의 메타데이터와 규격 정보를 함께 다루는 도구로 확장시키고있다. 이 외에도 자잘자잘한거 많이 고쳤다.. QA 시트 만들어서 부서원들 의견도 계속 받고있다.. 제발 사소한거 하나라도 전부 말해주세요.. 다 만들어드릴테니..
