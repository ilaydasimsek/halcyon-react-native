import React from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';
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
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {rowDetails}
    </TouchableOpacity>
  );
};

export default ListRow;
