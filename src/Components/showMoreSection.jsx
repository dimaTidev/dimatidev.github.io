import { useState } from 'react'
import Styles from "./showMoreSection.module.css";
import Button from '@/lib/UIComponents/Button';
import { Size, Variant } from '@/lib/UIComponents/uiCommon';

export default function ShowMoreSection({children, ...params}) {
    const [isExpanded, setExpanded] = useState(false)
  return (
    <div className={`${Styles.notExpanded} ${isExpanded && Styles.expanded}`} {...params}>
        <div className={`${!isExpanded && Styles.gradientTransparemt} ${Styles.contentBlock}`}>
            {children}
        </div>

        <Button className={Styles.expandButton} onClick={() => setExpanded((s) => !s)} size={Size.S} variant={Variant.SECONDARY} quiet={true}>
            {isExpanded ? <>&#x25B2; </> : <>&#x25BC; </>}
            {isExpanded ? `Show less` : "Show more"}
        </Button>
    </div>
  )
}
