export function AddNewBtn(props: { type: string, onAdd: () => void}) {

  const { type, onAdd} = props;

    return                 <div  className={`new-${type}-blank`} role="button" onClick={() => {onAdd()}}>
    <span className={`btn ${type === 'row' ? 'btn-light5' : 'btn-light6'} btn-slim capitalize`} >Add New {type}</span>
  </div>
}