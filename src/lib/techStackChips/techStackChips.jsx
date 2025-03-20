// @ts-nocheck
import Styles from "./tagChips.module.css";
import Image from 'next/image';

export function Chip({ icon="", title=undefined, isQuiet=false, isSmallSize=false, alt="chip"}){
    return (
        <div className={`${Styles.chip} ${isSmallSize && Styles.size_S} ${isQuiet && Styles.chipQuiet}`}>
            <div className={Styles.iconWrapper}>
                <Image src={icon} alt={alt} sizes={"auto"} fill/>
            </div>
            
            {title && <label>{title}</label>}
        </div>
    );
}