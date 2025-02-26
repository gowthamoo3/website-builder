import React, { useState } from "react";
import { useEffect } from 'react'
import { AddNewBtn } from "./AddNewBtn";
import { Row } from "./Row";
import { CustomEvents } from "../Constants";
import { OpenPopup } from "../Interfaces";
import { Column } from "./Column";
import { GridItem } from "../Interfaces";


const DynamicGrid: React.FC = () => {
  const [grid, setGrid] = useState<GridItem[][]>([[]]);

    useEffect(()=>{

      console.log('useeffect triggered', grid);
  
      window.addEventListener('rowSelected', (e: any)=>{
        console.log('rowSelected event triggered',e.detail);
        addColumn(e.detail.rowIndex, parseInt(e.detail.rowType));
      });

      window.addEventListener('elementSelected', (e: any)=>{
        console.log('elementSelected event triggered',e.detail);
        updateElementType(e.detail.rowIndex, e.detail.colIndex, e.detail.elementType);
      });
    });

  const addRow = () => { 
    openPopup(CustomEvents.openAddRowPopup, grid.length, 0);
    console.log('add row')
    setGrid((prev) => [...prev, []]);
  };

  const addColumn = (rowIndex: number, noOfColoumns: number) => {
    const newGrid = [...grid];

    const coloumn = new Array(noOfColoumns).fill({}).map(() => { return {id: crypto.randomUUID(), type: '' as 'headline' | 'list' | 'image', content: ''}});

    console.log('add column', rowIndex, noOfColoumns, newGrid, coloumn);
    
    newGrid[rowIndex] = coloumn;
    setGrid(newGrid);

    console.log('new grid', newGrid);
  };



  const updateElementType = (rowIndex: number, colIndex: number, elementType: string) => {
    console.log('updateElementType', rowIndex, colIndex, elementType, grid);
    if(!grid?.[rowIndex]?.[colIndex])
      return;
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex].type = elementType as 'headline' | 'list' | 'image';
    setGrid(newGrid);
  };

  const openPopup = (option : OpenPopup, rowIndex: number, colIndex: number) => {
    console.log('openPopup', option, rowIndex, colIndex);
    const event = new CustomEvent(option.customEvent,{detail: { type: option.type, rowIndex, colIndex}});
    window.dispatchEvent(event);
  }

  return (
      <div>{grid.map((row, rowIndex) => (
            <Row addRow={addRow}>

       {row.length === 0 ? <AddNewBtn type="row" onAdd={()=> openPopup(CustomEvents.openAddRowPopup, rowIndex,0)} /> 
       : <Column row={row} rowIndex={rowIndex} openPopup={openPopup} />}

          </Row>
        ))}
      </div>
  );
};

export default DynamicGrid;
