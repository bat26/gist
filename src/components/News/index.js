import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GeneralIcon, SportIcon, PoliticsIcon, TechCrunchIcon, ProfileIcon} from '../Icons';
import {hackernews, producthunt, profile} from '../../data';
import NewsList from '../NewsList';
import styles from './index.css';
import NewsCategories from '../NewsCategories/NewsCategories.js';

console.log("News Categories object", NewsCategories);



class News extends React.Component {

    constructor() {
        super();

        console.log("THIS IS");
        console.log(NewsCategories());


        this.state = {
            hackernews: {
                data: [],
                loaded: false,
            },
            github: {
                data: [],
                loaded: false,
            },
            producthunt: {
                data: [],
                loaded: false,
            },
            profile: {
                data: [],
                loaded: false,
            },
        };
    }

    componentDidMount() {
        hackernews((data) => {
            this.setState({
                hackernews: {
                    data: data,
                    loaded: true,
                },
            });
        });
    }

    handleActiveTab(tab) {
        switch (tab.props.value) {
            case 'github':
                if (!this.state.github.loaded) {
                    github((data) => {
                        this.setState({
                            github: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
                break;
            case 'producthunt':
                if (!this.state.producthunt.loaded) {
                    producthunt((data) => {
                        this.setState({
                            producthunt: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
                break;
        }
    }

    render() {
        return (
            <Tabs
                className={styles.tabsContainer}
                contentContainerClassName={styles.content}
            >
                <Tab icon={<GeneralIcon title="General" />} value="general">
                    <h1 className={styles.heading}>
                        General News
                    </h1>

                    <NewsList
                        source="hackernews"
                        data={this.state.hackernews.data}
                        loaded={this.state.hackernews.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

                <Tab icon={<SportIcon title="Sport" />} value="sport">
                    <h1 className={styles.heading}>
                        Sport
                    </h1>

                    <NewsList
                        source="hackernews"
                        data={this.state.hackernews.data}
                        loaded={this.state.hackernews.loaded}
                        className={styles.storiesContainer}
                    />


                </Tab>

                <Tab
                    icon={<PoliticsIcon title="Politics" />}
                    value="politics"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Politics
                    </h1>

                    <NewsList
                        source="producthunt"
                        data={this.state.producthunt.data}
                        loaded={this.state.producthunt.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

                <Tab
                    icon={<TechCrunchIcon title="TechCrunch" />}
                    value="techcrunch"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Tech Crunch
                    </h1>

                    <NewsList
                        source="producthunt"
                        data={this.state.producthunt.data}
                        loaded={this.state.producthunt.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

                <Tab
                    icon={<ProfileIcon title="Profile" />}
                    value="profile"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Personal
                    </h1>

                    <NewsList
                        source="profile"
                        data={this.state.producthunt.data}
                        loaded={this.state.producthunt.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

            </Tabs>
        )
    }
};

export default News;
