import React from 'react';

import styles from '../../storage/style/appIcons/appIcons.module.css'
import reactUtils from '../../storage/scripts/utils/reactUtils';

export default class DefaultInstanceIcon extends React.Component {
    constructor(props) {
        super(props)

        this.name = props.name;
        this.src = props.src || null;
        this.appUtils = props.appUtils;
    }

    render() {
        return (<>
            <section
                className={`${styles.windowIcon} unselectable`}
                onClick={(e) => {
                    this.appUtils.enableWindowInstance(this.name, this.constructorName, this.src)
                }}
            >
                {reactUtils.loadDisplayIcon(this.name)}
                <p> {this.name} </p>
            </section>
        </>);
    }
};