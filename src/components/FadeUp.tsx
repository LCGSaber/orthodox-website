import React from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  startPos?: number;
  delay?: number;
}

export function FadeUp({ children, className, startPos = 75, delay = 0 }: Props) {
  // 简单版本：总是显示元素，不依赖于滚动检测
  // 这确保案例总是可见，不会因为滚动检测问题而隐藏
  return (
    <div
      className={cn(
        'translate-y-0 opacity-100', // 直接设置为可见状态
        className,
        `transition-all duration-[0.6s] ease-out`, // 减少过渡时间以加快显示
        `delay-[${delay * 300}ms]` // 减少延迟时间
      )}
    >
      {children}
    </div>
  );
}
