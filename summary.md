# 정리

## COLOR

- red = #873049 #D8C7CC
- green #2f7e62 #D4FEF3
- blue = #2d767e #c5fafc

## FONT

- 하이라이트 = 롯데리아찹
- 기본 = NOTOSANS KR, PROMPT

## TEXTS

- 섹션4 (성분 소개)

스티키로 하고

이름
당 0,
과즙 100,
탄산 4.0
칼로리 0
용량 355
적정 보관온도 2
비타민 1000mg

재료
물, 이산화탄소, 비타민C, 아세설팜칼륨
레몬, 라임(과일)

- 섹션5 (맛 소개)

여기는 카드처럼 만들고 성분에 대해서 시각적으로 표현하기

딸복 =
레라 =
포민 =

- 섹션6 (이미지)

EVERYDAY TOKK!
ART TOKK!

- 섹션7 마무리

## 섹션 구성

### 메인

- TOKK에 대한 호기심 유발

- 떠 있는 캔
- 크고 임팩트 있는 메인 타이틀
- 물결치는 SVG
- 탭 버튼
- 스크롤 인디케이터

### 섹션2

- TOKK에 대해 설명

- 천연 과즙을 사용했다.
- 제로 슈가.
- 매력적인 맛의 조화로 ...
- 톡톡튀는 느낌의 패키지 디자인.

- 버블 텍스트(텍스트가 나타나면 버블이 나왔다 사라짐)
- 텍스트 안에 SVG을 가둬서 물결치는 느낌을 표현

## 캔버스 쪼개기

- 캔버스와 html의 스크롤 모션을 동시에 처리하기가 복잡함
- 캔버스 하나에 여러 요소를 반응형으로 html과 배치하기가 복잡함

- View를 사용해서 섹션별로 캔버스를 분할하고
- 섹션내에서도 독립이 필요한 요소를 View로 분할

- 이미지를 따로 분할한 예시
- 이미지에는 쉐이더를 사용한 모션이 들어감
- 반응형으로 사용하면 이미지의 위치가 바뀌기 때문에 정확한 스크롤 계산이 힘듬
- View로 쪼개고 View태그를 참고해서 위치를 알아냄
- 쉐이더로 스크롤 값을 전달해서 모션 적용

## 에러

- bg-attachment

bg의 사이즈를 100vh에 fixed로 고정시켜놨는데
attachment옵션을 키니까 모바일 화면에서 스티키 섹션일 때
bg가 고정이 아니라 막 움직였음
그냥 옵션을 안쓰면 문제 해결됌

- 모바일에서 tap을 눌렀을 때 버벅거림

문제점은 섹션2의 revealParagraph에서 useColor를 사용중이기 때문
useColor를 안쓰면 해결됌

스크롤 방식을 개선해야함
=> character에서 word로 변경

텍스트 사이에 이미지

      {/* <div className="flex justify-center">
        <p className="flex flex-col text-[5rem] mix-blend-screen text-[#999] font-black">
          <span>HELLO WORLD</span>
          <span className="flex justify-start items-start text-[3rem] h-[3rem]">
            IN
            <span className="flex justify-start items-start">
              <motion.span
                style={{ width }}
                className=" w-[0px] h-[200px] bg-blue-300 inline-block"
              />
              <span>WHAT</span>
            </span>
          </span>
        </p>
      </div> */}
