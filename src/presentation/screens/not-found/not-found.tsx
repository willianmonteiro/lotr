import { Alert } from '../../components/alert/alert';
import { Card } from '../../components/card/card';

export function NotFoundScreen() {
  return (
    <Card testId="not-found-card">
      <Alert
        title="404"
        description="Sorry... nothing here."
        severity="info"
      />
    </Card>
  );
}
