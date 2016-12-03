import React from 'react';
import styles from '../NewsList/index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import GooglePlaceAutocomplete from 'googlePlaceAutocomplete'

const NewsArticle = (props) => {


    return (
        <Card>
            <CardHeader
                title={props.story.title}
                subtitle={props.story.id}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardActions>
                <FlatButton label="More"/>
            </CardActions>
            <CardText expandable={true}>
                {props.story.by}
            </CardText>
            <CardText expandable={true}>
                THIS IS MORE OF THE STORY
            </CardText>
            <CardText expandable={true}>
                Even more
            </CardText>
        </Card>
    );

};

NewsArticle.propTypes = {
    story: React.PropTypes.object.isRequired,
};

export default NewsArticle;