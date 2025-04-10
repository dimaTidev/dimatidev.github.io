import React, { useContext } from 'react'
import Styles from "./careerPath.module.css";
import Icon from '@/lib/UIComponents/icon';
import { Size } from '@/lib/UIComponents/uiCommon';


/**
 * @typedef {Object} PathPoint
 * @property {string} title - The title of the career point.
 * @property {string} [dates] - The dates associated with the career point.
 * @property {string} [iconSrc]
 * @property {string} [location]
 * @property {boolean} [isLeftSide]
 */

/**
 * @param {Object} props - Component props.
 * @param {PathPoint[]} props.pathPoints - An array of path points to draw the career path.
 */
export default function CareerPath({pathPoints}) {
    const isOneSided = true;

    const pathPointsToDraw = pathPoints.map((data, id, array) =>{
        return <CareerPathPoint 
            key={id}
            title={data.title}
            dates={data.dates}
            iconSrc={data.iconSrc}
            isFirst={id == 0}
            isLast={id == array.length - 1}
            isLeftSide={isOneSided ? false : id % 2 == 1}
            isOneSided={isOneSided}
        />
    });

    const content = (
        <div className={`${Styles.base} ${!isOneSided && Styles.baseCentered}`}>
            {pathPointsToDraw}
        </div>
    );

    return (
        <>
            {isOneSided ? (
                    <div className={`${Styles.base} ${Styles.baseCentered}`}>
                        {content}
                    </div>
                ):(
                    content
                )
            }
        </>
    )
}

function CareerPathPoint({
    title, 
    iconSrc = undefined, 
    dates = "", 
    isFirst = false,
    isLast = false,
    isLeftSide = false,
    isOneSided = false
}){

    const info = (
        <div className={Styles.dataContainer} 
            style={{
                textAlign: !isLeftSide ? "left" : "right"
            }}
        >
            <p>{title}</p>
            <p className="u-text-secondary">{dates}</p>
        </div>
    );

    return (
        <div className={Styles.pathPointContainer}>
            {!isOneSided && <div style={{visibility: isLeftSide ? "visible" : "hidden"}}>
                {info}
            </div>}

            <div className={Styles.linesContainer}>
                <div className={Styles.line} style={{visibility: isFirst ? "hidden" : "visible"}}/>
                {iconSrc ? <Icon src={iconSrc} size={Size.S}/> : <div className={`${Styles.point} ${!isFirst && Styles.pointSolid}`}> </div>}
                <div className={Styles.line} style={{visibility: isLast ? "hidden" : "visible"}}/>
            </div>
            <div style={{visibility: !isLeftSide ? "visible" : "hidden"}}>
                {info}
            </div>
        </div>
    )
}
