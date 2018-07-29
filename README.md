# react-mui-chip-group
> React mui chip group

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: [],
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-mui-chip-group --registry=https://registry.npm.taobao.org
```

```js
import ReactMuiChipGroup from 'react-mui-chip-group';
```

```scss
// customize your styles:
$react-mui-chip-group-options:(
);

@import 'node_modules/react-mui-chip-group/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-mui-chip-group --save
// import : import ReactMuiChipGroup from 'react-mui-chip-group'

class App extends React.Component {
  state = {
    value: [
      {
        value: 1,
        label: 'xx-1'
      },
      {
        value: 2,
        label: 'xx-2'
      },
      {
        value: 3,
        label: 'xx-3'
      },
      {
        value: 4,
        label: 'xx-4'
      }
    ]
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    const { value } = this.state;
    return (
      <div className="hello-react-mui-chip-group">
        <ReactMuiChipGroup value={value} ref='rc' />
      </div>
    );
  }
}

```
