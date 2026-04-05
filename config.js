/**
 * ============================================
 *  모바일 청첩장 설정 파일
 *  이 파일만 수정하면 청첩장이 완성됩니다.
 *
 *  이미지는 설정이 필요 없습니다.
 *  아래 폴더에 1.jpg, 2.jpg, ... 순서로 넣어주세요:
 *    images/hero/1.jpg       — 메인 사진 (1장)
 *    images/story/1.jpg ...  — 스토리 사진 (자동 감지)
 *    images/gallery/1.jpg ...— 갤러리 사진 (자동 감지)
 *    images/location/1.jpg   — 오시는 길 사진 (1장)
 *    images/og/1.jpg         — OG 공유 썸네일 (1장)
 * ============================================
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "승진",
    lastName: "이",
    fullName: "이승진",
    father: "이계명",
    mother: "김차숙",
    fatherDeceased: false, // 故인이면 true
    motherDeceased: false,
  },

  bride: {
    name: "여림",
    lastName: "이",
    fullName: "이여림",
    father: "이준호",
    mother: "신의영",
    fatherDeceased: false,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-08-29",        // YYYY-MM-DD
    time: "12:30",             // HH:MM (24시간)
    dayOfWeek: "토요일",
    venue: "르비르모어",
    hall: "2층 웨딩홀",
    address: "서울시 강남구 테헤란로 406 A동(선릉역 1번출구)",
    tel: "02-501-7000",
    mapLinks: {
      kakao: "https://kko.to/p1hKxm5XWP",
      naver: "https://naver.me/5WUaJH6t",
    },
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content:
      "2016년 여름, 친구로 처음 만나\n2020년 여름, 연인이 되었습니다.\n\n그리고 다가오는 2026년 여름,\n부부로서 평생을 함께하고자 합니다.\n저희의 새로운 시작을 축복해주시면 감사하겠습니다.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다.",
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이승진", bank: "카카오뱅크", number: "3333-04-5343509" },
      { role: "아버지", name: "이계명", bank: "국민은행", number: "123-45-6789012" },
      { role: "어머니", name: "김차숙", bank: "우리은행", number: "1002-345-678901" },
    ],
    bride: [
      { role: "신부", name: "이여림", bank: "카카오뱅크", number: "3333-19-8364767" },
      { role: "아버지", name: "이준호", bank: "농협", number: "301-0123-4567-01" },
      { role: "어머니", name: "신의영", bank: "기업은행", number: "012-345678-01-012" },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    // Kakao Developers 앱키 (JavaScript 키)
    appKey: "",
    title: "이승진 ♥ 이여림 결혼합니다",
    description: "2026년 8월 29일 토요일 오후 12시 30분\n르비르모어",
  },

  meta: {
    title: "이승진 ♥ 이여림 결혼합니다",
    description: "2025년 5월 17일 토요일 오후 12시 30분, 르비르모어",
  },
};
