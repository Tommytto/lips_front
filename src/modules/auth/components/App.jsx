// @flow
import React from 'react';
import style from './App.local.css';

interface Props {
    title: string;
}

const App = ({ title }: Props) => <div className={style.App}>{title}</div>;

export { App };
