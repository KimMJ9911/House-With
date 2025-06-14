/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constants/colors';
import { TYPOGRAPHY } from './src/constants/typography';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Tailwind가 클래스 인식할 파일 경로 추가
  ],
  theme: {
    extend: {
      colors: {
        // 기본 색상
        primary: COLORS.PRIMARY,

        // 세컨더리 색상들
        secondary: {
          hw_red1: COLORS.SECONDARY.HW_Red1,
          hw_red2: COLORS.SECONDARY.HW_Re2,
          hw_green1: COLORS.SECONDARY.HW_Green1,
          hw_green2: COLORS.SECONDARY.HW_Green2,
          hw_green3: COLORS.SECONDARY.HW_Green3,
          hw_blue1: COLORS.SECONDARY.HW_Blue1,
          hw_blue2: COLORS.SECONDARY.HW_Blue2,
        },

        // 그레이스케일 색상들
        grayscale: {
          f: COLORS.GRAYSCALE.F,
          g2: COLORS.GRAYSCALE.G2,
          g3: COLORS.GRAYSCALE.G3,
        },
      },

      fontFamily: {
        // Pretendard 등록
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}