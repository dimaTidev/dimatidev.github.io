'use client'

import Styles from "./collaborators.module.css";
import StylesCommon from "@/lib/UIComponents/common.module.css";
import Avatar from '@/lib/UIComponents/avatar';
import { Size } from '@/lib/UIComponents/uiCommon';

/**
 * @param {Object} params
 * @param {Array<{ avatarImageUrl: string }>} params.collaborators
 */
export default function Collaborators({collaborators, size=Size.M, ...params}) {

  const maxCount = 5;

  collaborators ??= [];
  const avatarsToDraw = [];

  for (let i = 0; i < collaborators.length && i < maxCount; i++) {
    avatarsToDraw.push(<Avatar size={size} key={i} src={collaborators[i].avatarImageUrl}/>);
  }

  const hiddenCount = Math.max(0, collaborators.length - maxCount);

  return (
    <div className={Styles.base} {...params}>
        <div className={`${Styles.avatarsContainer} ${Styles[`overlap_${size}`]}`}>
          {avatarsToDraw} 
          {hiddenCount > 0 && <>
          <Avatar size={size}><a className={`${StylesCommon[`textSize_${size}`]}`}>+{hiddenCount}</a></Avatar>
        </>}
        </div>
    </div>
  )
}
