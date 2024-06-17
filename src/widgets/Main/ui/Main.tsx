import { AppDispatch, RootState } from '@store/store';
import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './styles.css';
import { getUsersFeedback } from '../api/getUsersFeedback';
import { UserReview } from '@entities/userReview';
import { UserReviewType } from '@entities/userReview/lib/types/UserReviewType';
import { Pagination } from '@ui/Pagination';

interface MainProps extends PropsFromRedux {}

type State = {
  reviewsToRender: UserReviewType[];
  currentPage: number;
};

class MainComponent extends Component<MainProps, State> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      reviewsToRender: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  componentDidUpdate(prevProps: MainProps) {
    const { reviews, isEnglish } = this.props;
    if (prevProps.reviews !== reviews || prevProps.isEnglish !== isEnglish) {
      if (reviews) {
        const reviewsToRender = isEnglish
          ? Object.values(reviews.en)
          : Object.values(reviews.ru);
        console.log(reviewsToRender);
        this.setState({ reviewsToRender, currentPage: 1 });
      }
    }
  }

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  render(): React.ReactNode {
    const { loading, error, isEnglish } = this.props;
    const { reviewsToRender, currentPage } = this.state;

    if (loading) {
      return <main>Loading...</main>;
    }

    if (error) {
      return <main>Error: {error}</main>;
    }

    const reviewsPerPage = 10;
    const totalPages = Math.ceil(reviewsToRender.length / reviewsPerPage);
    const currentReviews = reviewsToRender.slice(
      (currentPage - 1) * reviewsPerPage,
      currentPage * reviewsPerPage,
    );

    if (loading) {
      return <main>Loading...</main>;
    }

    if (error) {
      return <main>Error: {error}</main>;
    }

    return (
      <main>
        <table className="review-table">
          <thead>
            <tr>
              <th className='review-table__name'>Name</th>
              <th className='review-table__review'>Review</th>
              <th className='review-table__date'>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map(({ name, review, date }, index) => (
              <UserReview key={index} name={name} review={review} date={date} />
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
          className="pagination_center"
        />
      </main>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  reviews: state.data.reviews,
  loading: state.data.loading,
  error: state.data.error,
  isEnglish: state.selectedLanguage.isEnglish,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchData: () => dispatch(getUsersFeedback()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export const Main = connector(MainComponent);
