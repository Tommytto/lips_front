import React from 'react';
import bemCn from 'bem-cn';

const block = bemCn('footer');


class Footer extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper} = this.props;

        return (
            <footer className={bemWrapper ? block.mix(bemWrapper(block())) : block()}>
                Footer
            </footer>
        );
    }

}

export default Footer;