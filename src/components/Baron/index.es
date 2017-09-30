import React from 'react';
import ReactBaron from 'react-baron';
import jQuery from 'jquery';

import style from './style.less';

export default function Baron (props) {
    return <ReactBaron
        {...props}
        clipperCls={style.clipper}
        scrollerCls={style.scroller}
        trackCls={style.track}
        barCls={style.bar}
        barOnCls={style.baron}
        $={jQuery}>
            {props.children}
    </ReactBaron>;
};