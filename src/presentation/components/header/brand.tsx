import logoSrc from '../../assets/logo.png';

export function Brand() {
  return (
    <div className="relative max-w-3xl mx-auto flex flex-col items-center justify-center">
      <img 
        src={logoSrc} 
        alt="Logo" 
        className="w-60" 
      />
    </div>
  )
}