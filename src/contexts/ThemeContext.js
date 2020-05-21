import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = {
    isDarkMode: true,
  };
  toggleTheme = () => {
    const { isDarkMode } = this.state;
    this.setState({
      isDarkMode: !isDarkMode,
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
