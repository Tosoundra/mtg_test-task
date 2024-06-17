import React from 'react';
import './styles.css';
import { UserReviewType } from '../lib/types/UserReviewType';
import { getShorterName } from '../lib/constants/getShorterName';

export class UserReview extends React.Component<UserReviewType> {
  constructor(props: UserReviewType) {
    super(props);
  }

  render(): React.ReactNode {
    const { name, review, date } = this.props;
    const shortName = getShorterName(name);

    return (
      <tr className="table__row">
        <td className='table__name'>{shortName}</td>
        <td className="table__review">{review}</td>
        <td className='table__date'>{date}</td>
      </tr>
    );
  }
}
