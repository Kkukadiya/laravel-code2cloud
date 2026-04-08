import { cn } from '@/lib/utils';

type LogoVariant = 'default' | 'light' | 'dark' | 'minimal';

interface LogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ 
  variant = 'default', 
  size = 'md', 
  showText = true,
  className 
}: LogoProps) => {
  const sizeClasses = {
    sm: { icon: 32, text: 'text-lg', tagline: 'text-[10px]' },
    md: { icon: 40, text: 'text-xl', tagline: 'text-xs' },
    lg: { icon: 56, text: 'text-2xl', tagline: 'text-sm' }
  };

  const iconSize = sizeClasses[size].icon;
  
  const colors = {
    default: {
      primary: 'hsl(var(--accent))',
      secondary: 'hsl(var(--primary))',
      text: 'currentColor'
    },
    light: {
      primary: '#ffffff',
      secondary: '#ffffff',
      text: '#ffffff'
    },
    dark: {
      primary: 'hsl(var(--accent))',
      secondary: 'hsl(var(--primary))',
      text: 'hsl(var(--foreground))'
    },
    minimal: {
      primary: 'currentColor',
      secondary: 'currentColor',
      text: 'currentColor'
    }
  };

  const currentColors = colors[variant];

  const renderIcon = () => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Cloud shape */}
      <path 
        d="M75 45c0-11-9-20-20-20-9 0-16.5 6-19 14-1-.3-2-.5-3-.5-8.3 0-15 6.7-15 15s6.7 15 15 15h42c6.6 0 12-5.4 12-12 0-6.2-4.7-11.3-10.8-11.9-.1-.2-.2-.4-.2-.6z"
        fill={currentColors.primary}
      />
      
      {/* Code brackets < > */}
      <g fill={variant === 'light' ? 'hsl(var(--primary))' : 'hsl(var(--primary-foreground))'}>
        {/* Left bracket < */}
        <path d="M38 42l-10 10 10 10 3-3-7-7 7-7-3-3z" />
        {/* Right bracket > */}
        <path d="M62 42l10 10-10 10-3-3 7-7-7-7 3-3z" />
        {/* Slash / */}
        <rect x="47" y="38" width="6" height="26" rx="2" transform="rotate(-15 50 51)" />
      </g>
    </svg>
  );

  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div className="group-hover:scale-105 transition-transform duration-300">
        {renderIcon()}
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span 
            className={cn(
              "font-display font-bold tracking-tight",
              sizeClasses[size].text
            )}
            style={{ color: currentColors.text }}
          >
            Codes<span style={{ color: currentColors.primary }}>2</span>cloud
          </span>
          {size !== 'sm' && (
            <span 
              className={cn(
                "font-medium tracking-wider uppercase opacity-60",
                sizeClasses[size].tagline
              )}
              style={{ color: currentColors.text }}
            >
              Digital Solutions
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
