import StylesCommon from "./common.module.css";
import Styles from "./avatar.module.css";
import {Size} from "./uiCommon";
import Image from "next/image";

export default function Avatar({
    src=undefined, 
    size=Size.M, 
    alt="image", 
    className="",
    style={},
    children=undefined,
    ...params
}) {
  return (
    <div className={`${Styles.avatarBase} ${StylesCommon[`sizeSquare_${size}`]} ${className}`} style={{...style}} {...params}>    
        {/* {src && <Image className={Styles.image} src={src} alt={alt} sizes={"auto"} fill/>} */}
        {src && <Image className={Styles.image} src={src} alt={alt} width={100} height={100} sizes={"auto"}/>}
        {children}
    </div>
  )
}