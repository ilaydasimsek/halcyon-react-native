import React from 'react';
import {
  TouchableHighlight,
  View,
  ViewProps,
} from 'react-native';
import {layout, shadow} from '../../style';

type TListRowProps = ViewProps & {
  onPress?: () => void;
};

const ListRow: React.FC<TListRowProps> = ({
  children,
  onPress,
  style,
  ...rest
}) => {
  const rowDetails = (
    <View style={[layout.table.row, shadow.low, style]} {...rest}>
      {children}
    </View>
  );
  if (!onPress) {
    return rowDetails;
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.9}
      underlayColor={'transparent'}>
      {rowDetails}
    </TouchableHighlight>
  );
};

export default ListRow;
