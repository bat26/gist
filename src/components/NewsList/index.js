import React from 'react';
import PlaceholderShimmer from '../PlaceholderShimmer';
import HackerNewsStory from '../HackerNews/HackerNewsStory';
import NewsItem from '../NewsItem/NewsItem';

class NewsList extends React.Component {

    shouldComponentUpdate (nextProps) {
      return this.props.loaded !== nextProps.loaded;
    }

    render () {
        if (!this.props.loaded) {
            return (
                <PlaceholderShimmer />
            )
        }

        if (!this.props.data.length) {
            return (
                <div>Oops, we were unable to load the stories :(</div>
            )
        }

        return (
            <div className={this.props.className}>
                {
                    this.props.data.map(item => {
                        if (this.props.source == 'hackernews') {
                            return (
                                <HackerNewsStory
                                    key={item.id}
                                    story={item}
                                />
                            )
                        }
                        if (this.props.source == 'github') {
                            return (
                                <Profile
                                    key={item.url}
                                    repo={item}
                                />
                            )
                        }
                        if (this.props.source == 'producthunt') {
                            return (
                                <ProductHuntItem
                                    key={item.id}
                                    product={item}
                                />
                            )
                        }
                    })
                }
            </div>
        )
    }

};

NewsList.propsTypes = {
    source: React.PropTypes.string.isRequired,
    getData: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    loaded: React.PropTypes.bool.isRequired,
};

export default NewsList;
