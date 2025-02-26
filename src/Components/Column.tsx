
import { CustomEvents } from "../Constants"
import { AddNewBtn } from "./AddNewBtn"
import { GridItem, OpenPopup } from "../Interfaces"
import { Content } from "./Content"

export function Column({ row, rowIndex, openPopup }: { row:GridItem[], rowIndex: number, openPopup: (option: OpenPopup, rowIndex: number, colIndex: number) => void }) {
    return (
        <div className="flex">
            {row.map((col, colIndex: number) => <div className="hl_page-creator--row grow m-0">
                <div className="hl_page-creator--column" key={col.id}>
                     <div className="hl_page-creator--element">
                        {col.type ? <Content type={col.type.toLocaleLowerCase()} /> :<AddNewBtn type="element" onAdd={() => openPopup(CustomEvents.openAddElementPopup, rowIndex, colIndex)} />}
                            </div>
                            </div>
                            </div>)}
               </div>
    )
}