import React from 'react';
import styles from './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const NewsArticle = (props) => {

    var color =
      props.story.sentiment === 'POSITIVE' ? 'blue' :
      props.story.sentiment === 'NEGATIVE' ? 'red' :
      'purple';


    return (
        <Card style={'color:' + color}>
            <CardHeader
                title={props.story.title}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={true}>
                Date: {props.story.publishDate}
            </CardText>
             <CardText expandable={true}>
                 Sentiment: {props.story.sentiment}
            </CardText>
            <CardText expandable={true}>
                 Reputation: {props.story.reputation}
            </CardText>
            <CardText expandable={true}>
                {props.story.summary}
            </CardText>
            <CardActions className={styles.actioncard} expandable={true}>
                 <FlatButton className={styles.button} href={props.story.url}>Read More</FlatButton>
            </CardActions>
        </Card>
    );

};

NewsArticle.propTypes = {
    story: React.PropTypes.object.isRequired,
};

export default NewsArticle;