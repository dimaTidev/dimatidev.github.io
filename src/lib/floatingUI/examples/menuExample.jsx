import React from 'react'
import { Menu, MenuItem } from '../menu';
import ActionButton from '@/components/atoms/ActionButton';

export function MenuExampleUncontrolled() {
    return (
        <div>
            <Menu label="Menu" style={{height: "40px", padding: "0px 15px"}}>
                <MenuItem onClick={() => console.log("1")}>Option 1</MenuItem>
                <MenuItem onClick={() => console.log("2")}>Option 2</MenuItem>
                <MenuItem onClick={() => console.log("3")}>Option 3</MenuItem>

                <Menu label="sub menu">
                    <MenuItem onClick={() => console.log("S1")}>Sub Option 1</MenuItem>
                    <MenuItem onClick={() => console.log("S2")}>Sub Option 2</MenuItem>
                    <MenuItem onClick={() => console.log("S3")}>Sub Option 3</MenuItem>
                </Menu>
                
                <hr/>
                <MenuItem>
                    <ActionButton onClick={() => console.log("4")}>Option 4</ActionButton>
                </MenuItem>
            </Menu>
        </div>
  )
}
