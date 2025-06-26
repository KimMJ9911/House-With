import React from 'react';

// 사이즈 스타일을 먼저 정의하고 타입을 추출
const sizeStyles = {
  xl: 'w-full h-12 bg-[#1a1a1a] text-white rounded-[10px]',
  lg: 'w-[274px] h-12 bg-[#1a1a1a] text-white rounded-[10px]',
  md: 'w-[250px] h-12 bg-[#1a1a1a] text-white rounded-lg',
  sm: 'w-[53px] h-12 bg-[#e6e6e6] text-black rounded-[10px]',
  xs: 'w-[144px] h-12 bg-[#1a1a1a] text-white rounded-lg',
  wide: 'w-[316px] h-11 bg-[#FE8B26] text-white rounded-lg',
  narrow: 'w-[160px] h-11 bg-[#FE8B26] text-white rounded-lg',           // 오렌지 + 흰색 텍스트
  narrowGray: 'w-[160px] h-11 bg-[#e6e6e6] text-[#808080] rounded-lg',  // 연한 회색 + #808080 텍스트
} as const;

// 객체의 키에서 타입을 추출
type ButtonSize = keyof typeof sizeStyles;

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  disabled = false,
  onClick,
  className = '',
}) => {

  // 공통 스타일
  const baseStyles = 'font-normal transition-colors duration-200 flex items-center justify-center';
  
  // disabled 스타일
  const disabledStyles = disabled 
  ? 'bg-[#808080] text-white cursor-not-allowed pointer-events-none' 
  : 'cursor-pointer';

 const combinedClassName = [
    baseStyles,
    sizeStyles[size],        // 항상 포함 (크기, border-radius)
    disabledStyles,          // disabled일 때 색상 덮어쓰기
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;