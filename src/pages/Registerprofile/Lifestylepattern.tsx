// 생략된 import 부분은 기존 그대로 유지
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TYPOGRAPHY } from '../../constants/typography';
import { COLORS } from '../../constants/colors';

const Lifestylepattern = () => {
  const navigate = useNavigate();

  // 취침
  const [sleepType, setSleepType] = useState('');
  const [snoreType, setSnoreType] = useState('');
  const [nightWorkType, setNightWorkType] = useState('');

  // 생활
  const [lifestyle, setLifestyle] = useState('');
  const [showerTime, setShowerTime] = useState('');
  const [itemShare, setItemShare] = useState('');

  // 소리
  const [soundTool, setSoundTool] = useState('');
  const [callPlace, setCallPlace] = useState('');

  // 소통
  const [socialType, setSocialType] = useState('');

  // 정리
  const [cleaning, setCleaning] = useState('');

  // 습관
  const [smoking, setSmoking] = useState('');
  const [dormEat, setDormEat] = useState('');

  // 버튼 활성화 조건
  const isFormValid =
    sleepType &&
    snoreType &&
    nightWorkType &&
    lifestyle &&
    showerTime &&
    itemShare &&
    soundTool &&
    callPlace &&
    socialType &&
    cleaning &&
    smoking &&
    dormEat;

  // 공통 버튼 스타일 함수
  const getButtonStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? '#000000' : COLORS.GRAYSCALE.G1,
    color: isSelected ? '#FFFFFF' : '#000000',
  });

  // 버튼 UI
  const renderButtons = (
    options: string[],
    selected: string,
    setSelected: (val: string) => void
  ) => (
    <div className="flex flex-wrap gap-2 py-2">
      {options.map(option => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          style={getButtonStyle(selected === option)}
          className="px-4 py-2 text-sm rounded-full"
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-start justify-start w-full max-w-[375px] mx-auto min-h-screen py-6">
      {/* 상단 뒤로가기 버튼 */}
      <div className="w-[375px] h-[48px] flex items-center justify-start px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
          className="px-0 py-0 bg-transparent"
        >
          <img src="/icons/chevron_left.svg" alt="뒤로가기" />
        </button>
      </div>

      {/* 인디케이터 */}
      <div className="w-[375px] h-[40px] flex items-center justify-start px-4 py-2">
        <img src="/icons/indicator_3.svg" alt="현재 위치" />
      </div>

      {/* 제목 */}
      <div className="w-[375px] h-[48px] flex items-start justify-start px-5 py-[6px]">
        <h2 className={`${TYPOGRAPHY.HEADING2} leading-snug`}>생활 패턴을 알려주세요.</h2>
      </div>

      {/* 설명 */}
      <div className="w-[375px] px-5 py-4">
        <p className={`${TYPOGRAPHY.BODY3} leading-snug whitespace-pre-line`}>
          각각에 카테고리의 모든 생활 패턴을 알려주세요.{'\n'}
          다른 사용자들이 확인할 수 있으며,{'\n'}
          추후 마이페이지에서 수정 가능합니다.
        </p>
      </div>

      {/* 항목들 */}
      <div className="flex flex-col w-[375px] gap-6 px-5">
        {/* 취침 */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/mypage_moon.svg" className="w-4 h-4" />
            <p className={`${TYPOGRAPHY.TITLE1}`}>취침 시간</p>
          </div>
          {renderButtons(['규칙적인 수면', '불규칙적인 수면'], sleepType, setSleepType)}
          {renderButtons(['코골이 · 이갈이 있음', '코골이 · 이갈이 없음'], snoreType, setSnoreType)}
          {renderButtons(['야간 작업 많음', '야간 작업 적음'], nightWorkType, setNightWorkType)}
        </div>

        {/* 생활 */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/mypage_home.svg" className="w-4 h-4" />
            <p className={`${TYPOGRAPHY.TITLE1}`}>생활</p>
          </div>
          {renderButtons(['집콕', '밖콕'], lifestyle, setLifestyle)}
          {renderButtons(['아침 샤워', '저녁 샤워'], showerTime, setShowerTime)}
          {renderButtons(['개인용품 공유 가능', '개인용품 공유 불가능'], itemShare, setItemShare)}
        </div>

        {/* 소리 */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/mypage_sound.svg" className="w-4 h-4" />
            <p className={`${TYPOGRAPHY.TITLE1}`}>소리</p>
          </div>
          {renderButtons(['이어폰 사용', '스피커 사용'], soundTool, setSoundTool)}
          {renderButtons(['기숙사 내 통화', '기숙사 밖 통화'], callPlace, setCallPlace)}
        </div>

        {/* 소통 */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/mypage_chat.svg" className="w-4 h-4" />
            <p className={`${TYPOGRAPHY.TITLE1}`}>소통</p>
          </div>
          {renderButtons(['내향적', '외향적'], socialType, setSocialType)}
        </div>

        {/* 정리 */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/mypage_clean.svg" className="w-4 h-4" />
            <p className={`${TYPOGRAPHY.TITLE1}`}>정리</p>
          </div>
          {renderButtons(['위생에 민감해요', '위생에 둔해요'], cleaning, setCleaning)}
        </div>

        {/* 습관 */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/mypage_Person.svg" className="w-4 h-4" />
            <p className={`${TYPOGRAPHY.TITLE1}`}>습관</p>
          </div>
          {renderButtons(['흡연자', '비흡연자'], smoking, setSmoking)}
          {renderButtons(['기숙사 내 취식 가능', '기숙사 내 취식 불가'], dormEat, setDormEat)}
        </div>
      </div>

      {/* 작성 완료 버튼 */}
      <div className="w-[375px] px-5 py-6">
        <button
          disabled={!isFormValid}
          onClick={() => navigate('/Welcome')}
          className={`w-full h-[48px] rounded-md mt-4 ${
            isFormValid ? 'bg-black text-white' : 'bg-gray-300 text-white'
          }`}
        >
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default Lifestylepattern;
