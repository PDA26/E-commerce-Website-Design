/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            size: event.target.value
        });
        this.props.handleChangeSubmit(event.target.name, event.target.value);
    }

    render() {
        return ( <
            div >
            <
            ul >
            <
            li >
            <
            label >
            <
            input name = "sorting"
            type = "radio"
            value = "Greatest First"
            checked = { this.state.size === "Greatest First" }
            onChange = { this.handleChange }
            />
            Greatest First <
            /label> <
            /li>


            <
            li >
            <
            label >
            <
            input name = "sorting"
            type = "radio"
            value = "Price: Low to High"
            checked = { this.state.size === "Price: Low to High" }
            onChange = { this.handleChange }
            />
            Price: Low to High <
            /label> <
            /li> <
            /ul> <
            /div>
        );
    }
}

export default Radio;                onChange={this.handleChange}
              />
              Price: Low to High
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
