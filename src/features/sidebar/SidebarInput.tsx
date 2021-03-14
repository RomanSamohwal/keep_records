import React from "react";
import './Sidebar.css'
import {InputComponent} from "../../components/input/Input";

type InputDataProps = {
    id: string
    placeholder: string
    width: string
    title: string
    name: string
    onChange: any
    value: any
}

export const SidebarInputData = (props: InputDataProps) => {
    return <div className="input-item">
        <span>{props.title}</span>
        <InputComponent id = {props.id} name = {props.name} onChange = {props.onChange}
                        value = {props.value} placeholder={props.placeholder} width={props.width}/>
    </div>
}
