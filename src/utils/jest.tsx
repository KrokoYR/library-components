/* eslint-disable react/prop-types */
export {};
// import * as React from 'react';
// import { mount, shallow } from 'enzyme';

// /**
//  * Позволяет не прокидывать стили темы в снапшоты
//  * @param {React.Component} component Тестируемый компонент
//  * @see https://github.com/styled-components/jest-styled-components/issues/256
//  */
// const WrappingThemeProvider = ({ children }) => <UserflowTheme>{children}</UserflowTheme>;

// export const mountWithTheme = (component) => mount(
//   component,
//   { wrappingComponent: WrappingThemeProvider },
// );

// /**
//  * @example
//  * // <div>{component}</div> – Нужна div обертка вокруг компонента, чтобы не падали тесты вида
//  * // expect(wrapper.find(CommunicationListSkeleton).hasClass(className)).toBe(true);
//  */
// export const shallowWithTheme = (component) => shallow(
//   <div>{component}</div>,
//   { wrappingComponent: WrappingThemeProvider },
// );
