import { ReactNode } from "react"

export function Alert({
  title,
  description,
  severity,
  children
}: TAlertProps) {
  return (
    <div role="alert">
      <div className={`bg-${severity}-500 text-white font-bold rounded-t px-4 py-2`}>
        {title}
      </div>
      {!description && !children ? null : (
        <div className={`border border-t-0 border-${severity}-400 rounded-b bg-${severity}-100 px-4 py-3 text-${severity}-700`}>
          <p>{description}</p>
          {children}
        </div>
      )}
    </div>
  )
}

type TAlertProps = {
  title: string
  description?: string
  severity: 'error' | 'info' | 'success' | 'warning'
  children?: ReactNode
}