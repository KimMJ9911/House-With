import { COLORS } from '../../constants/colors';
import Button from '../../components/Button/Button';
import { TYPOGRAPHY } from '../../constants/typography';
import { useNavigate } from 'react-router-dom';

const Screen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login/screen');
  };

  return (
    <div className="flex flex-col items-start justify-start w-full max-w-[375px] mx-auto min-h-screen py-6">
      {/* 내비게이션 바*/}
      <div className="w-screen h-[48px] flex items-center justify-start px-4 py-1 mb-4">
        <img
          src="../public/logo/home_logo.svg"
          alt="house with 로고"
          className="w-[105px] h-[37px]"
        />
      </div>

      {/* 상단: 제목 */}
      <div className="w-full h-[88px] flex items-start justify-start px-6 py-4 mb-4">
        <h2 className={`${TYPOGRAPHY.HEADING2} leading-snug`}>
          잘맞는 룸메이트,
          <br />
          이제 하우스윗에서 만나요
        </h2>
      </div>

      {/* 중간: 이모지 */}
      <div className="mb-12">
        <img src="../public/image/login.svg" alt="집 이모지" className="w-full h-[288px] mx-auto" />
      </div>

      {/* 하단: 로그인 버튼_카카오 */}
      <div className="flex items-center justify-center w-full h-[64px] px-6">
        <Button size="lg" onClick={handleStart}>
          카카오 로그인
        </Button>
      </div>

      {/* 하단: 로그인 버튼_네이버 */}
      <div className="flex items-center justify-center w-full h-[64px] px-6">
        <Button size="lg" onClick={handleStart}>
          네이버 로그인
        </Button>
      </div>

      <div className="flex items-center justify-center w-full h-[64px] px-6">
        <p className={`${TYPOGRAPHY.BODY3} ${COLORS.GRAYSCALE.G6} leading-snug`}>
          아직 하우스윗의 회원이 아니신가요? {''}
          <span
            onClick={() => navigate('/emailinput')}
            className={`${TYPOGRAPHY.TITLE1} ${COLORS.GRAYSCALE.G6} leading-snug`}
          >
            회원가입하기
          </span>
        </p>
      </div>
    </div>
  );
};

export default Screen;
