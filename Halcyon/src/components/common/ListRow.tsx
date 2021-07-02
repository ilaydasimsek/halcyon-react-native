import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {layout, shadow} from '../../style';

type TListRow = {
  onPress?: () => void;
};

const ListRow: React.FC<TListRow> = ({children, onPress}) => {
  const rowDetails = (
    <View style={[layout.tableRow, shadow.low]}>{children}</View>
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
