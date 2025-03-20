import React from 'react'
import Styles from "./select.module.css";
import StylesInputField from "./inputField.module.css";
import StylesCommon from "./common.module.css";
import { Size } from './uiCommon';

export default function Select({children, size = Size.S, ...prams}) {
  return (
    <select className={`${StylesCommon[`size_${size}`]} ${StylesInputField.inputField}`} {...prams}>
        {children}
    </select>
  )
}
