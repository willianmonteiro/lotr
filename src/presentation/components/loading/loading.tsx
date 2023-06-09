import './loading.css';

export function Loading({
  title = "Loading...",
  description = "This may take a few seconds"
}: TLoadingProps) {
  return (
    <div className="w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">{title}</h2>
      <p className="w-1/3 text-center text-white">{description}</p>
    </div>
  )
}

type TLoadingProps = {
  title?: string;
  description?: string;
}