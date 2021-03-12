import React from "react";
import './Sidebar.css'
import {InputComponent} from "../../components/input/Input";

type InputDataProps = {
    placeholder: string
    width: string
    title: string
}

export const SidebarInputData = (props: InputDataProps) => {
    return <div className="input-item">
        <span>{props.title}</span>
        <InputComponent placeholder={props.placeholder}
                        width={props.width}/>
    </div>
}
