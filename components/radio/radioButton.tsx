import React from 'react';
import Radio from './radio';

export interface RadioButtonProps {
  value: string | number;
  style?: React.CSSProperties;
}

export default class RadioButton extends React.Component<RadioButtonProps, any> {
  static defaultProps = {
    prefixCls: 'vsi-radio-button',
  };
  render() {
    return (
      <Radio {...this.props} />
    );
  }
}
