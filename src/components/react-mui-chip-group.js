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
  };

  static defaultProps = {
    value: [],
    onChange: noop
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
    const { className, value, onChange, ...props } = this.props;
    return (
      <section className={classNames('react-mui-chip-group', className)} {...props}>
        {
          value.length > 0 && (
            value.map((item, index) => {
              const { value, label, ...itemProps } = item;
              return (
                <Chip
                  key={index}
                  label={label}
                  onDelete={this._onDelete.bind(this, item)}
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
