import React from 'react';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import InfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import Logo from '../Logo';
import styles from './index.css';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            aboutOpen: false,
        };
    }

    handleClick(event) {
        this.setState({
            aboutOpen: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose() {
        this.setState({
            aboutOpen: false,
        });
    }

    render() {
        return (
            <div>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.aboutBtnContainer}>
                    <IconButton
                        tooltip="About"
                        onClick={this.handleClick.bind(this)}
                    >
                        <InfoOutlineIcon />
                    </IconButton>
                </div>
                <Popover
                    open={this.state.aboutOpen}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose.bind(this)}
                >
                    <div className={styles.aboutContainer}>
                        <h1 className={styles.aboutHeading}>About</h1>
                        <p className={styles.aboutText}>Gist aggregates news and provides simple and unbiased summaries
                            of the news article. With the option of reading more if the user is interested in that
                            piece.</p>
                        <p className={styles.aboutText}>By team <a
                            href="">Gist</a> for Tech Crunch Disrupt Hackathon 2016 in London. </p>
                    </div>
                </Popover>
            </div>
        )
    }
}
;

export default Header;
