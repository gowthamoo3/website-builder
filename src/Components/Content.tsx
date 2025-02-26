import EditableComponent from "./EditableComponent";

export function Content({type}: {type: string}) {
    if(type === 'headline') {
        return <EditableComponent type={"headline"}/>
    }
    if(type.includes('list')) {
        return <EditableComponent type={"list"}/>
    }
    if(type === 'image') {
        return <EditableComponent type={"image"}/>
    }
    return null;
}