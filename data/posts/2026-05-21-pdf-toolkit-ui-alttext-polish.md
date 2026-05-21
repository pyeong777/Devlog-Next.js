---
title: "PDF Toolkit의 UI와 대체텍스트 편집 흐름을 다듬었다"
description: "왼쪽 툴바, PDF 확대 이동, 메타데이터 표시, 대체텍스트 직접 편집 UI를 정리한 기록"
date: "2026-05-21"
category: "pdf-toolkit"
path: "pdf-toolkit-ui-alttext-polish"
featured: false
image: "/images/posts/pdf-toolkit-ui-after.png"
---

## 기능이 늘어나면 UI도 다시 봐야 한다

5월 말에는 새 기능을 크게 추가하기보다, 이미 들어간 기능을 실제로 쓰기 편하게 다듬는 작업을 했다.

PDF Toolkit은 처음보다 기능이 많이 늘었다.

- PDF 열기
- 구조 태그 확인
- 메타데이터 확인
- MCID 수정
- 대체텍스트 생성
- 테이블 셀 편집
- PDF 2.0 변환
- 썸네일 추출

기능이 늘어나면 단순히 버튼을 더 붙이는 방식으로는 오래 버티기 어렵다.  
그래서 왼쪽 툴바, 상단 명령 영역, PDF 뷰어 조작, 대체텍스트 편집 흐름을 계속 정리했다.

## UI를 한 번 크게 정리했다

기존 화면은 상단 메뉴에 기능이 길게 나열되어 있었다.  
처음에는 기능 수가 적어서 괜찮았지만, 인코딩 수정, 대체텍스트 추출, PDF 구조 정렬, PDF 2.0 변환, 썸네일 추출, MCID 수정처럼 기능이 늘어나면서 상단 메뉴가 점점 복잡해졌다.

![PDF Toolkit UI 업데이트 전](/images/posts/pdf-toolkit-ui-before.png)

업데이트 후에는 주요 기능을 왼쪽 네비게이션 레일로 옮겼다.  
홈, 오류 수정, 테이블, 추출, 대체텍스트 생성, 변환처럼 작업 단위가 더 명확하게 보이도록 나눴고, 페이지 이동과 확대율 같은 뷰어 조작은 상단에 따로 정리했다.

![PDF Toolkit UI 업데이트 후](/images/posts/pdf-toolkit-ui-after.png)

이 변경의 목적은 단순히 화면을 예쁘게 만드는 것이 아니었다.  
PDF를 확인하다가 오류를 고치고, 테이블을 편집하고, 대체텍스트를 확인하는 흐름이 한 화면 안에서 덜 헷갈리게 이어지도록 만드는 것이 더 중요했다.

## 왼쪽 툴바 글씨를 손봤다

왼쪽 네비게이션 툴바는 작은 영역 안에 아이콘과 텍스트가 같이 들어간다.  
한글 글자가 작게 렌더링되면 살짝 뭉개져 보이거나 아래쪽이 잘리는 문제가 있었다.

그래서 폰트와 버튼 크기를 조정했다.

```python
font = QtGui.QFont("Malgun Gothic", 10)
font.setWeight(QtGui.QFont.Weight.DemiBold)
font.setHintingPreference(QtGui.QFont.HintingPreference.PreferFullHinting)
button.setFont(font)
button.setFixedSize(92, 76)
```

큰 변경은 아니지만, 매번 보는 네비게이션 영역은 이런 작은 차이가 꽤 크게 느껴진다.

## PDF 확대는 마우스 위치 기준으로 바꿨다

PDF 뷰어에서 `Ctrl + 휠`로 확대할 때 기존에는 화면 중심 기준처럼 느껴졌다.  
문서를 확대할 때는 마우스 포인터 아래 지점이 그대로 유지되는 편이 자연스럽다.

그래서 확대 전 마우스 위치의 문서 좌표를 기억하고, 확대 후 스크롤 위치를 보정하도록 했다.

```python
def _change_viewer_zoom(self, multiplier, anchor_pos=None):
    old_zoom = self._viewer_zoom_factor
    new_zoom = max(0.5, min(2.5, old_zoom * multiplier))

    anchor = self._viewer_anchor_at(anchor_pos) if anchor_pos is not None else None
    self._viewer_zoom_factor = new_zoom
    self._update_page_scales()

    if anchor is not None:
        self._restore_viewer_anchor(anchor, anchor_pos)
```

확대된 상태에서는 마우스 드래그로 PDF 화면을 이동할 수 있게 했다.

```python
def _move_viewer_pan(self, event):
    delta = event.globalPosition().toPoint() - self._viewer_pan_start_global
    self.scroll.horizontalScrollBar().setValue(self._viewer_pan_start_h - delta.x())
    self.scroll.verticalScrollBar().setValue(self._viewer_pan_start_v - delta.y())
```

PDF를 크게 확대해서 표나 Figure 영역을 확인할 때 필요한 조작이다.

## 대체텍스트를 직접 수정하고 저장한다

기존에는 대체텍스트를 확인하거나 AI로 생성하는 흐름이 중심이었다.  
하지만 실제 작업에서는 이미 들어 있는 대체텍스트를 바로 수정하고 PDF에 저장해야 하는 경우가 많다.

그래서 대체텍스트 탭에서 Figure 항목을 직접 수정하고 저장할 수 있게 했다.

```python
def _save_image_alt_text_changes(self) -> bool:
    with pikepdf.open(pdf_path) as pdf:
        lookup = _build_struct_elem_lookup(pdf)
        for struct_key, alt_text in changes.items():
            elem = lookup.get(struct_key)
            if _strip_tag(str(elem.get("/S", ""))).lower() != "figure":
                continue
            elem["/Alt"] = pikepdf.String(alt_text)
```


## 테이블 셀 편집 패널도 정리했다

테이블 편집 우측 패널도 계속 다듬었다.

`셀 추가`, `셀 삭제` 버튼에서는 아이콘을 제거했다.  
작은 패널 안에서 아이콘과 텍스트가 같이 있으면 오히려 복잡해 보였기 때문이다.

또 표 컬럼이 왼쪽으로 치우쳐 보이지 않도록 `RowSpan`, `ColSpan` 컬럼은 남는 폭을 채우게 했다.


이번 작업은 새 기능을 많이 붙이는 작업이라기보다, 이미 만든 기능을 실제로 쓰기 좋게 다듬는 작업이었다.
이제 제법 쓸만해진거같은데..? 만든거 보니까 뿌듯하다..
