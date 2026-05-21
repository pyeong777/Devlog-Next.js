---
title: "PDF Toolkit에 테이블 셀 편집 기능을 만들었다"
description: "Table, TH, TD 구조를 탐색하고 RowSpan과 ColSpan을 직접 수정하는 기능 개발 기록"
date: "2026-05-14"
category: "pdf-toolkit"
path: "pdf-toolkit-table-cell-editor"
featured: false
image: "/images/ogImage.png"
---

## 수정 기록

테이블 셀 편집 기능을 만들었다.
PDF 접근성 작업에서 테이블 구조는 자주 문제가 된다. 화면에서는 표처럼 보이지만 구조 태그에서는 `TH`, `TD`, `RowSpan`, `ColSpan`이 제대로 들어 있지 않은 경우가 있다.
그래서 PDF Toolkit 안에서 Table 구조를 탐색하고, 셀 단위로 span 값을 수정할 수 있게 했다.
추가로 Gemma4 31B 로컬 모델로 변경했다. 이 친구 성능 좋더라..

처음에는 전체 태그 트리에서 Table을 직접 찾아야 했다. 하지만 테이블 작업을 할 때는 Table, TR, TH, TD만 보는 편이 훨씬 편하다.

그래서 테이블 편집 모드를 별도로 만들었다.

```python
def _show_table_edit_mode(self) -> None:
    self._set_main_workspace(self._viewer_root)
    if not self._renderer:
        self._show_status_message("PDF를 먼저 여세요.", 2500)
        return
    self._populate_table_edit_tree()
```

왼쪽 패널은 테이블 전용 트리로 바뀌고, 오른쪽에는 PDF 화면과 셀 편집 패널이 같이 보이도록 했다.

## RowSpan과 ColSpan을 직접 수정한다

셀 편집 표는 최소한의 컬럼만 두었다.

각 행은 PDF 구조 트리의 TH 또는 TD를 의미한다.  
사용자는 `RowSpan`, `ColSpan` 값을 직접 입력할 수 있다.

값이 바뀌면 바로 PDF에 저장하지 않고 pending 상태로 둔다. 여러 셀을 고친 뒤 한번에 저장하는 방향으로 가야지 끊김 현상이 덜한다.

테이블 편집은 PDF 구조를 실제로 수정하는 기능이다.  
저장할 때는 pikepdf로 현재 PDF를 열고, 구조 태그의 속성을 바꾼 뒤 임시 파일로 저장하고 원본을 교체한다.

```python
with pikepdf.open(pdf_path) as pdf:
    lookup = _build_struct_elem_lookup(pdf)
    elem = lookup.get(struct_key)
    _set_cell_span_attrs(elem, rowspan, colspan)

    pdf.save(tmp_path, object_stream_mode=pikepdf.ObjectStreamMode.preserve)

tmp_path.replace(pdf_path)
```

이 방식은 기존 렌더러가 PDF 파일을 잡고 있는 문제를 피하기 위해, 저장 전에 렌더러를 닫고 저장 후 다시 로드하는 흐름으로 만들었다.

## 선택한 셀을 PDF에서 확인

테이블 편집에서 중요한 것은 지금 어떤 셀을 수정하고 있는지 아는 것이다.  
그래서 셀을 선택하면 PDF 화면의 해당 위치를 강조하도록 했다.

MCID를 기준으로 페이지 안의 영역을 찾고, 해당 영역을 빨간 윤곽선으로 표시한다.

처음에는 일반 하이라이트처럼 배경색을 칠할 수도 있었지만, 표 셀 확인에는 빨간 윤곽선이 더 낫다. 셀 안의 텍스트를 가리지 않기 때문이다.

## 키보드로 이동할 수 있게 했다

셀 편집은 반복 작업이다. 마우스로 클릭하고 값을 입력하는 흐름만으로는 느리다.

그래서 `RowSpan`, `ColSpan` 입력칸에서 방향키와 Tab 이동을 직접 처리했다.

```python
if key == QtCore.Qt.Key.Key_Left:
    if column == 4:
        self._focus_table_span_editor(row, 3)
    else:
        self._clear_table_span_editor_focus(row)
```

기본 `QTableWidget` 포커스 처리만 쓰면 입력칸 안에 커서가 갇히는 느낌이 강했다.  
그래서 event filter에서 직접 스프레드시트처럼 동작하도록 만들었다.

기존에 Adobe Plugin를 만들었었는데 이게 뭔가 애매했다. 사실 어도비에서 API를 제대로 지원 안해줘서 만들고 싶어도 못만드는 기능이 너무 많았다. 
그래서 그냥 Toolkit으로 빼버렸다. 이게 더 사용하기 편하시겠지 다들? ㅋㅋ
