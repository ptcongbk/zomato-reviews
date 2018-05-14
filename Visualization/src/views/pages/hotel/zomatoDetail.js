import React from 'react';
import Rating from 'react-rating';
import Pager from 'react-pager';
import { get } from '../../../utils/request';
import LoadingBlock from '../../shared/Loading/LoadingBlock';

class ZomatoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            data: [],
            loading: false,
            hotelId: this.props.hotelId,
            pageSize: 20,
            totalPage: 0,
            currentPage: 0,
            visiblePage: 3,
        };
        this.fetchData = this.fetchData.bind(this);
        this.handlePageChanged = this.handlePageChanged.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.fetchData(this.state.hotelId);
    }
    handlePageChanged(newPage) {
        this.setState({ currentPage: newPage });
        this.setState({
            reviews: this.state.data.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize),
        });
    }
    fetchData(hotel) {
        get(`/getZomatoReview?hotelId=${hotel}`).then((response) => {
            this.setState({
                data: response.Data,
                loading: false,
                totalPage: response.Data.length / this.state.pageSize,
            });
            this.setState({
                reviews: this.state.data.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize),
            });
        });
    }
    render() {
        return (
            <div >
                <div className="mt-comments">
                    {this.state.loading && <LoadingBlock />}
                    {this.state.reviews.map(review => (
                        <div className="mt-comment">
                            <div className="mt-comment-img">
                                <a href={review.UserLink}>
                                    <img src="../assets/images/person-icon.png" />
                                </a>
                            </div>
                            <div className="mt-comment-body">
                                <div className="mt-comment-info">
                                    <span className="mt-comment-author">{review.Name}</span>
                                    <span className="mt-comment-date">{review.PublishDate}</span>
                                </div>
                                <div className={`rating ${review.Star > 0 ? 'display-block' : 'display-none'}`}>
                                    <Rating
                                        emptySymbol="fa fa-star-o"
                                        fullSymbol="fa fa-star"
                                        fractions={2}
                                        initialRating={review.Star}
                                        readonly="true"
                                    />
                                </div>
                                <div className="mt-comment-text" dangerouslySetInnerHTML={{ __html: review.Review }} />
                            </div>
                        </div>
                    ))}
                </div>
                <Pager
                    total={this.state.totalPage}
                    current={this.state.currentPage}
                    visiblePages={this.state.visiblePage}
                    titles={{
                        first: '«', prev: '‹', next: '›', last: '»',
                    }}
                    className="pagination-sm pull-right"
                    onPageChanged={this.handlePageChanged}
                />
                <div className="clear-both">
                    &nbsp;
                </div>
            </div >

        );
    }
}

export default ZomatoDetail;

