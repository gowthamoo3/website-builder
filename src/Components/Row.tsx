import { RowProps } from "../Interfaces"

export function Row(props: RowProps) {
    return               <section className="hl_page-creator--section">
    <div className="hl_page-creator--actions">
      <div className="move-actions">
        <span data-tooltip="tooltip" data-placement="right" title="Up"><i className="fa-solid fa-arrow-up"></i></span>
        <span data-tooltip="tooltip" data-placement="right" title="Down"><i
          className="fa-solid fa-arrow-down"></i></span>
      </div>
      <div className="more-actions">
        <span data-tooltip="tooltip" data-placement="left" title="Settings"><i className="fas fa-cog"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Clone"><i className="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Save"><i className="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Delete"><i className="far fa-trash-alt"></i></span>
      </div>
    </div>
    <span className="add-new-section" data-tooltip="tooltip" data-placement="bottom" title="Add New Section"><i onClick={() => {
      props.addRow()}} className="fa-solid fa-plus"></i></span>
    {props.children}
    </section>
}