import React from 'react';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';
import RcCalendar from 'rc-calendar';

export default class Calendar extends React.Component<any, any> {
  static defaultProps = {
    locale: CalendarLocale,
    prefixCls: 'vsi-calendar',
  };

  render() {
    return <RcCalendar {...this.props} />;
  }
}
