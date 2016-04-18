import moment from 'moment';
import { Filter } from '../entities';

export default class calendar extends Filter {
  filter(item) {
    if(!item)
      return;

    return moment(item).calendar(null, {
      lastDay: '[Yesterday]',
      sameDay: 'LT',
      lastWeek: 'dddd',
      sameElse: 'DD/MM/YY'
    })
  }
}
