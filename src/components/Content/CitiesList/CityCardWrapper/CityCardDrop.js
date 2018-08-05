import React from 'react';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';

import {ItemTypes} from '../../../../consts';
import {changeCityPosition} from '../../../../AC/cities';
import './style.css';

const cityCardDropTarget = {
    canDrop(props, monitor) {
        const {city} = props;
        const {cityId} = monitor.getItem();
        return city.id !== cityId
    },

    drop(props, monitor) {
        const {city, before, changeCityPosition} = props;
        const {cityId} = monitor.getItem();
        changeCityPosition(cityId, city.id, before)
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class CityCardDrop extends React.Component {
    render() {
        const {before, connectDropTarget} = this.props;

        return connectDropTarget(
            <div className={this.getCityCardDropClass()}>
                {before ? '<' : '>'}
            </div>
        )
    }

    getCityCardDropClass() {
        const {isOver, canDrop} = this.props;
        const base = 'city-card__drop col-1';

        if (isOver && canDrop) return base + ' city-card__drop_is-over';
        if (!isOver && canDrop) return base + ' city-card__drop_can-drop';
        return base;
    }
}

export default connect(null, {
    changeCityPosition
})(DropTarget(ItemTypes.CITY_CARD, cityCardDropTarget, collect)(CityCardDrop))
