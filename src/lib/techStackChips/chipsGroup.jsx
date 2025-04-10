import Styles from "./tagChips.module.css";

/**
 * @param {object} params 
 * @param {*} [params.children] 
 * @param {string} [params.className] 
 * @param {"small" | "medium" | "large"} [params.compact]
 * @returns 
 */
export default function ChipGroup({ children, className, compact=undefined }) {
  return (
    <div className={`u-layout_flex-row u-layout_flex-start-center ${compact ? Styles.compact : ""} ${compact ? Styles[`compact_${compact}`] : ""} ${className}`}>
        { children }
    </div>
  )
}
