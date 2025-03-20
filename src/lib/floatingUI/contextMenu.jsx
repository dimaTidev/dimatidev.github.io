import "./css/contextMenu.css"
import { createContext, useContext, useEffect, useState } from "react";

const ContextMenuContext = createContext({
    /**
    * @property {{ x: number, y: number }} viewPortPosition
    * @property {Array<ContextMenuEntry>} entries
    */
    OpenContextMenu(viewPortPosition, entries) {},
});

export function useContextMenu() {
  const context = useContext(ContextMenuContext);

  if (!context) {
    throw new Error("Context menu components must be wrapped in a ContextMenu provider");
  }

  return context;
}     

const contextMenuId = "context-menu-panel";

/**
* @typedef {Object} ContextMenuEntry
* @property {string} name
* @property {Function} func
*/

/**
 * ContextMenu component that manages a list of context menu entries and their visibility.
 * @param {{ children: React.ReactNode }} props 
 */
function ContextMenu({children}){
    /** @type {[Array<ContextMenuEntry>, Function]} */
    const [entries, setEntries] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [position, setPosition] = useState({x:0, y:0});  // Window based position

    /**
    * @property {{ x: number, y: number }} viewPortPosition
    * @property {Array<ContextMenuEntry>} entries
    */
    function OpenContextMenu(viewPortPosition, entries){
        // Validation
        if (!Array.isArray(entries) || !entries.every(entry => typeof entry.name === 'string' && typeof entry.func === 'function')) {
            throw new Error("Invalid entries. Each entry must have a 'name' (string) and 'func' (function).");
        }

        setEntries(entries);
        setOpen(true);
        setPosition(viewPortPosition);
    }

    // Disable on click
    useEffect(() =>{
        const handlePointerDown = (e) => {
            const contextMenuPanel = e.target.closest(`#${contextMenuId}`);

            // If the context menu panel is not found, close the menu
            if (!contextMenuPanel) {
                setOpen(false);
            }
        };
    
        window.addEventListener('pointerdown', handlePointerDown);
        return () => {
            window.removeEventListener('pointerdown', handlePointerDown);
        };
    }, [isOpen]);

    return (
        <ContextMenuContext.Provider value={{OpenContextMenu}}>
            {children}

            {isOpen && (
                <div id={contextMenuId} className="context-menu" onContextMenu={(e) => e.preventDefault()} style={{
                    position: "fixed",
                    left: position.x,
                    top: position.y,
                }}>
                    {entries.map((el, i) => <button key={i} onClick={() => {
                        el.func();
                        setOpen(false);
                    }}  className="context-menu-button-entry">{el.name}</button>)}
                </div>
            )}
        </ContextMenuContext.Provider>
    )
}


export { ContextMenu };

/** 
 * @type {ContextMenuEntry} 
 * This is just for documentation purposes and won't be a runtime export.
 */
export const ContextMenuEntryType = null; // Placeholder for documentation