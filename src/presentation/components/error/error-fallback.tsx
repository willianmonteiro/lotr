import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Alert } from "../alert/alert";
import { ReactNode, Suspense } from "react";
import { Card } from "../card/card";


export function Fallback(props: TFallbackProps) {
  const { children, errorBoundary, loadingFallback } = props;

  return (
    <ErrorBoundary {...errorBoundary}>
      <Suspense fallback={loadingFallback || <p>Carregando...</p>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function ErrorBoundary(parentProps) {
  const canReset = Boolean(parentProps.onReset);
  return (
    <ReactErrorBoundary
      fallbackRender={(props) => <ErrorFallback canReset={canReset} {...props} />}
      {...parentProps}
    />
  );
}

function ErrorFallback({ canReset, error, resetErrorBoundary }: {
  canReset: boolean
  error: Error | string
  resetErrorBoundary: () => void
}) {
  console.log('error', error);
  return (
    <Card>
      <Alert 
        severity='error'
        title={typeof error === 'string' ? error : error?.name}
        description={typeof error === 'string' ? '' : error.message}
      >
      {canReset ? (
        <button type='button' onClick={resetErrorBoundary}>
          Try again
        </button>
      ) : null}
      </Alert>
    </Card>
  );
}

type TFallbackProps = {
  title?: string;
  slug?: string;
  children: ReactNode;
  errorBoundary?: {
    onReset?: () => void;
    resetKeys?: any[];
  };
  loadingFallback?: ReactNode;
};