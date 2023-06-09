import { ReactNode } from "react";
import { Divider } from "../divider";

export function Card({ 
  withCover = false,
  cover = {
    src: 'https://picsum.photos/400/120/?grayscale&blur=8',
    alt: '',
  },
  title,
  children,
  actions,
}: TCardProps) {
  return (
    <article className="bg-white rounded-lg border card">
      {withCover && (
          <div className="pb-2/3">
            <img 
              src={cover.src}
              alt={cover.alt}
              className="object-cover w-full rounded-t-lg" 
            />
          </div> 
      )}

      <div className="p-4">
        {!!title && (
          <>
            <h1 className="text-xl text-black font-semibold mb-2">
              {title}
            </h1>
            <Divider />
          </>
        )}
       
        {children}
      </div>

      {!!actions && (
        <div className="p-4 flex justify-end">
          {actions}        
        </div>
      )}
    </article>
  )
}

type TCardProps = {
  title?: string
  cover?: {
    src: string
    alt: string
  }
  withCover?: boolean
  children: ReactNode
  actions?: ReactNode
}