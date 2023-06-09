export function CardInfo({
  icon,
  label,
  value,
}: TCardInfoProps) {
  return (
    <p className="text-gray-600">
      {!!icon && !!icon?.src && (
        <img 
          src={icon.src} 
          alt={icon.alt} 
          className="w-6 h-6 inline-block align-text-top mr-1" 
        />
      )}
      
      {`${label}: ${value}`}
    </p>
  )
}

type TCardInfoProps = {
  icon?: {
    // component: ReactNode
    src: string
    alt: string
  }
  label: string
  value: string | number
}