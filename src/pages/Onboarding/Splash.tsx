import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../constants/colors';

const Splash = () => {
  const navigate = useNavigate();

  // ⏱ 2초 후 /onboarding 페이지로 자동 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 2000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{ backgroundColor: COLORS.PRIMARY }} // ✅ 상수화된 배경색 적용
    >
      <img
        src="/logo/home_logo.svg" // ✅ public 폴더 기준 경로 사용
        alt="로고"
        className="w-[150px] h-auto animate-pulse" // ✅ 로고 크기 및 깜빡이는 애니메이션
      />
    </div>
  );
};

export default Splash;
