import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Images
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from './SearchBar.styles';

// React Hooks version
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => {
            return setState(event.currentTarget.value);
          }}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

// Class Component version
// import React, { Component } from 'react';

// class SearchBar extends Component {
//   state = { value: '' };
//   timeout = null;

//   componentDidUpdate(_prevProps, prevState) {
//     if (this.state.value !== prevState.value) {
//       const { setSearchTerm } = this.props;

//       clearTimeout(this.timeout);

//       this.timeout = setTimeout(() => {
//         const { value } = this.state;
//         setSearchTerm(value);
//       }, 500);
//     }
//   }

//   render() {
//     const { value } = this.state;

//     return (
//       <Wrapper>
//         <Content>
//           <img src={searchIcon} alt="search-icon" />
//           <input
//             type="text"
//             placeholder="Search Movie"
//             onChange={(event) => {
//               return this.setState({ value: event.currentTarget.value });
//             }}
//             value={value}
//           />
//         </Content>
//       </Wrapper>
//     );
//   }
// }

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
