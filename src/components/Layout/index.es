import React from 'react';

import {slayout, slayout__row, slayout__col} from './style.less';

export default function Layout ({children, direction, classList = []}) {
    let childrenList = children.map((item, index) => {
        if (item) {
            const itemClassList = classList[index] ? classList[index] : [];
            switch (direction) {
                case 'vertical':
                    return <div className={[...itemClassList, slayout__row].join(' ')} key={index}>
                        <div className={slayout__col}>
                            {item}
                        </div>
                    </div>;
                case 'horizontal':
                    return <div className={[...itemClassList, slayout__col].join(' ')} key={index}>
                        {item}
                    </div>;
                default:
                    return children;
            }
        }
        return null;
    });
    if ('horizontal' === direction) {
        childrenList = <div className={slayout__row}>
            {childrenList}
        </div>;
    }
    return <div className={slayout} >
        {childrenList}
    </div>;
}