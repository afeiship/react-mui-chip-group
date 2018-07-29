import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Chip } from '@material-ui/core';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    editable: PropTypes.bool,
  };

  static defaultProps = {
    value: [],
    onChange: noop,
    onClick: noop,
    editable: false,
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.props.value) {
      this.change(value);
    }
  }

  change(inValue) {
    const { onChange } = this.props;
    this.setState({ value: inValue }, () => {
      onChange({
        target: {
          value: inValue
        }
      })
    });
  }

  _onDelete = (inItem, inEvent) => {
    const { value } = this.state;
    const index = value.indexOf(inItem);
    if (index > -1) {
      value.splice(index, 1);
    }
    this.change(value);
  };

  render() {
    const { className, value, editable, onClick, onChange, ...props } = this.props;
    const onDelete = editable ? this._onDelete.bind(this, item) : null;
    return (
      <section className={classNames('react-mui-chip-group', className)} {...props}>
        {
          value.length > 0 && (
            value.map((item, index) => {
              const { value, label, ...itemProps } = item;
              return (
                <Chip
                  className="react-mui-chip-group-item"
                  key={index}
                  label={label}
                  onDelete={onDelete}
                  onClick={onClick}
                  {...itemProps}
                />
              )
            })
          )
        }
      </section>
    );
  }
}
