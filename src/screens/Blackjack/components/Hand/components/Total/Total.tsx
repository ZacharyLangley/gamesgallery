import { memo } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export const Total = memo(
  ({ total, showTotal = true }: { total?: number; showTotal: boolean }) =>
    showTotal && total !== undefined && <Text style={styles.total}>Total: {total || 0}</Text>,
);

Total.displayName = 'Total';
