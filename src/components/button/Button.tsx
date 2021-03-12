import React from "react";
import {Button} from "primereact/button";

export const ButtonComponent = () => {
    return <>
        <Button style={{height: '25px', fontSize: '10px', width: '155px'}}
                label="Поиск в локальной БД" className="p-button-raised"/>
    </>
}