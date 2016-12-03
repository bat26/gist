import React from 'react';
import SVGInline from 'react-svg-inline';
import svg from '../../static/logo.svg';

const Logo = (props) => {
    return (
        <SVGInline
            svg={svg}
            desc={props.desc}
            width={props.width}
            height={props.height}
            cleanup={['width', 'height']}
        />
    );
};

Logo.propTypes = {
    desc:   React.PropTypes.string,
    width:  React.PropTypes.string,
    height: React.PropTypes.string,
};

Logo.defaultProps = {
    desc: 'simpl.press logo',
    width: 'auto',
    height: '50px',
};

export default Logo;
