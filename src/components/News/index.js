import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GeneralIcon, SportIcon, PoliticsIcon, TechCrunchIcon, PersonalIcon} from '../Icons';
import {hackernews, producthunt, profile} from '../../data';
import NewsList from '../NewsList';
import styles from './index.css';
import NewsCategories from '../NewsCategories/NewsCategories.js';

console.log("News Categories object", NewsCategories);



class News extends React.Component {

    constructor() {
        super();

        this.state = {
            hackernews: {
                data: [],
                loaded: false,
            },
            sports: {
                data: [],
                loaded: false,
            },
            producthunt: {
                data: [],
                loaded: false,
            },
            personal: {
                data: [],
                loaded: false,
            },
            politics: {
                data: [],
                loaded: false,
            },
        };
    }

    componentDidMount() {
        producthunt("news",(error, data) => {
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
            case 'politics':
                if (!this.state.politics.loaded) {
                    producthunt(tab.props.value,(error, data) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        this.setState({
                            politics: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
                break;
            case 'sports':
                if (!this.state.sports.loaded) {
                    producthunt(tab.props.value,(error, data) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        this.setState({
                            sports: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
                break;
            case 'tech news':
                if (!this.state.producthunt.loaded) {
                    producthunt(tab.props.value,(error, data) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        this.setState({
                            producthunt: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
                break;
            case 'personal':
                if (!this.state.personal.loaded) {
                    producthunt("cats",(error, data) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        this.setState({
                            personal: {
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
                <Tab onClick={console.log("Click General")} icon={<GeneralIcon title="General" />} value="general">

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

                <Tab onActive={this.handleActiveTab.bind(this)} icon={<SportIcon title="Sport" />} value="sports">

                    <h1 className={styles.heading}>
                        Sport
                    </h1>

                    <NewsList
                        source="hackernews"
                        data={this.state.sports.data}
                        loaded={this.state.sports.loaded}
                        className={styles.storiesContainer}
                    />


                </Tab>

                <Tab onClick={console.log("Click Politics")}
                    icon={<PoliticsIcon title="Politics" />}
                    value="politics"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Politics
                    </h1>

                    <NewsList
                        source="hackernews"
                        data={this.state.politics.data}
                        loaded={this.state.politics.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

                <Tab onClick={console.log("Click Tech News")}
                    icon={<TechCrunchIcon title="Tech News" />}
                    value="tech news"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Tech News
                    </h1>

                    <NewsList
                        source="hackernews"
                        data={this.state.producthunt.data}
                        loaded={this.state.producthunt.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

                <Tab onClick={console.log("Click Personal")}
                    icon={<PersonalIcon title="Personal" />}
                    value="personal"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Personal
                    </h1>

                    <NewsList
                        source="hackernews"
                        data={this.state.personal.data}
                        loaded={this.state.personal.loaded}
                        className={styles.storiesContainer}
                    />

                </Tab>

            </Tabs>
        )
    }
};

export default News;
