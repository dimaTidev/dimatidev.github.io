// @ts-nocheck
import Styles from "./tagChips.module.css";
import Image from 'next/image';

/**
 * @param {object} params 
 * @param {"small" | "medium" | "large"} params.size
 * @returns 
 */
export function Chip({ icon="", size="medium", title=undefined, isQuiet=false, alt="chip"}){
    return (
        <div className={`${Styles.chip} ${Styles[`size_${size}`]} ${isQuiet && Styles.chipQuiet}`}>
            <div className={Styles.iconWrapper}>
                <Image src={icon} alt={alt} sizes={"auto"} fill/>
            </div>
            
            {title && <label>{title}</label>}
        </div>
    );
}