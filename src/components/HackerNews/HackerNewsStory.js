import React from 'react';
import styles from './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const NewsArticle = (props) => {


    return (
        <Card>
            <CardHeader
                title={props.story.title}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={true}>
                <h1>Hello World</h1>
                {props.story.by}
            </CardText>
            <CardText expandable={true}>
                THIS IS MORE OF THE STORY
            </CardText>
            <CardText expandable={true}>
                Even more
            </CardText>
            <CardActions className={styles.actioncard} expandable={true}>
                 <FlatButton className={styles.button} >Read More</FlatButton>
            </CardActions>
        </Card>
    );

};

NewsArticle.propTypes = {
    story: React.PropTypes.object.isRequired,
};

export default NewsArticle;