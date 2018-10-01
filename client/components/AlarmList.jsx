import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  digit: {
    width: '80px',
    flexDirection: 'row',
    display: 'inline-block'
  }
});

class AlarmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(alarm => {
            return (
              <li>
                {alarm.hours}:{alarm.minutes}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(AlarmList);
