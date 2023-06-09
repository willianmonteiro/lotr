import { Alert } from "../alert/alert";

export function EmptyList({
  title = "Empty List",
  description = "There are no items to display.",
}: TEmptyListProps) {
  return (
    <Alert 
      title={title} 
      description={description} 
      severity="info" 
    />
  )
}

type TEmptyListProps = {
  title?: string 
  description?: string
}