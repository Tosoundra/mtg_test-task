import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './styles.css';
import { Logo } from '@ui/Logo';
import { Watch } from '@ui/Watch';
import {
  switchToEnglish,
  switchToRussian,
} from '@store/reducers/selectedLanguage/selectedLanguage.slice';
import { AppDispatch, RootState } from '@store/store';

class HeaderComp extends React.Component<PropsFromRedux> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { switchToEnglish, switchToRussian } = this.props;
    if (event.target.value === 'en') {
      switchToEnglish();
    } else if (event.target.value === 'ru') {
      switchToRussian();
    }
  };

  render(): React.ReactNode {
    const { isEnglish } = this.props;

    return (
      <header>
        <nav className="navigation">
          <Logo />
          <div className="utils-container">
            <select
              name="languages"
              id="languages"
              value={isEnglish ? 'en' : 'ru'}
              onChange={this.handleLanguageChange}
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <Watch />
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isEnglish: state.selectedLanguage.isEnglish,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  switchToEnglish: () => dispatch(switchToEnglish()),
  switchToRussian: () => dispatch(switchToRussian()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export const Header = connector(HeaderComp);
