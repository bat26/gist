import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const NewsItem = (props) => {

    let getDescription = () => {
        const safeDescription = escape(props.repo.description);
        return {
            __html: Autolinker.link(safeDescription, {
                email: false,
                phone: false,
                twitter: false,
            }),
        };
    };

    return (
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="images/ok-128.jpg"
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText>
                <Toggle
                    toggled={this.state.expanded}
                    onToggle={this.handleToggle}
                    labelPosition="right"
                    label="This toggle controls the expanded state of the component."
                />
            </CardText>
            <CardMedia
                expandable={true}
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
                <img src="images/nature-600-337.jpg" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
                <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
            </CardActions>
        </Card>
    );

};

NewsItem.propTypes = {
    repo: React.PropTypes.object.isRequired,
};

export default NewsItem;
